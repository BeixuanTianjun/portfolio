# Portfolio — Michael Wibowo

A portfolio laid out as a set of engineering drawing sheets: 14 sheets, one on
screen at a time, each with a numbered frame, a header strip and a title block
in the bottom-right corner. Paper, ink and one red, the same as `assets/og.png`
and the LinkedIn banner.

No build step, no framework, no CDN. Open `index.html` and it runs.

## Edit your content in one place

**Every word on the page comes from `js/profile.js`.** The sheets come out of
it in this order:

```
01 cover        meta            name, tagline, chips, the four cover facts, photo
02 about        about           paragraphs + keywords (links feed the side card)
03 education    education       BINUS numbers, the courses behind the projects
04-07 projects  projects[]      one sheet per industrial-engineering project
08-09 work      work[]          ShifuWok, BINECA
10 business     business        entries + pictures
11 markets      markets         entries + pictures
12 skills       skills          five groups
13 awards       leadership, achievements
14 contact      contact, links
```

Add an entry to `projects[]` or `work[]` and it gets its own sheet; the
numbering, the title blocks and the menu update themselves. Keep the total
under 15 sheets.

A project or work entry has `kicker` (course or area), `title`, `meta`,
`lead`, `steps` (what was done, in order), optional `stats`, `chain` (input to
result, the last box turns red), `methods`, `images` and optional links.

**Pictures** are named without the extension: `"assets/projects/poa-razer"`
loads `poa-razer-thumb.webp` on the sheet and `poa-razer.webp` when someone
clicks it. The first picture of a sheet is shown large and the rest as a strip
of details; clicking any of them opens a viewer that steps through every
picture on that sheet. The details of the two posters (`poa-*`, `his-*`) and
the five `eda-*` slides were cut from the posters and from
`EDA_Final_Project.pdf`, so a reader sees them without opening a file.

`links.resume` is deliberately empty: the CV PDF carries a phone number.

## Reading the sheets

Next and Back in the bottom bar, the arrow keys, Page Up / Page Down,
Home / End, or a sideways swipe on a phone. The menu lists every sheet. The
address follows along (`#production-planning`), so a link can open one sheet
directly. On a phone each sheet scrolls on its own.

## Run it

```bash
python3 -m http.server 8080        # then open http://localhost:8080
```

Opening `index.html` straight from the disk also works; only the preloaded
heading font is refused there by the browser.

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
index.html          shell: the deck, the bottom bar, the menu, the picture viewer
css/fonts.css       self-hosted Manrope and Gelasio
css/style.css       tokens, the sheet frame, the layouts, small screens, print
js/profile.js       all of the content
js/sheets.js        builds the sheets from profile.js and runs the deck
assets/og.png       1200×630 link-preview card
assets/projects/    pictures (name.webp + name-thumb.webp) and the EDA deck PDF
swarm/              the older swarm page, still online at /swarm/
```

## Accessibility

- One sheet is shown at a time; the others are `inert` and hidden from screen
  readers, and each sheet is labelled "Sheet n of 14: title".
- `prefers-reduced-motion: reduce` turns the sheet transition off.
- Every picture has alt text; the viewer and the menu close with Escape.
- Everything from `profile.js` is HTML-escaped before it reaches the DOM.
- Printing gives every sheet its own page.
