/* ============================================================================
   sheets.js — builds the drawing sheets from window.PROFILE and runs the deck.

   One sheet is on screen at a time. Next / Back, the arrow keys, Page Up /
   Page Down, Home / End and a sideways swipe move between them; the menu
   lists every sheet. The address bar follows along (#production-planning),
   so a link can point straight at one sheet. Nothing to edit here: the
   words live in profile.js.
   ========================================================================= */
(function () {
  'use strict';
  var P = window.PROFILE;
  if (!P) return;

  /* --- helpers ----------------------------------------------------------- */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function isExternal(href) { return /^https?:/.test(href); }
  function linkAttrs(href) {
    return 'href="' + esc(href) + '"' + (isExternal(href) || /\.pdf$/i.test(href) ? ' target="_blank" rel="noopener"' : '');
  }

  function fig(img, cls) {
    if (!img) return '';
    return '<figure class="fig ' + (cls || '') + '">' +
      '<button class="fig__btn" type="button" data-full="' + esc(img.src) + '.webp" data-alt="' + esc(img.alt) + '" aria-label="Enlarge: ' + esc(img.cap || img.alt) + '">' +
      '<img src="' + esc(img.src) + '-thumb.webp" alt="' + esc(img.alt) + '" loading="lazy" decoding="async"></button>' +
      (img.cap ? '<figcaption>' + esc(img.cap) + '</figcaption>' : '') + '</figure>';
  }

  function figs(imgs, grid) {
    if (!imgs || !imgs.length) return '';
    if (grid) return '<div class="figs figs--grid">' + imgs.map(function (im) { return fig(im); }).join('') + '</div>';
    return '<div class="figs">' + fig(imgs[0], 'fig--main') +
      (imgs.length > 1 ? '<div class="figs__more">' + imgs.slice(1).map(function (im) { return fig(im, 'fig--small'); }).join('') + '</div>' : '') +
      '</div>';
  }

  function chain(items) {
    if (!items || !items.length) return '';
    return '<ol class="chain" aria-label="From input to result">' + items.map(function (c, i) {
      return '<li class="chain__step' + (i === items.length - 1 ? ' is-end' : '') + '">' + esc(c) + '</li>';
    }).join('') + '</ol>';
  }

  function stats(list) {
    if (!list || !list.length) return '';
    return '<dl class="stats">' + list.map(function (s) {
      return '<div><dt>' + esc(s.l) + '</dt><dd>' + esc(s.v) + '</dd></div>';
    }).join('') + '</dl>';
  }

  /* --- the sheet list ---------------------------------------------------- */
  var sheets = [];
  function add(id, menu, section, html, cls) {
    sheets.push({ id: id, menu: menu, section: section, html: html, cls: cls || '' });
  }

  var m = P.meta, L = P.links;

  /* 01 cover */
  add('cover', 'Cover', 'Cover',
    '<div class="cover">' +
      '<div class="cover__text">' +
        '<p class="kicker">' + esc(m.kicker) + '</p>' +
        '<h1 class="cover__name">' + esc(m.first) + '<span>' + esc(m.last) + '</span></h1>' +
        '<i class="rule" aria-hidden="true"></i>' +
        '<p class="cover__tag">' + esc(m.tagline) + '</p>' +
        '<ul class="chips">' + m.chips.map(function (c, i) {
          return '<li class="chip' + (i === 0 ? ' is-on' : '') + '">' + esc(c) + '</li>';
        }).join('') + '</ul>' +
        '<dl class="specs">' + m.facts.map(function (f) {
          return '<div><dt>' + esc(f.k) + '</dt><dd>' + esc(f.v) + '</dd></div>';
        }).join('') + '</dl>' +
      '</div>' +
      (m.photo ?
        '<div class="cover__photo">' +
          '<div class="portrait"><img src="' + esc(m.photo) + '" alt="Portrait of ' + esc(m.name) + '" width="440" height="440"></div>' +
          '<div class="selbox" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>' +
          '<span class="dim" aria-hidden="true">440 × 440</span>' +
        '</div>' : '') +
    '</div>', 'sheet--cover');

  /* 02 about */
  var a = P.about;
  add('about', 'About me', 'About',
    '<div class="split">' +
      '<div>' +
        '<p class="kicker">About</p>' +
        '<h2 class="h2">' + esc(a.heading) + '</h2>' +
        a.paragraphs.map(function (p) { return '<p class="body">' + esc(p) + '</p>'; }).join('') +
        '<p class="keywords"><b>Keywords</b> ' + a.keywords.map(esc).join(' · ') + '</p>' +
      '</div>' +
      '<aside class="card">' +
        (m.photo ? '<img class="card__photo" src="' + esc(m.photo) + '" alt="" width="440" height="440" loading="lazy">' : '') +
        '<dl class="rows">' +
          '<div><dt>Location</dt><dd>Jakarta, Indonesia</dd></div>' +
          '<div><dt>Email</dt><dd><a href="mailto:' + esc(L.email) + '">' + esc(L.email) + '</a></dd></div>' +
          '<div><dt>LinkedIn</dt><dd><a ' + linkAttrs(L.linkedin) + '>' + esc(L.linkedin.replace(/^https?:\/\/(www\.)?/, '')) + '</a></dd></div>' +
          '<div><dt>Status</dt><dd>' + esc(P.contact.status) + '</dd></div>' +
        '</dl>' +
      '</aside>' +
    '</div>');

  /* 03 education */
  var e = P.education;
  add('education', 'Education', 'Education',
    '<p class="kicker">Education</p>' +
    '<h2 class="h2">' + esc(e.school) + '</h2>' +
    '<p class="meta"><b>' + esc(e.degree) + '</b> · ' + esc(e.period) + '</p>' +
    '<dl class="stats stats--edu">' + e.numbers.map(function (s) {
      return '<div><dt>' + esc(s.l) + '</dt><dd>' + esc(s.v) + '</dd></div>';
    }).join('') + '</dl>' +
    '<div class="split split--even">' +
      '<div><h3 class="h3">Courses behind the project sheets</h3>' +
        '<ol class="courses">' + e.courses.map(function (c, i) {
          return '<li><span>' + pad(i + 4) + '</span>' + esc(c) + '</li>';
        }).join('') + '</ol></div>' +
      '<div><h3 class="h3">Also</h3><ul class="list">' + e.other.map(function (o) {
        return '<li><b>' + esc(o.school) + '</b><span>' + esc(o.what) + '</span><em>' + esc(o.when) + '</em></li>';
      }).join('') + '</ul></div>' +
    '</div>');

  /* 04+ projects and work: one case sheet each */
  function caseSheet(c, section) {
    var imgs = c.images || [];
    var text =
      '<p class="kicker">' + esc(c.kicker) + '</p>' +
      '<h2 class="h2">' + esc(c.title) + '</h2>' +
      '<p class="meta">' + esc(c.meta) + '</p>' +
      '<p class="lead">' + esc(c.lead) + '</p>' +
      '<ol class="steps">' + c.steps.map(function (s, i) {
        return '<li><span class="steps__n">' + pad(i + 1) + '</span><h4>' + esc(s.h) + '</h4><p>' + esc(s.t) + '</p></li>';
      }).join('') + '</ol>' +
      stats(c.stats);
    var foot =
      chain(c.chain) +
      '<p class="methods"><b>Methods</b> ' + esc(c.methods) + '</p>' +
      ((c.link || c.link2) ? '<p class="links">' +
        (c.link ? '<a class="btn btn--line" ' + linkAttrs(c.link) + '>' + esc(c.linkLabel || 'Open') + ' <span aria-hidden="true">↗</span></a>' : '') +
        (c.link2 ? '<a class="btn btn--line" ' + linkAttrs(c.link2) + '>' + esc(c.link2Label || 'Open') + ' <span aria-hidden="true">↗</span></a>' : '') +
      '</p>' : '');
    var html = imgs.length ?
      '<div class="case"><div class="case__text">' + text + foot + '</div>' +
        '<div class="case__figs">' + figs(imgs) + '</div></div>' :
      '<div class="case case--wide"><div class="case__text">' + text + '</div><div class="case__foot">' + foot + '</div></div>';
    add(c.id, c.menu, section, html);
  }
  P.projects.forEach(function (p) { caseSheet(p, 'Project'); });
  P.work.forEach(function (w) { caseSheet(w, 'Work'); });

  /* small businesses + markets share a layout: entries left, pictures right */
  function entrySheet(id, menu, section, d, kicker) {
    add(id, menu, section,
      '<div class="case"><div class="case__text">' +
        '<p class="kicker">' + esc(kicker) + '</p>' +
        '<h2 class="h2">' + esc(d.heading) + '</h2>' +
        '<p class="lead">' + esc(d.lead) + '</p>' +
        '<ul class="entries">' + d.items.map(function (it) {
          return '<li><div class="entries__head"><b>' + esc(it.name) + '</b>' +
            (it.role ? '<span>' + esc(it.role) + '</span>' : '') + '<em>' + esc(it.when) + '</em></div>' +
            '<p>' + esc(it.text) + '</p></li>';
        }).join('') + '</ul>' +
      '</div><div class="case__figs">' + figs(d.images, d.images.length > 2) + '</div></div>');
  }
  entrySheet('business', 'Small businesses', 'Business', P.business, 'Business · Since 2021');
  entrySheet('markets', 'Markets', 'Markets', P.markets, 'Markets · Since 2021');

  /* skills */
  add('skills', 'Skills & tools', 'Skills',
    '<p class="kicker">Skills & tools</p>' +
    '<h2 class="h2">What I can do on day one</h2>' +
    '<div class="skills">' + P.skills.map(function (g, i) {
      return '<section class="skill"><span class="skill__n">' + pad(i + 1) + '</span><h4>' + esc(g.title) + '</h4>' +
        '<ul>' + g.items.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul></section>';
    }).join('') + '</div>');

  /* leadership + awards */
  var ld = P.leadership;
  add('awards', 'Leadership & awards', 'Awards',
    '<div class="case"><div class="case__text">' +
      '<p class="kicker">Leadership & awards</p>' +
      '<h2 class="h2">' + esc(ld.role) + '</h2>' +
      '<p class="meta">' + esc(ld.org) + ' · ' + esc(ld.when) + '</p>' +
      ld.text.map(function (t) { return '<p class="body">' + esc(t) + '</p>'; }).join('') +
      '<h3 class="h3">Competitions</h3>' +
      '<ul class="awards">' + P.achievements.map(function (w) {
        var win = /^(1st|2nd|3rd|best|winner|champion|gold)/i.test(w.place);
        return '<li><span class="badge' + (win ? ' is-win' : '') + '">' + esc(w.place) + '</span>' +
          '<div><b>' + esc(w.name) + '</b> <em>' + esc(w.year) + '</em><p>' + esc(w.text) + '</p></div></li>';
      }).join('') + '</ul>' +
    '</div><div class="case__figs">' + figs([ld.image]) + '</div></div>');

  /* contact */
  var c = P.contact;
  add('contact', 'Contact', 'Contact',
    '<div class="contact">' +
      '<p class="kicker">Contact</p>' +
      '<h2 class="contact__h">' + esc(c.heading) + '</h2>' +
      '<p class="lead">' + esc(c.blurb) + '</p>' +
      '<p class="links">' +
        '<a class="btn btn--red" href="mailto:' + esc(L.email) + '?subject=Internship%20opportunity">Email me</a>' +
        '<a class="btn btn--line" ' + linkAttrs(L.linkedin) + '>LinkedIn <span aria-hidden="true">↗</span></a>' +
        (L.resume ? '<a class="btn btn--line" ' + linkAttrs(L.resume) + '>Download CV <span aria-hidden="true">↓</span></a>' : '') +
      '</p>' +
      '<dl class="rows rows--wide">' +
        '<div><dt>Email</dt><dd><a href="mailto:' + esc(L.email) + '">' + esc(L.email) + '</a></dd></div>' +
        '<div><dt>LinkedIn</dt><dd><a ' + linkAttrs(L.linkedin) + '>' + esc(L.linkedin.replace(/^https?:\/\/(www\.)?/, '')) + '</a></dd></div>' +
        (L.instagram ? '<div><dt>Instagram</dt><dd><a ' + linkAttrs(L.instagram) + '>@' + esc(L.instagram.replace(/.*\.com\//, '')) + '</a></dd></div>' : '') +
        '<div><dt>Status</dt><dd>' + esc(c.status) + '</dd></div>' +
      '</dl>' +
    '</div>', 'sheet--contact');

  /* --- frame + title block around every sheet ---------------------------- */
  var N = sheets.length;
  var COLS = 8, ROWS = 4;
  function zones() {
    var top = '', side = '', i;
    for (i = 1; i <= COLS; i++) top += '<span>' + i + '</span>';
    for (i = 0; i < ROWS; i++) side += '<span>' + 'ABCDEFGH'.charAt(i) + '</span>';
    return '<div class="z z--t" aria-hidden="true">' + top + '</div><div class="z z--b" aria-hidden="true">' + top + '</div>' +
           '<div class="z z--l" aria-hidden="true">' + side + '</div><div class="z z--r" aria-hidden="true">' + side + '</div>';
  }
  function titleBlock(s, i) {
    return '<div class="tblock" aria-label="Title block">' +
      '<div><dt>Drawn by</dt><dd>' + esc(m.name) + '</dd></div>' +
      '<div class="tblock__title"><dt>Title</dt><dd>' + esc(s.menu) + '</dd></div>' +
      '<div><dt>Scale</dt><dd>1 : 1</dd></div>' +
      '<div class="tblock__sheet"><dt>Sheet</dt><dd>' + pad(i + 1) + ' / ' + pad(N) + '</dd></div>' +
    '</div>';
  }

  var deck = document.getElementById('deck');
  deck.innerHTML = sheets.map(function (s, i) {
    return '<section class="sheet ' + s.cls + '" id="s-' + esc(s.id) + '" data-i="' + i + '" aria-label="Sheet ' + (i + 1) + ' of ' + N + ': ' + esc(s.menu) + '" aria-roledescription="sheet">' +
      '<div class="sheet__frame">' + zones() +
        '<div class="sheet__inner">' +
          '<header class="sheet__head"><span><b>' + esc(m.initials) + '</b> · ' + esc(m.name) + ' · Portfolio ' + esc(m.year) + '</span>' +
            '<span>' + esc(s.section) + ' · MW-' + pad(i + 1) + '</span></header>' +
          '<div class="sheet__body">' + s.html + '</div>' +
          '<footer class="sheet__foot">' + titleBlock(s, i) + '</footer>' +
        '</div>' +
        '<i class="mark mark--tl"></i><i class="mark mark--tr"></i><i class="mark mark--bl"></i><i class="mark mark--br"></i>' +
      '</div></section>';
  }).join('');

  /* menu: the drawing register */
  var reg = document.getElementById('register');
  reg.innerHTML = sheets.map(function (s, i) {
    return '<li><a href="#' + esc(s.id) + '" data-go="' + i + '"><span>' + pad(i + 1) + '</span>' + esc(s.menu) +
      '<em>' + esc(s.section) + '</em></a></li>';
  }).join('');

  /* --- deck controller ---------------------------------------------------- */
  var els = deck.querySelectorAll('.sheet');
  var cur = -1;
  var prevBtn = document.getElementById('prev');
  var nextBtn = document.getElementById('next');
  var label = document.getElementById('where');
  var bar = document.getElementById('progress');
  var menu = document.getElementById('menu');
  var menuBtn = document.getElementById('menuBtn');

  function indexOfId(id) {
    for (var i = 0; i < N; i++) if (sheets[i].id === id) return i;
    return -1;
  }

  function go(i, opts) {
    i = Math.max(0, Math.min(N - 1, i));
    if (i === cur) return;
    var dir = i > cur ? 1 : -1;
    for (var k = 0; k < N; k++) {
      var el = els[k];
      el.classList.toggle('is-on', k === i);
      el.classList.toggle('is-before', k < i);
      el.setAttribute('aria-hidden', k === i ? 'false' : 'true');
      if ('inert' in el) el.inert = k !== i;
    }
    deck.setAttribute('data-dir', dir);
    var inner = els[i].querySelector('.sheet__inner');
    if (inner) inner.scrollTop = 0;
    cur = i;
    prevBtn.disabled = i === 0;
    nextBtn.disabled = i === N - 1;
    nextBtn.querySelector('span').textContent = i === N - 1 ? 'End' : 'Next';
    label.innerHTML = '<b>' + pad(i + 1) + '</b> / ' + pad(N) + '<span> · ' + esc(sheets[i].menu) + '</span>';
    bar.style.transform = 'scaleX(' + ((i + 1) / N) + ')';
    var links = reg.querySelectorAll('a');
    for (k = 0; k < links.length; k++) links[k].classList.toggle('is-on', k === i);
    var hash = '#' + sheets[i].id;
    if (!(opts && opts.fromHash) && location.hash !== hash) {
      if (history.replaceState) history.replaceState(null, '', i === 0 ? location.pathname + location.search : hash);
    }
    document.title = (i === 0 ? '' : sheets[i].menu + ' · ') + m.name + ' — Portfolio';
  }

  prevBtn.addEventListener('click', function () { go(cur - 1); });
  nextBtn.addEventListener('click', function () { go(cur + 1); });

  function openMenu(open) {
    menu.hidden = !open;
    document.body.classList.toggle('menu-open', open);
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) { var a = reg.querySelector('.is-on') || reg.querySelector('a'); if (a) a.focus(); }
    else menuBtn.focus();
  }
  menuBtn.addEventListener('click', function () { openMenu(menu.hidden); });
  menu.addEventListener('click', function (ev) {
    var a = ev.target.closest('[data-go]');
    if (a) { ev.preventDefault(); go(+a.getAttribute('data-go')); openMenu(false); return; }
    if (ev.target === menu || ev.target.closest('[data-close]')) openMenu(false);
  });

  /* lightbox */
  var lb = document.getElementById('lightbox');
  var lbImg = lb.querySelector('img');
  var lbCap = document.getElementById('lbCap');
  var lbPrev = document.getElementById('lbPrev');
  var lbNext = document.getElementById('lbNext');
  var group = [], gi = 0, lastFig = null;
  function showLb(i) {
    gi = (i + group.length) % group.length;
    var b = group[gi];
    lbImg.src = b.getAttribute('data-full');
    lbImg.alt = b.getAttribute('data-alt');
    var cap = b.parentNode.querySelector('figcaption');
    lbCap.textContent = (cap ? cap.textContent + ' · ' : '') + (gi + 1) + ' / ' + group.length;
    lbPrev.hidden = lbNext.hidden = group.length < 2;
  }
  deck.addEventListener('click', function (ev) {
    var b = ev.target.closest('.fig__btn');
    if (!b) return;
    lastFig = b;
    group = Array.prototype.slice.call(b.closest('.sheet').querySelectorAll('.fig__btn'));
    showLb(group.indexOf(b));
    lb.hidden = false;
    document.getElementById('lbClose').focus();
  });
  function closeLb() { lb.hidden = true; lbImg.removeAttribute('src'); if (lastFig) lastFig.focus(); }
  lb.addEventListener('click', function (ev) {
    if (ev.target === lbPrev) { showLb(gi - 1); return; }
    if (ev.target === lbNext) { showLb(gi + 1); return; }
    if (ev.target === lbImg) return;
    closeLb();
  });

  /* keys */
  document.addEventListener('keydown', function (ev) {
    if (ev.altKey || ev.ctrlKey || ev.metaKey) return;
    if (!lb.hidden) {
      if (ev.key === 'Escape') closeLb();
      else if (ev.key === 'ArrowRight') showLb(gi + 1);
      else if (ev.key === 'ArrowLeft') showLb(gi - 1);
      return;
    }
    if (!menu.hidden) { if (ev.key === 'Escape') openMenu(false); return; }
    var t = ev.target;
    if (t && /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return;
    switch (ev.key) {
      case 'ArrowRight': case 'PageDown': go(cur + 1); break;
      case 'ArrowLeft': case 'PageUp': go(cur - 1); break;
      case 'Home': go(0); break;
      case 'End': go(N - 1); break;
      default: return;
    }
    ev.preventDefault();
  });

  /* swipe */
  var sx = 0, sy = 0, st = 0;
  deck.addEventListener('touchstart', function (ev) {
    var p = ev.touches[0]; sx = p.clientX; sy = p.clientY; st = Date.now();
  }, { passive: true });
  deck.addEventListener('touchend', function (ev) {
    var p = ev.changedTouches[0], dx = p.clientX - sx, dy = p.clientY - sy;
    if (Date.now() - st < 700 && Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.6) go(cur + (dx < 0 ? 1 : -1));
  }, { passive: true });

  /* address bar */
  function fromHash() {
    var id = decodeURIComponent(location.hash.replace(/^#/, ''));
    var i = id ? indexOfId(id) : 0;
    go(i < 0 ? 0 : i, { fromHash: true });
  }
  window.addEventListener('hashchange', fromHash);
  fromHash();
  document.documentElement.classList.add('is-ready');
})();
