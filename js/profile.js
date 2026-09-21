/* ============================================================================
   profile.js — THE ONLY FILE YOU NEED TO EDIT.
   Every word on the website comes from this object.

   Sources: the LinkedIn profile at linkedin.com/in/michael-wibowo, and
   CV MICHAEL WIBOWO.pdf (Sep 2025). Where the two overlap, the longer
   wording won. Lines tagged TODO are still open — search for them.
   ========================================================================= */

window.PROFILE = {

  /* --- 1. IDENTITY ------------------------------------------------------ */
  meta: {
    name: "Michael Wibowo",
    initials: "MW",
    headline:
      "Industrial Engineering @ BINUS · Financial Modeling & Valuation · Aspiring Investment Banking Analyst",
    /* the words that type themselves out in the hero, one after another */
    roles: [
      "Value Investing on the IDX",
      "Financial Modeling & Valuation",
      "Aspiring Investment Banking Analyst",
      "Founder ×4"
    ],
    location: "Jakarta Metropolitan Area",
    availability: "Open to work · Jakarta · on-site or hybrid",
    /* Path to your photo, relative to index.html. "" hides the avatar. */
    photo: "assets/michael-wibowo.jpg",
    tagline:
      "I built the stock analysis platform I wanted, then put my own " +
      "capital behind what it tells me. Five years in Indonesian equities " +
      "and crypto, hunting mispriced value."
  },

  /* --- 2. LINKS --------------------------------------------------------- */
  links: {
    email: "michaelwibo@gmail.com",
    linkedin: "https://www.linkedin.com/in/michael-wibowo",
    github: "",
    instagram: "https://instagram.com/michael.mw_",
    /* TODO — your CV isn't linked here on purpose: the PDF carries your phone
       number, and publishing it puts the number on the open web where it gets
       scraped. If you want a downloadable CV, make a version without the phone
       (or with it as an image), drop it in this folder, and put the filename
       here — e.g. "cv-michael-wibowo.pdf". */
    resume: ""
  },

  /* --- 3. NUMBERS that count up in the hero ----------------------------- */
  stats: [
    { value: 5,   suffix: "+", label: "Years trading markets" },
    { value: 100, suffix: "+", label: "Traders in the community" },
    { value: 500, suffix: "M", label: "Rupiah revenue, GrowYourUMKM" },
    { value: 5,   suffix: "",  label: "Competition placings" }
  ],

  /* --- 4. ABOUT --------------------------------------------------------- */
  /* TODO — your LinkedIn still has no About section. This draft is built from
     your own CV and experience entries; rewrite it in your voice, then paste
     the result back into LinkedIn so the two tell the same story. */
  about: {
    heading: "About",
    paragraphs: [
      "I'm an Industrial Engineering undergraduate at BINUS University working towards a career in investment banking. Since 2021 I've run my own capital in Indonesian equities and crypto, looking for stocks the market has mispriced — which means the work is already valuation: read the business, decide what it's worth, and only then look at what it costs. The habits that came out of it — size the risk before the upside, write the thesis down, be wrong quickly and cheaply — are the ones I bring to modeling work.",
      "MasterIDX is the one I care about most: a stock analysis platform for the IDX — valuation, screening, ratios, bandarmology, a public API — built and run by me alone, and the same tool I put my own capital through. Before that I'd been selling things for money since school, and I still am. A food stand run to a 50% margin inside three months. GrowYourUMKM, a marketing agency helping the government make its small-business programmes actually work, which reached Rp 500 million in revenue. MWcrypto, a trading community past 100 active traders where I call live market commentary and risk. BullzTCG, where I price, source and sell collectible card assets end to end. Right now I'm funding BINECA 2026 the same way — food resale, danusan and merchandise.",
      "I'm open to analyst internships in Jakarta — investment banking, equity research, corporate finance or valuation. On-site or hybrid."
    ],
    facts: [
      { k: "Based in",   v: "Jakarta Metropolitan Area" },
      { k: "Studying",   v: "Industrial Engineering, BINUS University" },
      { k: "Focus",      v: "Financial modeling · Valuation · Markets" },
      { k: "Training in", v: "RTA · WPPE · WMI" },
      { k: "Open to",    v: "Analyst internships · on-site or hybrid" }
    ]
  },

  /* --- 5. SPECIALTIES — the headline cards ------------------------------ */
  specialties: [
    {
      title: "Financial Modeling & Valuation",
      blurb:
        "Three-statement models, DCFs and comparable company analysis built from the filings up — and then built into MasterIDX, because a method you have to productise is a method you can no longer hand-wave.",
      tags: ["DCF", "Comparables", "Screening", "Excel"]
    },
    {
      title: "Value & Markets",
      blurb:
        "Five years of my own money on the line: mispriced names on the IDX held until the gap closes, and crypto traded live in front of 100+ people. Decide what it's worth before you look at the price — then cut on a broken thesis, not on a red day.",
      tags: ["Value Investing", "Indonesian Equities", "Risk Management", "Technical Analysis"]
    },
    {
      title: "Selling & Building",
      blurb:
        "From a school food stand at a 50% margin to a marketing agency at Rp 500M, a 100-trader community and a collectibles business — and still running danusan and merchandise to fund BINECA 2026. Source it, price it so the margin holds, then go and sell it.",
      tags: ["Sales & Marketing", "Pricing", "Cost Control", "Business Management"]
    },
    {
      title: "Leading & Coordinating",
      blurb:
        "Head of an entrepreneur division for two years, finance division coordinator for BINECA 2026, and a semester mentoring first-year students through onboarding and a capstone run to completion.",
      tags: ["Leadership", "Project Management", "Mentoring", "Communication"]
    }
  ],

  /* --- 6. SKILLS -------------------------------------------------------- */
  /* Levels are self-assessed, and the site says so out loud (skillsNote
     below) so nobody reads them as a certified score.

     Calibrated on one rule: YEARS OF DOING IT beats STUDYING IT NOW.
     - 85-90  you do this live, under real money or real deadlines, and
              other people come to you for it
     - 70-84  you do it regularly and competently in real work
     - 55-69  you are actively learning it and have used it on small things
     - below  you have touched it, not much more

     This is why the markets rows sit above the modeling row. It reads as
     self-aware rather than inflated: a high score on Financial Modeling,
     with no certification or coursework behind it, is a claim a recruiter
     will test in the first five minutes, and failing that test makes them
     doubt the 90% on Technical Analysis, which you have genuinely earned.

     Valuation, Equity Research and Fundamental Analysis sit in the 60s-70s
     rather than the 50s because picking mispriced IDX names with your own
     money IS applied valuation — years of doing it, by the rule above.
     Financial Modeling stays lowest of the group because that row means
     building the three-statement model and the DCF from scratch, which is
     the one part of this you have not done under instruction.

     Move any number you disagree with — it's your claim, not mine. */
  skills: [
    { name: "Technical Analysis",    level: 90, group: "Markets" },
    { name: "Trade Execution",       level: 86, group: "Markets" },
    { name: "Crypto Markets",        level: 85, group: "Markets" },
    { name: "Risk Management",       level: 80, group: "Markets" },
    { name: "Indonesian Equities",   level: 76, group: "Markets" },

    { name: "Market Research",       level: 75, group: "Finance" },
    { name: "Fundamental Analysis",  level: 72, group: "Finance" },
    { name: "Valuation",             level: 66, group: "Finance" },
    { name: "Equity Research",       level: 62, group: "Finance" },
    { name: "Financial Modeling",    level: 58, group: "Finance" },

    { name: "Business Management", level: 78, group: "Business" },
    { name: "Sales & Marketing",   level: 75, group: "Business" },
    { name: "Project Management",  level: 75, group: "Business" },
    { name: "Problem Solving",     level: 76, group: "Business" },

    { name: "Microsoft Excel",     level: 72, group: "Tools" },
    { name: "PowerPoint",          level: 70, group: "Tools" },
    { name: "Data Analysis",       level: 62, group: "Tools" },

    { name: "Communication",       level: 85, group: "Human" },
    { name: "Leadership",          level: 82, group: "Human" },
    { name: "Teamwork",            level: 82, group: "Human" },
    { name: "Adaptability",        level: 80, group: "Human" }
  ],

  /* Printed under the Skills heading. Saying the numbers are self-assessed
     costs nothing and stops a reader treating them as a test score. */
  skillsNote:
    "Self-assessed, on one rule: years of doing it beats studying it now. " +
    "The markets rows are five years of my own money on the line. The " +
    "modeling row is the one I have no formal training in yet, and it's " +
    "scored like it.",

  /* words that scroll past in the marquee strip */
  marquee: [
    "Financial Modeling", "Valuation", "Investment Banking", "Technical Analysis",
    "Risk Management", "Market Research", "DCF", "Entrepreneurship"
  ],

  /* --- 7. EXPERIENCE ---------------------------------------------------- */
  /* Current roles first, then past roles by end date. Merged from LinkedIn
     and the CV — the CV supplied the three oldest entries. */
  experience: [
    {
      role: "Founder",
      org: "MasterIDX",
      type: "Self-employed",
      /* TODO — confirm the start date; this is taken from when the codebase
         first appeared, which may be later than when you started. */
      period: "2026 — Present",
      location: "Jakarta, Indonesia · masteridx.com",
      bullets: [
        "Built and run a paid stock analysis platform for the Indonesian exchange: valuation, screening, financial ratios and bandarmology (broker-level accumulation analysis), with a public API.",
        "Sole operator end to end — product, data pipeline, billing and support. Priced at Rp 299,000, currently with a free month for beta testers while the product is proved out.",
        "The same tool I run my own capital through, so every weakness in it costs me directly before it costs a subscriber."
      ],
      tags: ["Valuation", "IDX", "Bandarmology", "API", "SaaS"]
    },
    {
      role: "Coordinator of Finance Division, BINECA 2026",
      org: "HIMTRI BINUS",
      type: "Organization",
      period: "Jul 2026 — Present",
      location: "Hybrid",
      /* TODO — one number would finish this: how much the division has raised
         so far, or the target. "Raised Rp X of a Rp Y target" beats every
         adjective on this page. */
      bullets: [
        "Raise the event's budget rather than administer it — the finance division funds BINECA 2026 by selling, not by billing.",
        "Run food resale and danusan alongside event merchandise: sourcing stock, setting the price that actually clears a margin, and marketing each drop to campus.",
        "Coordinate the division across pre-orders and selling days so stock, cash and hand-off stay accounted for."
      ],
      tags: ["Sales & Marketing", "Pricing", "Coordinating Skills", "Growth Strategies"]
    },
    {
      role: "Founder",
      org: "BullzTCG",
      type: "Self-employed",
      period: "Mar 2026 — Present",
      location: "Jakarta, Indonesia · On-site",
      bullets: [
        "Oversaw procurement, valuation, and sales of Pokemon and One Piece TCG assets, driving high-margin profitability through targeted market positioning and excellent client communication."
      ],
      tags: ["Communication", "Market Research", "Procurement"]
    },
    {
      role: "Founder & Community Manager",
      org: "MWcrypto",
      type: "Full-time",
      period: "Nov 2024 — Present",
      location: "Jakarta, Indonesia · Hybrid",
      bullets: [
        "Founded and scaled a trading community to 100+ active traders, providing live market commentary, execution strategy, and real-time risk management guidance during active trading sessions.",
        "Conducted regular market analysis to identify opportunities for new business development and competitive advantages."
      ],
      tags: ["Technical Analysis", "Market Research", "Risk Management", "Community"]
    },
    {
      role: "Trader",
      org: "Self-employed",
      type: "Self-employed",
      period: "Feb 2021 — Present",
      location: "Jakarta, Indonesia · Hybrid",
      bullets: [
        "Running my own capital across Indonesian equities and crypto since 2021.",
        "On the equity side the thesis is mispricing: find companies trading below what the business is worth, size the position against how wrong I can afford to be, and wait for the gap to close rather than for a chart to move.",
        "Two exits, one per horizon. A value position is cut when the thesis breaks — not when the price moves against me, which is the same information I already paid for. A trade is cut when the trend breaks.",
        "Keep a written record of entries, sizing and outcomes — the 2025 book is what I show when someone asks whether the approach survives a full year rather than a good month."
      ],
      tags: ["Value Investing", "Indonesian Equities", "Risk Management", "Trade Execution"]
    },
    {
      role: "Freshmen Partner",
      org: "BINUS University",
      type: "Part-time",
      period: "Sep 2025 — Jan 2026",
      location: "West Jakarta, Indonesia · On-site",
      bullets: [
        "Mentored first-year students through university onboarding, tracked academic compliance for mandatory assessments, and directed a capstone tree-planting initiative from execution to completion."
      ],
      tags: ["Mentoring", "Project Management", "Communication"]
    },
    {
      role: "Market Sales Manager",
      org: "Uicreativa",
      type: "Full-time",
      period: "2024",
      location: "Jakarta, Indonesia",
      bullets: [
        "Directed the development and implementation of comprehensive sales and marketing strategies, achieving growth objectives and expanding the client base."
      ],
      tags: ["Sales & Marketing", "Business Management"]
    },
    {
      role: "Founder",
      org: "GrowYourUMKM",
      type: "Self-employed",
      period: "2023 — 2024",
      location: "Banjarmasin, South Borneo",
      bullets: [
        "Built a marketing agency that helps government improve the effectiveness of UMKM (micro, small and medium enterprise) programmes, and helps entrepreneurs build creative businesses that keep up with the times.",
        "Reached Rp 500 million in total revenue."
      ],
      tags: ["Business Management", "Sales & Marketing", "Public Sector"]
    },
    {
      role: "Head of Entrepreneur Division",
      org: "OSIS",
      type: "Student government",
      period: "2021 — 2023",
      location: "Banjarmasin, South Borneo",
      bullets: [
        "Launched and managed a successful food stand, achieving a 50% profit margin within the first three months of operation by implementing effective cost control measures and strategic pricing.",
        "Organized school events and university marketing campaigns that increased foot traffic and customer engagement, leading to a notable rise in sales during the event."
      ],
      tags: ["Leadership", "Cost Control", "Pricing", "Events"]
    }
  ],

  /* --- 8. EDUCATION + CERTIFICATIONS ------------------------------------ */
  education: [
    {
      school: "BINUS University",
      degree: "Bachelor of Industrial Engineering",
      period: "Sep 2023 — Sep 2028",
      detail: "Project Management and Communication."
      /* TODO — add GPA or relevant coursework if you want it on here. */
    },
    {
      school: "Finplan",
      degree: "WPPE — Finance, General",
      period: "Sep 2026 — Present",
      detail: "Securities broker-dealer representative certification programme."
    },
    {
      school: "Kanaan Christian High School",
      degree: "High School Diploma",
      period: "Graduated 2024",
      detail: "Banjarmasin, South Borneo."
    }
  ],

  /* Nothing here is passed, so nothing says it is. "Candidate" is a regulated
     term for the CFA Program — it means registered for a specific exam — and
     a finance reader knows it, so claiming it loosely costs more than it buys.

     Ordered by how committed each one is, which is the only ordering that
     means anything: taking it now, then certain, then next.

     TODO — confirm the issuing bodies before sending this anywhere. RTA and
     CTA are Indonesian technical-analyst certifications and CSA a securities-
     analyst one, but an issuer named wrongly on a CV is exactly what an
     interviewer catches, so these say "Indonesian capital market" until you
     confirm the associations. */
  certifications: [
    { name: "RTA — Registered Technical Analyst",  issuer: "Indonesian capital market", year: "Taking now" },
    { name: "WPPE — Wakil Perantara Pedagang Efek", issuer: "Finplan / OJK",             year: "In training" },
    { name: "WMI — Wakil Manajer Investasi",        issuer: "OJK",                       year: "Planned" },
    { name: "CSA & CTA",                            issuer: "Indonesian capital market", year: "After RTA" }
  ],

  /* --- 9. PROJECTS ------------------------------------------------------ */
  /* Concrete things, so this section isn't just the experience list again. */
  projects: [
    {
      title: "MasterIDX",
      year: "2026",
      blurb:
        "A stock analysis platform for the IDX — valuation, screening, financial ratios and bandarmology, with a public API. Priced at Rp 299,000 and in beta, free for the first month. Built and operated single-handed, and the tool I run my own positions through.",
      tags: ["Valuation", "IDX", "Bandarmology", "API"],
      link: "https://masteridx.com/"
    },
    {
      title: "TeknikalDrill",
      year: "2026",
      blurb:
        "A mock-test application covering the RTA and CTA syllabus, with interactive summaries and mind maps per competency unit. Built while studying for the RTA exam myself — the fastest way to find out what you actually don't know is to have to write the questions.",
      tags: ["Technical Analysis", "RTA & CTA", "Self-built"],
      link: "https://beixuantianjun.github.io/teknikaldrill/"
    },
    {
      title: "2025 Crypto Track Record",
      year: "2025",
      blurb:
        "A full year of trades kept and documented — entries, sizing and outcomes — the record I point at when someone asks whether the approach actually works.",
      tags: ["Trade Execution", "Risk Management", "Documentation"],
      link: ""
      /* TODO — link the record, or a write-up of it, if you're happy to show it. */
    },
    {
      title: "BullzTCG Pop-Up, Mall Taman Anggrek",
      year: "2026",
      blurb:
        "A physical booth run with @hiddentreasuresociety: pricing inventory on the day, handling buyers face to face, and turning a card collection into a margin.",
      tags: ["Retail", "Pricing", "Client Relations"],
      link: ""
    },
    {
      title: "Campus Tree-Planting Capstone",
      year: "2025",
      blurb:
        "Directed a tree-planting initiative from execution through to completion as part of the Freshmen Partner programme at BINUS.",
      tags: ["Project Management", "Leadership"],
      link: ""
    }
  ],

  /* --- 10. ACHIEVEMENTS -------------------------------------------------- */
  /* `place` drives the badge: anything starting 1st / 2nd / 3rd / Winner /
     Champion / Gold / Best gets the solid gradient, everything else an
     outline, so a win stays louder than a finalist spot. */
  achievements: [
    {
      name: "Cedea Cooking Competition",
      place: "1st place",
      year: "2023",
      blurb: "A culinary competition organised by Cedea Seafood, judged on creations made with their products."
    },
    {
      name: "KalPhyCo Rocket Championship",
      place: "Best Design",
      year: "2024",
      blurb: "An annual championship bringing together young engineers and rocket enthusiasts from across the province."
    },
    {
      name: "Kihajar STEM by Kemendikbud",
      place: "Finalist",
      year: "2024",
      blurb: "A national programme from the Ministry of Education supporting innovative student work in science, technology, engineering and mathematics."
    },
    {
      name: "Jurnalistik FLS2N",
      place: "Finalist",
      year: "2023",
      blurb: "The journalism category of FLS2N, the national student arts festival, judged on journalistic skill and creativity."
    },
    {
      name: "AVIMSA Doctor Championship",
      place: "Top 30",
      year: "2023 & 2024",
      blurb: "The Avicenna Medical Science Award, an annual national medical science competition for high school students."
    }
  ],

  /* --- 11. CONTACT ------------------------------------------------------ */
  contact: {
    heading: "Let's talk markets",
    blurb:
      "Open to analyst internships and finance roles in Jakarta — investment banking, equity research, corporate finance or valuation. Email reaches me fastest.",
    cta: "Send a message"
  }
};
