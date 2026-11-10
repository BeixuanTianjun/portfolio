/* ============================================================================
   profile.js — THE ONLY FILE YOU NEED TO EDIT.
   Every word on the website comes from this object.

   Sources: the LinkedIn profile at linkedin.com/in/michael-wibowo, the CV,
   and shifuwok.com. Lines tagged TODO are still open — search for them.

   Writing rule for this file (November 2026 rewrite): plain sentences, one
   fact each, no slogans. The page covers everything Michael does (building
   software, industrial engineering, small businesses, communities and
   markets), so no single area should take over the hero or the cards.
   ========================================================================= */

window.PROFILE = {

  /* --- 1. IDENTITY ------------------------------------------------------ */
  meta: {
    name: "Michael Wibowo",
    initials: "MW",
    headline:
      "Industrial Engineering @ BINUS · Builds ShifuWok · Runs small businesses",
    /* the words that type themselves out in the hero, one after another */
    roles: [
      "Industrial Engineering student",
      "Building ShifuWok",
      "Running small businesses",
      "Data & operations",
      "Investing since 2021"
    ],
    location: "Jakarta Metropolitan Area",
    availability: "Open to internships · Jakarta · from Feb 2027",
    /* Path to your photo, relative to index.html. "" hides the avatar. */
    photo: "assets/michael-wibowo.jpg",
    tagline:
      "I study Industrial Engineering at BINUS University. Outside class I " +
      "build software, run small businesses and invest my own money."
  },

  /* --- 1b. SWARM -------------------------------------------------------- */
  /* The cursors that build the page as you scroll (js/swarm.js). */
  swarm: {
    /* how visible the cursors are, 0 to 1. Wandering cursors are kept almost
       invisible so nothing distracts a reader; builders are a bit stronger. */
    idleOpacity: 0.1,
    buildOpacity: 0.3,
    /* The name tags are agents from ShifuWok's own Kantor Agen: Jarvis runs
       the office; Benedict ingests data, Daphne checks it, Audrey audits the
       work, William verifies deploys, Sebastian finds the filings, Harriet
       writes the emiten case, Eleanor builds screens, Charlotte writes the
       weekly research, and Bruno, Bianca and Julian are bull, bear and judge
       in the research debate. The swarm has 12 agents on a laptop and 8 on a
       phone, and reuses the list if there are fewer names than agents. */
    names: [
      "Jarvis", "Benedict", "Daphne", "Audrey", "William", "Sebastian",
      "Harriet", "Eleanor", "Charlotte", "Bruno", "Bianca", "Julian"
    ]
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
  /* Whole numbers only: the counter rounds. One number per area, so the hero
     doesn't read as a trading page. */
  stats: [
    { value: 4,   suffix: "",  label: "Businesses started" },
    { value: 100, suffix: "+", label: "Community members" },
    { value: 5,   suffix: "",  label: "Competition placings" },
    { value: 5,   suffix: "+", label: "Years investing" }
  ],

  /* --- 4. ABOUT --------------------------------------------------------- */
  about: {
    heading: "About",
    paragraphs: [
      "I'm in my third year of Industrial Engineering at BINUS University. Most of what I do outside class is building things and running small businesses.",
      "The biggest one is ShifuWok, a research terminal for the Indonesian stock market that I built and run by myself. It started as a screener for my own trades. Inside it I also built Kantor Agen, a 3D office that shows the AI agents behind the site while they work.",
      "I've been selling things since high school: a food stand that reached a 50% margin in three months, a small marketing agency for cafés in Banjarmasin, and now BullzTCG, where I buy and sell trading cards. I also run MWcrypto, a trading community of more than 100 members, and I coordinate the finance division for BINECA 2026.",
      "In class I've worked on production planning, ergonomic product design, QFD and regression analysis. I'm looking for an internship from February 2027, full-time for up to 12 months, in data, operations, product or finance."
    ],
    facts: [
      { k: "Based in",       v: "Jakarta" },
      { k: "Studying",       v: "Industrial Engineering, BINUS University · GPA 3.43" },
      { k: "Building",       v: "ShifuWok · BullzTCG" },
      { k: "Interested in",  v: "Data · Operations · Product · Markets" },
      { k: "Available",      v: "Full-time from Feb 2027, up to 12 months" }
    ]
  },

  /* --- 5. SPECIALTIES — the headline cards ------------------------------ */
  /* One card per area, in the order a reader should meet them. */
  specialties: [
    {
      title: "Building software",
      blurb:
        "I build the tools I need. ShifuWok is a stock research terminal I run alone, Kantor Agen shows its AI agents at work in 3D, TeknikalDrill is a practice-exam app I made for my RTA exam, and I built this site.",
      tags: ["Web apps", "Data pipelines", "AI agents", "Testing"]
    },
    {
      title: "Industrial engineering & analysis",
      blurb:
        "Forecasting, aggregate planning and MRP for a production line, an ergonomic redesign measured with a fatigue scale, QFD built from a customer survey, and regression and clustering in Python.",
      tags: ["Forecasting & MRP", "Ergonomics", "QFD", "Python & statistics"]
    },
    {
      title: "Running small businesses",
      blurb:
        "A school food stand, a marketing agency, a trading-card business and the fundraising sales for BINECA 2026. In each one I sourced the product, set the price and sold it myself.",
      tags: ["Sales & marketing", "Pricing", "Procurement", "Events"]
    },
    {
      title: "Markets",
      blurb:
        "I've invested in Indonesian stocks and crypto since 2021 and run a trading community of more than 100 members. This year I finished the WPPE and RTA training and Bank of America's investment banking simulation.",
      tags: ["Technical analysis", "Valuation", "Risk management", "Capital markets"]
    }
  ],

  /* --- 6. SKILLS -------------------------------------------------------- */
  /* Levels are self-assessed, and the site says so (skillsNote below).

     Calibrated on one rule: YEARS OF DOING IT beats STUDYING IT NOW.
     - 85-90  you do this live, under real money or real deadlines, and
              other people come to you for it
     - 70-84  you do it regularly and competently in real work
     - 55-69  you are actively learning it and have used it on small things
     - below  you have touched it, not much more

     November 2026: the markets rows were cut from nine to four so the grid
     covers everything, and five rows were added for the build and
     engineering work (Python, Statistics, Production Planning, Process
     Mapping, Web & App Building). Their levels are a first guess on the rule
     above; move any number you disagree with — it's your claim, not mine. */
  skills: [
    { name: "Web & App Building",   level: 65, group: "Build" },
    { name: "Python",               level: 60, group: "Build" },
    { name: "Microsoft Excel",      level: 72, group: "Build" },
    { name: "PowerPoint",           level: 70, group: "Build" },

    { name: "Data Analysis",        level: 62, group: "Engineering" },
    { name: "Statistics",           level: 62, group: "Engineering" },
    { name: "Production Planning",  level: 65, group: "Engineering" },
    { name: "Process Mapping",      level: 65, group: "Engineering" },

    { name: "Business Management",  level: 78, group: "Business" },
    { name: "Sales & Marketing",    level: 75, group: "Business" },
    { name: "Project Management",   level: 75, group: "Business" },
    { name: "Problem Solving",      level: 76, group: "Business" },

    { name: "Technical Analysis",   level: 90, group: "Markets" },
    { name: "Risk Management",      level: 80, group: "Markets" },
    { name: "Fundamental Analysis", level: 72, group: "Markets" },
    { name: "Valuation",            level: 66, group: "Markets" },

    { name: "Communication",        level: 85, group: "People" },
    { name: "Leadership",           level: 82, group: "People" },
    { name: "Teamwork",             level: 82, group: "People" },
    { name: "Adaptability",         level: 80, group: "People" }
  ],

  /* Printed under the Skills heading. */
  skillsNote:
    "Self-assessed. A higher number means I've done it more often in real " +
    "work, not that I've studied it longer.",

  /* words that scroll past in the marquee strip */
  marquee: [
    "Industrial Engineering", "Product Building", "Data Analysis", "Production Planning",
    "Entrepreneurship", "Community", "Ergonomics", "Markets"
  ],

  /* --- 7. EXPERIENCE ---------------------------------------------------- */
  /* Current roles first, then past roles by end date. */
  experience: [
    {
      role: "Founder",
      org: "ShifuWok (formerly MasterIDX)",
      type: "Self-employed",
      period: "Aug 2026 – Present",
      location: "Jakarta, Indonesia",
      bullets: [
        "Built and run shifuwok.com, a research terminal for Indonesian stocks. It covers all 962 listed companies with prices, broker flows, KSEI ownership and official IDX announcements, and every number shows its source and date.",
        "I do it alone: data pipeline, screens, testing, billing and support.",
        "The screener's rules are published with their test results, and a paper-trading portfolio is logged in the open, losses included.",
        "It started as a screening tool for my own trades."
      ],
      tags: ["Product", "Data pipeline", "IDX & KSEI data", "Testing"],
      link: "https://shifuwok.com/",
      linkLabel: "Open shifuwok.com"
    },
    {
      role: "Coordinator of Finance Division, BINECA 2026",
      org: "HIMTRI BINUS",
      type: "Organization",
      period: "Jul 2026 – Present",
      location: "Hybrid",
      /* TODO — one number would finish this: how much the division has raised
         so far, or the target. "Raised IDR X of an IDR Y target" beats every
         adjective on this page. */
      bullets: [
        "The finance division raises the event budget by selling instead of waiting for an allocation.",
        "We run food resale, fundraising sales and event merchandise. I source stock, set prices that keep a margin and promote each sale on campus.",
        "I keep stock, cash and hand-offs reconciled across pre-orders and selling days."
      ],
      tags: ["Sales", "Pricing", "Coordination", "Events"]
    },
    {
      role: "Founder",
      org: "BullzTCG",
      type: "Self-employed",
      period: "Mar 2026 – Present",
      location: "Jakarta, Indonesia · On-site",
      bullets: [
        "I buy, price and sell Pokémon and One Piece trading cards, online and at pop-up booths such as the one at Mall Taman Anggrek."
      ],
      tags: ["Procurement", "Pricing", "Sales"],
      images: [
        { src: "assets/projects/bullz-booth", alt: "The BullzTCG pop-up booth at Mall Taman Anggrek, stock laid out and buyers at the counter" },
        { src: "assets/projects/bullz-cards", alt: "Graded Pokemon cards in the display case" }
      ]
    },
    {
      role: "Founder & Community Manager",
      org: "MWcrypto",
      type: "Full-time",
      period: "Nov 2024 – Present",
      location: "Jakarta, Indonesia · Hybrid",
      bullets: [
        "Started a crypto trading community in November 2024 that has grown past 100 members.",
        "I post trade setups with an entry, take-profit levels, a stop and the reasoning, plus regular market commentary and live sessions."
      ],
      tags: ["Community", "Technical Analysis", "Risk Management"],
      images: [
        { src: "assets/projects/mwc-calls-elite", alt: "Two dated calls posted to the elite-plan channel, each with the chart behind it" },
        { src: "assets/projects/mwc-call-hype", alt: "A HYPE long posted with entry, three take-profit levels, a stop, a conviction score and the reasoning" },
        { src: "assets/projects/mwc-call-sui", alt: "A SUI price-action post with the weekly chart" }
      ]
    },
    {
      role: "Investor",
      org: "Self-employed",
      type: "Self-employed",
      period: "Feb 2021 – Present",
      location: "Jakarta, Indonesia",
      bullets: [
        "I've invested my own money in Indonesian stocks and crypto since 2021.",
        "With stocks I look for companies priced below what the business is worth and hold until the gap closes. I sell when the reason I bought is no longer true.",
        "I log every trade with its entry, size and result."
      ],
      tags: ["Indonesian Equities", "Valuation", "Risk Management"]
    },
    {
      role: "Freshmen Partner",
      org: "BINUS University",
      type: "Part-time",
      period: "Sep 2025 – Jan 2026",
      location: "West Jakarta, Indonesia · On-site",
      bullets: [
        "Mentored first-year students through onboarding and tracked their mandatory assessments.",
        "Led the group's tree-planting capstone from start to finish."
      ],
      tags: ["Mentoring", "Project Management"],
      images: [
        { src: "assets/projects/freshmen-partner", alt: "The Freshmen Partner team at BINUS" }
      ]
    },
    {
      role: "Market Sales Manager",
      org: "Uicreativa",
      type: "Full-time",
      period: "2024",
      location: "Jakarta, Indonesia",
      bullets: [
        "Handled sales and marketing strategy and helped grow the client base."
      ],
      tags: ["Sales & Marketing"]
    },
    {
      role: "Founder",
      org: "GrowYourUMKM",
      type: "Self-employed",
      period: "2023 – 2024",
      location: "Banjarmasin, South Borneo",
      bullets: [
        "Started a small marketing agency for cafés and local businesses and ran it for a year, finding the clients and handling their marketing."
      ],
      tags: ["Business Management", "Sales & Marketing"]
    },
    {
      role: "Head of Entrepreneur Division",
      org: "OSIS",
      type: "Student government",
      period: "2021 – 2023",
      location: "Banjarmasin, South Borneo",
      bullets: [
        "Ran a school food stand that reached a 50% profit margin in its first three months by keeping costs down and pricing carefully.",
        "Organised school events and marketing campaigns that brought in more visitors and sales."
      ],
      tags: ["Leadership", "Pricing", "Events"]
    }
  ],

  /* --- 8. EDUCATION + CERTIFICATIONS ------------------------------------ */
  education: [
    {
      school: "BINUS University",
      degree: "Bachelor of Industrial Engineering",
      period: "Sep 2024 – 2028 (expected)",
      detail: "GPA 3.43/4.00. Semesters 6 and 7 free of classes through the BINUS Enrichment Program."
    },
    {
      school: "Finplan",
      degree: "WPPE preparation programme",
      period: "Sep 2026",
      detail: "Securities broker-dealer representative training."
    },
    {
      school: "Kanaan Christian High School",
      degree: "High School Diploma",
      period: "Graduated 2024",
      detail: "Banjarmasin, South Borneo."
    }
  ],

  /* Nothing here is passed, so nothing says it is. Ordered by how far along
     each one is: WPPE and RTA training are finished and only the exams
     remain; WMI and CSA/CTA come after.

     TODO — this assumes RTA, CTA and CSA all come from CSA Institute, which
     is how they were described; if the technical analyst track is run by a
     different association, split it out. */
  certifications: [
    {
      name: "WPPE — Broker-Dealer Representative (Wakil Perantara Pedagang Efek)",
      issuer: "Finplan / OJK",
      year: "Awaiting exam",
      images: [
        { src: "assets/projects/wppe-certificate", alt: "Finplan Academy certificate for the KKNI Level 5 capital-market broker-dealer representative preparation programme, Jakarta, 17 September 2026" }
      ]
    },
    {
      name: "RTA — Registered Technical Analyst",
      issuer: "CSA Institute",
      year: "Training completed, awaiting exam",
      images: [
        { src: "assets/projects/rta-certificate", alt: "CSA Institute training certificate no. 1541/RTA/CSA Institute/X/2026 for the Registered Technical Analyst programme, Jakarta, 26-27 September 2026" }
      ]
    },
    { name: "WMI — Investment Manager Representative (Wakil Manajer Investasi)", issuer: "OJK", year: "Planned" },
    { name: "CSA & CTA", issuer: "CSA Institute", year: "After RTA" }
  ],

  /* --- 9. PROJECTS ------------------------------------------------------ */
  /* Ordered to show the range: building, engineering coursework, data,
     product design, then markets. */
  projects: [
    {
      title: "Kantor Agen: ShifuWok's 3D agent office",
      year: "2026",
      blurb:
        "A 3D office (Three.js) inside ShifuWok where 38 named agents move only when real work happens: a data pull, an AI call, a subagent run. Events are stripped of user data before they reach the page and arrive through a key check with rate limits. It's admin-only, so there's no public link.",
      tags: ["Three.js", "TypeScript", "Node.js", "AI agents", "Browser tests"],
      link: ""
    },
    {
      title: "Production planning for a wireless mouse",
      year: "2026",
      blurb:
        "A production plan for a Razer wireless mouse line, done for Production & Operations Analysis. Compared five forecasting methods (Winter's had the lowest error, MAPE 2.67), four aggregate-planning strategies and four lot-sizing methods, built a 17-component bill of materials, and finished with MPS, MRP, Kanban and machine and worker schedules.",
      tags: ["Forecasting", "MRP & MPS", "Lot Sizing", "Scheduling"],
      image: "assets/projects/poa-razer",
      imageAlt: "Final poster for the Production & Operation Analysis project on the Razer wireless mouse",
      link: ""
    },
    {
      title: "Ergonomic paint roller",
      year: "2026",
      blurb:
        "A paint roller redesigned from anthropometric data and a time-and-motion study, with an automatic pump so the user doesn't bend down to reload paint. Operator fatigue dropped 53% on the Fatigue Assessment Scale. The sales website was tested with SUS and WAMMI, and its reliability checked in SPSS.",
      tags: ["Ergonomics", "Time & Motion Study", "SPSS", "Usability Testing"],
      image: "assets/projects/his-paint-roller",
      imageAlt: "Final poster for the Human-Integrated System project on the automatic paint roller",
      link: ""
    },
    {
      title: "Predicting exam scores",
      year: "2025",
      blurb:
        "Multiple linear regression on 20,000 rows of study-habit data in Python. R-squared was 0.63 on the test set, with train and test within 0.01 of each other. I checked the residuals and reported the problems I found, tested each factor with ANOVA and t-tests (sleep quality mattered, internet access didn't), and grouped the students into three clusters with K-Means.",
      tags: ["Python", "Regression", "ANOVA & t-test", "K-Means"],
      link: "assets/projects/EDA_Final_Project.pdf",
      linkLabel: "Open the project deck (PDF)"
    },
    {
      title: "Sustainable product design",
      year: "2025",
      blurb:
        "Individual part: a biodegradable tumbler made from farm waste. I surveyed 30 people, turned their answers into six weighted needs, built a QFD House of Quality and scored two designs (3.69 against 3.00). Group part: we scored four concepts on eight criteria, picked a multifunction hanger (4.78) and took it through detailed design, technical drawings and production planning.",
      tags: ["QFD", "Voice of Customer", "Weighted Scoring", "Product Design"],
      image: "assets/projects/sea-qfd",
      imageAlt: "The QFD House of Quality matrix for the tumbler: six customer requirements weighted against six functional requirements, with the competitive assessment",
      link: ""
    },
    {
      title: "TeknikalDrill",
      year: "2026",
      blurb:
        "A practice-exam app for the RTA and CTA syllabus, with summaries and mind maps for each unit. I built it while studying for the RTA exam.",
      tags: ["Web app", "Technical Analysis", "Self-built"],
      link: "https://beixuantianjun.github.io/teknikaldrill/",
      linkLabel: "Open TeknikalDrill"
    },
    {
      title: "Investment banking job simulation",
      year: "2026",
      blurb:
        "Bank of America's simulation on Forage. I screened an acquisition target with a SWOT analysis, built a DCF to a per-share value, ran a sensitivity analysis and wrote the company profile.",
      tags: ["DCF", "SWOT", "Sensitivity Analysis"],
      images: [
        { src: "assets/projects/forage-boa-ibd", alt: "Forage certificate of completion for the Bank of America Investment Banking Job Simulation, September 2026" }
      ],
      link: ""
    },
    {
      title: "2025 crypto trade log",
      year: "2025",
      blurb:
        "Every crypto trade I made in 2025, logged with its entry, size and result.",
      tags: ["Record Keeping", "Risk Management"],
      images: [
        { src: "assets/projects/track-record-log", alt: "The trade log: entry, take profit, stop loss, leverage and outcome per position, with a running win rate" },
        { src: "assets/projects/track-record-pepe", alt: "A closed PEPEUSDT position at +909%, shared in a chat; the other people in the thread are redacted" }
      ],
      link: ""
    },
    {
      title: "Campus tree planting",
      year: "2025",
      blurb:
        "Led the tree-planting project for my Freshmen Partner group at BINUS.",
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
      blurb: "A cooking competition run by Cedea Seafood, judged on dishes made with their products."
    },
    {
      name: "KalPhyCo Rocket Championship",
      place: "Best Design",
      year: "2024",
      blurb: "A provincial rocket championship for students."
    },
    {
      name: "Kihajar STEM by Kemendikbud",
      place: "Finalist",
      year: "2023",
      blurb: "A national STEM competition run by the Ministry of Education."
    },
    {
      name: "Jurnalistik FLS2N",
      place: "Finalist",
      year: "2023",
      blurb: "The journalism category of FLS2N, the national student arts festival."
    },
    {
      name: "AVIMSA Doctor Championship",
      place: "Top 30",
      year: "2023 & 2024",
      blurb: "The Avicenna Medical Science Award, a national medical science competition for high school students."
    }
  ],

  /* --- 11. CONTACT ------------------------------------------------------ */
  contact: {
    heading: "Let's talk",
    blurb:
      "I'm looking for an internship in Jakarta from February 2027, full-time for up to 12 months. Data, operations, product and finance roles all interest me. Email is the fastest way to reach me.",
    cta: "Send a message"
  }
};
