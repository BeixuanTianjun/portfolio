# Portfolio — Michael Wibowo

A single-page personal portfolio built around motion: a reactive particle field
behind the hero, kinetic typography, scroll-driven reveals, animated skill
rings, a progressing timeline and a magnetic cursor.

Content comes from linkedin.com/in/michael-wibowo and `CV MICHAEL WIBOWO.pdf`.
Anything neither source supplied is tagged `TODO` in `js/profile.js` — search
for it.

No build step, no framework, no CDN. Open `index.html` and it runs.

## Edit your content in one place

**Everything on the page comes from `js/profile.js`.** Markup, styles and motion
never need touching to change what the site says. Open that file, replace the
placeholder text with your LinkedIn content, save, refresh.

```
meta            name, headline, location, photo, the roles that type out
links           email, LinkedIn, GitHub, Instagram, résumé (blank = hidden)
stats           the four numbers that count up in the hero
about           your LinkedIn About section + the facts list beside it
specialties     3-4 headline cards — the things you want to be hired for
skills          name + level (0-100) + group; group names become the filter pills
skillsNote      the line under the Skills heading (blank = the line is hidden)
marquee         the words that scroll past under the hero
experience      one entry per LinkedIn role, newest first
education       schools and degrees
certifications  name, issuer, year
projects        selected work, with an optional link
achievements    competitions — `place` drives the badge, see below
contact         heading, blurb, button label
```

Three things are derived automatically, so don't hand-maintain them:

- **Skill filter pills** are generated from the distinct `group` values.
- **Achievement badges**: a `place` starting 1st / 2nd / 3rd / Winner /
  Champion / Gold / Best gets the solid gradient pill; anything else (Finalist,
  Top 30) gets an outline, so a win stays louder than a placing.
- **The contact form** hides itself whenever `links.email` is empty.
- **The hero portrait** appears only once the file named by `meta.photo`
  actually loads. A blank value, a typo or a missing file leaves no gap and no
  broken-image icon — so an empty `meta.photo` is a valid state, not a bug.

**Section numbering** (01 — About, 02 — Specialties …) is written in the markup,
so it only changes if you add or remove a whole section.

`links.resume` is deliberately empty: the CV PDF carries a phone number, and
linking it publishes that number. Make a version without it before filling the
field in.

**Skill levels are self-assessed and the page says so**, via `skillsNote`. They
are banded on one rule — years of doing it beats studying it now — and the
banding is written above the `skills` array so later edits stay on the same
scale. A high score on something the headline calls you a *candidate* for reads
as a contradiction and costs the rows you actually earned their credibility.

## Run it

```bash
open index.html                    # works straight off the filesystem

npx http-server . -p 8080 -c-1     # or serve it, if you prefer
```

## Deploying

This repo *is* the site. Pages serves the repository root, so `index.html`
here is what loads at:

    https://beixuantianjun.github.io/portfolio/

Settings → Pages → Source is **Deploy from a branch**, `main` / `/ (root)`.
Push to `main` and the change is live in about a minute; there is no build
step and no workflow to wait on.

`.nojekyll` is what stops GitHub running the files through Jekyll, which would
otherwise ignore any path beginning with an underscore.

### Anywhere else

It's a folder of static files, so any static host works — Netlify, Vercel,
Cloudflare Pages, cPanel, an S3 bucket. Upload the folder as-is; there is
nothing to build.

### Link previews

`index.html` carries the `<title>`, description, canonical and `og:`/`twitter:`
tags, and `assets/og.png` is the 1200×630 card. These are deliberately **not**
generated from `profile.js` — crawlers read the served HTML and never run the
script, so anything set at runtime would be invisible to them. If you change
your name or headline in `profile.js`, change the tags in `index.html` too.

Those tags hardcode the site's address. They were updated when this project
moved out of `Kode-Lord_MW`; move it again, or put it on a custom domain, and
`og:url`, `og:image`, `twitter:image` and the canonical link all need updating
with it.

## Structure

```
Portfolio/
├── index.html          # markup shell; sections are empty containers
├── css/
│   ├── fonts.css       # @font-face for self-hosted Manrope
│   └── style.css       # tokens, then components, then reduced-motion
├── js/
│   ├── profile.js      # ← all of your content
│   ├── hero.js         # the particle constellation (canvas 2D)
│   └── main.js         # renders every section, then wires the motion
└── assets/
    ├── og.png          # 1200×630 link-preview card
    ├── <your photo>    # whatever meta.photo names
    └── fonts/          # Manrope 300-800 (woff2)
```

`brand/`, one level up, holds the LinkedIn banner and its source. It is not
part of the site and is not deployed — see `brand/README.md`.

`main.js` runs in two passes: render every section from `PROFILE`, then attach
the observers. That order matters — the observers have nothing to watch until
the content exists.

## What moves, and why

| Effect | Where |
| --- | --- |
| Particle constellation, repelled by the cursor | `hero.js` |
| Name cascading in character by character | `splitText()` in `main.js` |
| Role text typing and deleting on a loop | `main.js` |
| Stat and percentage counters | `countUp()` |
| Blur-and-lift reveals, staggered per group | `IntersectionObserver` + `[data-reveal]` |
| Skill rings drawing to their level | SVG `stroke-dashoffset`, `.skill.is-in` |
| Timeline rail filling as you scroll past | `#timelineFill` in `onScroll()` |
| Spotlight following the cursor across cards | `--mx` / `--my` custom properties |
| 3D tilt on specialty cards | `.tilt` handler, pointer devices only |
| Custom cursor with a trailing ring, magnetic buttons | `.cursor`, `.magnetic` |

The hero canvas stops itself when it scrolls out of view or the tab is hidden,
so it isn't burning frames in the background.

## Accessibility

- `prefers-reduced-motion: reduce` kills every animation, freezes the canvas on
  a single still frame, hides the custom cursor and shows all content at rest.
- Content is real text, never baked into images.
- Focus rings are visible and the mobile menu manages `aria-expanded`.
- Everything from `profile.js` is HTML-escaped before it reaches the DOM.

## The contact form

There's no backend. Submitting validates the three fields, then hands the
message to the visitor's mail client via `mailto:` using `links.email`.

**While `links.email` is empty the form is hidden entirely** — a form that can
only fail is worse than no form — and the LinkedIn button carries the section
on its own. Fill the address in and the form reappears.

If you'd rather have real submissions land in an inbox, point the `<form>` at
Formspree, Netlify Forms or similar and delete the submit handler at the bottom
of `main.js`.
