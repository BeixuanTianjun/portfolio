/* ============================================================================
   swarm.js — a swarm of agents builds the page as you scroll.

   Each cursor is an agent. When a block scrolls into view it is queued here
   instead of fading in on its own: a pair of agents flies to it, one pins the
   top-left corner, the other drags to the bottom-right (a selection box with
   handles and a size label, like a design tool), and only then is the block
   revealed. Blocks that are not built yet show as dashed wireframes.

   main.js owns the page. This file only decides *when* a block appears:
     PortfolioSwarm.build(el, show)   queue el; calls show(el) once it is built
     PortfolioSwarm.start()           end the intro swirl and begin building

   Without this file, with prefers-reduced-motion, or with ?swarm=off in the
   URL, main.js reveals blocks the old way. Agent names come from
   PROFILE.swarm.names in profile.js.
   ========================================================================= */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || /[?&]swarm=off/.test(location.search) || !window.requestAnimationFrame) return;

  var P = window.PROFILE || {};
  var NAMES = (P.swarm && P.swarm.names && P.swarm.names.length) ? P.swarm.names :
    ['Jarvis', 'Benedict', 'Daphne', 'Audrey', 'William', 'Sebastian',
     'Harriet', 'Eleanor', 'Charlotte', 'Bruno', 'Bianca', 'Julian'];
  /* muted ink colours that sit on the paper background, not neon */
  var COLORS = ['#17160f', '#c4411d', '#3e5c76', '#6b7a3a', '#9a6a1f', '#6d4b6b',
                '#47443c', '#2f6b5e', '#8a3b2e', '#4f5d75', '#7d786c', '#5c4a32'];
  var css = window.getComputedStyle(document.documentElement);
  var SEL = (css.getPropertyValue('--swarm-select') || '').trim() || '#c4411d';
  var WIRE_LINE = (css.getPropertyValue('--swarm-wire') || '').trim() || 'rgba(23,22,15,.18)';
  /* Kept faint on purpose: the swarm should be noticed, not read over. Cursors
     that are only wandering are nearly invisible; the pair that is building a
     block is a little stronger so you can follow what is happening. */
  var SW = P.swarm || {};
  var OP_IDLE = typeof SW.idleOpacity === 'number' ? SW.idleOpacity : 0.1;
  var OP_BUILD = typeof SW.buildOpacity === 'number' ? SW.buildOpacity : 0.3;
  var WIRE = '[data-reveal], .h2.split, .hero__name';

  var cv = document.createElement('canvas');
  cv.setAttribute('aria-hidden', 'true');
  cv.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:950';
  document.body.appendChild(cv);
  var ctx = cv.getContext('2d');
  var W = 0, H = 0, DPR = 1;
  function resize() {
    DPR = Math.min(2, window.devicePixelRatio || 1);
    W = window.innerWidth; H = window.innerHeight;
    cv.width = W * DPR; cv.height = H * DPR;
  }
  window.addEventListener('resize', resize);
  resize();

  var rnd = function (a, b) { return a + Math.random() * (b - a); };
  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
  var ease = function (p) { return p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2; };
  var t0 = performance.now();
  var now = function () { return (performance.now() - t0) / 1000; };

  var N = W < 720 ? 8 : 12, i;
  var agents = [], pairs = [];
  for (i = 0; i < N; i++) {
    agents.push({ i: i, x: W / 2 + rnd(-20, 20), y: H / 2 + rnd(-20, 20), vx: 0, vy: 0,
      c: COLORS[i % COLORS.length], name: NAMES[i % NAMES.length], mode: 'intro',
      tx: W / 2, ty: H / 2, k: 40, cc: 9, hx: W / 2, hy: H / 2, next: 0, busy: false });
  }
  for (i = 0; i < N; i += 2) pairs.push({ A: agents[i], B: agents[i + 1], busy: false });

  var queue = [], jobs = [], follow = [], wires = [], wiresAt = -9;
  var started = false, introDone = false, startedAt = 0, nextLaunch = 0;
  var ring = { x: W / 2, y: H / 2 };
  var mouse = { x: -1, y: -1, t: -99 };

  window.addEventListener('pointermove', function (e) {
    mouse.x = e.clientX; mouse.y = e.clientY; mouse.t = now();
  }, { passive: true });

  var lastY = window.scrollY || 0;
  window.addEventListener('scroll', function () {
    var y = window.scrollY || 0, dy = y - lastY;
    lastY = y;
    if (!dy) return;
    agents.forEach(function (a) {
      if (!a.busy && a.mode === 'roam') {
        a.hy = clamp(H * (dy > 0 ? rnd(0.55, 0.85) : rnd(0.15, 0.45)), 40, H - 40);
        a.hx = rnd(60, W - 60); a.next = 0;
      }
    });
  }, { passive: true });

  /* ------------------------------------------------------------ public API */

  function done(el) { return el.classList.contains('is-in'); }

  function build(el, show) {
    if (el.classList.contains('count')) {
      /* a counter waits for the block it sits in, so numbers do not tick
         while their card is still a wireframe */
      follow.push({ el: el, show: show, parent: el.closest('[data-reveal]') });
      return;
    }
    var item = { el: el, show: show, at: now() };
    queue.push(item);
    /* safety net: a stalled tab must never leave content hidden for good */
    setTimeout(function () { if (!done(el) && !item.shown) { item.shown = true; show(el); } }, 9000);
  }

  function start() { started = true; startedAt = now(); }

  window.PortfolioSwarm = { build: build, start: start, ready: function () { return true; } };

  /* ------------------------------------------------------------------ jobs */

  function inView(r) { return r.bottom > 0 && r.top < H * 0.97 && r.right > 0 && r.left < W; }

  function launch(pair, item, t) {
    var area = item.el.getBoundingClientRect();
    var small = area.width * area.height < 26000;
    var job = { el: item.el, item: item, A: pair.A, B: pair.B, pair: pair, phase: 1, t0: t,
      t2: 0, t3: 0, t4: 0, alpha: 1, fast: small || queue.length > 10 };
    pair.busy = true;
    [pair.A, pair.B].forEach(function (a) { a.busy = true; a.mode = 'build'; });
    jobs.push(job);
  }

  function release(job) {
    job.pair.busy = false;
    var r = job.el.getBoundingClientRect();
    var cx = clamp(r.left + r.width / 2, 60, W - 60), cy = clamp(r.top + r.height / 2, 60, H - 60);
    [job.A, job.B].forEach(function (a) { a.busy = false; a.mode = 'roam'; a.hx = cx; a.hy = cy; a.next = 0; });
    jobs.splice(jobs.indexOf(job), 1);
  }

  function reveal(job) {
    if (!job.item.shown) { job.item.shown = true; job.item.show(job.el); }
  }

  function updateJob(job, t) {
    var A = job.A, B = job.B, r = job.el.getBoundingClientRect();
    if (r.bottom < -40 || r.top > H + 40) { reveal(job); release(job); return; }
    var x0 = r.left, y0 = r.top, x1 = r.right, y1 = r.bottom;
    var d = function (a, x, y) { return Math.hypot(a.x - x, a.y - y); };
    var kk = job.fast ? 1.5 : 1;
    if (job.phase === 1) {
      A.tx = x0; A.ty = y0; B.tx = x0 + 12; B.ty = y0 + 12;
      A.k = B.k = 80 * kk; A.cc = B.cc = 13 * Math.sqrt(kk);
      if ((d(A, x0, y0) < 9 && d(B, x0 + 12, y0 + 12) < 11) || t - job.t0 > 1.8) { job.phase = 2; job.t2 = t; }
    } else if (job.phase === 2) {
      var dur = job.fast ? 0.26 : 0.42, p = clamp((t - job.t2) / dur, 0, 1), e = ease(p);
      A.tx = x0; A.ty = y0;
      B.tx = x0 + 12 + (x1 - x0 - 12) * e; B.ty = y0 + 12 + (y1 - y0 - 12) * e;
      B.k = 240; B.cc = 24;
      if ((p >= 1 && d(B, x1, y1) < 9) || t - job.t2 > 0.95) { job.phase = 3; job.t3 = t; }
    } else if (job.phase === 3) {
      if (t - job.t3 > (job.fast ? 0.12 : 0.3)) { reveal(job); job.phase = 4; job.t4 = t; }
    } else {
      job.alpha = 1 - (t - job.t4) / (job.fast ? 0.3 : 0.45);
      A.mode = B.mode = 'roam';          /* free to wander while the box fades */
      if (job.alpha <= 0) release(job);
    }
  }

  /* --------------------------------------------------------------- stepping */

  function ctaEl() {
    return document.querySelector('#contactForm button[type="submit"]') || document.querySelector('#social');
  }

  function step(dt, t) {
    if (started && !introDone && t - startedAt > 0.5 && t > 1.6) {
      introDone = true;
      agents.forEach(function (a) { if (!a.busy) { a.mode = 'roam'; a.hx = W / 2; a.hy = H / 2; a.next = 0; } });
    }

    /* counters follow their card */
    for (i = follow.length - 1; i >= 0; i--) {
      var f = follow[i];
      if (!f.parent || done(f.parent) || f.parent.getBoundingClientRect().bottom < -40) {
        f.show(f.el); follow.splice(i, 1);
      }
    }

    /* launch the next build */
    if (introDone && t >= nextLaunch && queue.length) {
      var free = null, p;
      for (p = 0; p < pairs.length; p++) if (!pairs[p].busy) { free = pairs[p]; break; }
      if (free) {
        var pick = -1, q;
        for (q = 0; q < queue.length; q++) {
          var it = queue[q];
          if (it.shown || done(it.el)) { queue.splice(q, 1); q--; continue; }
          var r = it.el.getBoundingClientRect();
          if (r.bottom < -20) { it.shown = true; it.show(it.el); queue.splice(q, 1); q--; continue; }
          if (inView(r)) { pick = q; break; }
        }
        if (pick > -1) { var chosen = queue.splice(pick, 1)[0]; launch(free, chosen, t); nextLaunch = t + (queue.length > 10 ? 0.06 : 0.12); }
      }
    }

    /* ring around the contact button once the visible part is built */
    var cta = ctaEl(), wantRing = false;
    if (introDone && cta && !jobs.length && !queue.length) {
      var cr = cta.getBoundingClientRect();
      wantRing = cr.top > H * 0.1 && cr.bottom < H * 0.95;
      if (wantRing) { ring.x = cr.left + cr.width / 2; ring.y = cr.top + cr.height / 2; }
    }

    agents.forEach(function (a) {
      if (!a.busy) {
        if (wantRing && a.mode !== 'ring') a.mode = 'ring';
        if (!wantRing && a.mode === 'ring') { a.mode = 'roam'; a.hx = ring.x; a.hy = ring.y; a.next = 0; }
      }
      var k = 40, c = 9, ang, r;
      if (a.mode === 'intro') {
        ang = t * 2.4 + a.i * 2 * Math.PI / N; r = 70 + (a.i % 4) * 22 + Math.sin(t * 1.3 + a.i) * 10;
        a.tx = W / 2 + Math.cos(ang) * r; a.ty = H / 2 + Math.sin(ang) * r * 0.8; k = 60; c = 7;
      } else if (a.mode === 'roam') {
        if (t > a.next) {
          if ((t - mouse.t) < 3 && a.i % 3 === 0) {
            ang = rnd(0, 6.28); a.tx = clamp(mouse.x + Math.cos(ang) * 70, 12, W - 12); a.ty = clamp(mouse.y + Math.sin(ang) * 70, 12, H - 12);
          } else {
            a.tx = clamp(a.hx + rnd(-170, 170), 14, W - 14); a.ty = clamp(a.hy + rnd(-120, 120), 14, H - 14);
          }
          a.next = t + rnd(1.1, 2.6);
        }
        k = 7; c = 3.4;
      } else if (a.mode === 'ring') {
        ang = t * 1.1 + a.i * 2 * Math.PI / N; r = 100 + (a.i % 3) * 16;
        a.tx = ring.x + Math.cos(ang) * r * 1.6; a.ty = ring.y + Math.sin(ang) * r * 0.8; k = 20; c = 6.5;
      } else if (a.mode === 'build') { k = a.k; c = a.cc; }
      a.vx += (k * (a.tx - a.x) - c * a.vx) * dt; a.vy += (k * (a.ty - a.y) - c * a.vy) * dt;
      a.x += a.vx * dt; a.y += a.vy * dt;
    });
    jobs.slice().forEach(function (j) { updateJob(j, t); });
  }

  /* ---------------------------------------------------------------- drawing */

  function rrect(x, y, w, h, r) {
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x, y, w, h, r); else ctx.rect(x, y, w, h);
  }

  function drawWires(t) {
    if (!started) return;
    if (t - wiresAt > 0.5) { wires = [].slice.call(document.querySelectorAll(WIRE)); wiresAt = t; }
    ctx.save();
    ctx.setLineDash([5, 4]); ctx.lineWidth = 1;
    ctx.strokeStyle = WIRE_LINE; ctx.fillStyle = 'rgba(23,22,15,.025)';
    wires.forEach(function (el) {
      if (done(el)) return;
      var r = el.getBoundingClientRect();
      if (!inView(r) || r.width < 4 || r.height < 4) return;
      rrect(r.left - 2, r.top - 2, r.width + 4, r.height + 4, 6); ctx.fill(); ctx.stroke();
    });
    ctx.restore();
  }

  function drawBox(j) {
    var A = j.A, B = j.B;
    var x0 = Math.min(A.x, B.x), y0 = Math.min(A.y, B.y), x1 = Math.max(A.x, B.x), y1 = Math.max(A.y, B.y);
    var w = x1 - x0, h = y1 - y0;
    ctx.save(); ctx.globalAlpha = clamp(j.alpha, 0, 1) * 0.55;
    ctx.fillStyle = 'rgba(196,65,29,.06)'; ctx.strokeStyle = SEL; ctx.lineWidth = 1.2;
    ctx.fillRect(x0, y0, w, h); ctx.strokeRect(x0, y0, w, h);
    if (w > 18 && h > 18) {
      var hs = [[x0, y0], [x0 + w / 2, y0], [x1, y0], [x0, y0 + h / 2], [x1, y0 + h / 2], [x0, y1], [x0 + w / 2, y1], [x1, y1]];
      ctx.fillStyle = '#fff';
      hs.forEach(function (p) { ctx.fillRect(p[0] - 3, p[1] - 3, 6, 6); ctx.strokeRect(p[0] - 3, p[1] - 3, 6, 6); });
      var label = Math.round(w) + ' × ' + Math.round(h);
      ctx.font = '600 11px ui-monospace,Menlo,Consolas,monospace';
      var tw = ctx.measureText(label).width + 12;
      ctx.fillStyle = SEL; rrect(x1 - tw, y1 + 8, tw, 18, 4); ctx.fill();
      ctx.fillStyle = '#f3f0e8'; ctx.fillText(label, x1 - tw + 6, y1 + 21);
    }
    ctx.restore();
  }

  function drawAgent(a) {
    var building = a.busy && a.mode === 'build';
    ctx.save(); ctx.globalAlpha = building ? OP_BUILD : OP_IDLE; ctx.translate(a.x, a.y); ctx.beginPath();
    ctx.moveTo(0, 0); ctx.lineTo(0, 17); ctx.lineTo(4.6, 13); ctx.lineTo(7.8, 20);
    ctx.lineTo(10.4, 18.8); ctx.lineTo(7.3, 12); ctx.lineTo(13, 12); ctx.closePath();
    ctx.fillStyle = a.c; ctx.strokeStyle = '#f3f0e8'; ctx.lineWidth = 1.2;
    ctx.fill(); ctx.stroke();
    if (building) {
      ctx.font = '600 10px ui-monospace,Menlo,Consolas,monospace';
      var tw = ctx.measureText(a.name).width + 10;
      ctx.fillStyle = a.c; rrect(12, 18, tw, 15, 4); ctx.fill();
      ctx.fillStyle = '#f3f0e8'; ctx.fillText(a.name, 17, 29);
    }
    ctx.restore();
  }

  var last = now();
  function frame() {
    var t = now(), dt = Math.min(0.033, t - last);
    last = t;
    step(dt, t);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    ctx.clearRect(0, 0, W, H);
    drawWires(t);
    jobs.forEach(drawBox);
    agents.forEach(drawAgent);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
