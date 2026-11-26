/* ============================================================================
   profile.js — THE ONLY FILE YOU NEED TO EDIT.
   Every word on the website comes from this object.

   The site is a set of drawing sheets, one screen each, read with Next and
   Back (or the arrow keys, or a swipe on a phone). The sheets come out of
   this file in this order:

     01 cover · 02 about · 03 education
     04-07 the four industrial-engineering projects  (projects[])
     08-09 ShifuWok and BINECA                       (work[])
     10 small businesses · 11 markets · 12 skills
     13 leadership & awards · 14 contact

   Add an entry to projects[] or work[] and it gets its own sheet; the
   numbering and the menu update themselves.

   Writing rule: plain sentences, one fact each, no slogans. Nothing on this
   page is a result that didn't happen.
   ========================================================================= */

window.PROFILE = {

  /* --- 1. IDENTITY + COVER ---------------------------------------------- */
  meta: {
    first: "Michael",
    last: "Wibowo",
    name: "Michael Wibowo",
    initials: "MW",
    kicker: "Portfolio · Industrial Engineering · BINUS University",
    tagline:
      "Industrial Engineering student at BINUS University. I plan production, " +
      "analyse data and build software, and I run small businesses on the side.",
    /* the boxes under the tagline; the first one is filled */
    chips: ["Industrial Engineering", "Production Planning", "Data Analysis",
            "Software", "Small Business", "Markets"],
    /* the row of facts at the bottom of the cover */
    facts: [
      { k: "GPA",       v: "3.43 / 4.00" },
      { k: "Year",      v: "Third year" },
      { k: "Available", v: "Feb 2027, full-time" },
      { k: "Based in",  v: "Jakarta" }
    ],
    photo: "assets/michael-wibowo.jpg",
    year: "2026"
  },

  /* --- 2. LINKS --------------------------------------------------------- */
  links: {
    email: "michaelwibo@gmail.com",
    linkedin: "https://www.linkedin.com/in/michael-wibowo",
    instagram: "https://instagram.com/michael.mw_",
    /* The CV for the "Download my CV" button on the contact sheet, e.g.
       "assets/Michael_Wibowo_CV.pdf". Blank hides the button. Anything in
       the PDF (phone number included) is public once it's here. */
    resume: "",
    /* the 14 sheets as one PDF; regenerate it after changing this file (README) */
    portfolioPdf: "assets/Michael_Wibowo_Portfolio.pdf"
  },

  /* --- 3. ABOUT --------------------------------------------------------- */
  about: {
    heading: "Hi, I'm Michael.",
    paragraphs: [
      "I'm a third-year Industrial Engineering student at BINUS University. I'm interested in how things get planned, made and sold, and I learn most by running things myself.",
      "Outside class I build things and sell things. The biggest is ShifuWok, a research terminal for the Indonesian stock market that I built and run by myself. I also run BullzTCG, a trading-card business, and MWcrypto, a trading community of more than 100 members, and I coordinate the finance division for BINECA 2026.",
      "In class I've planned production for a factory line, redesigned a tool around the people who use it, turned a customer survey into a QFD and analysed the study habits of 20,000 students.",
      "I'm looking for an internship from February 2027, full-time for up to 12 months, in data, operations, product or finance."
    ],
    /* the four numbers under the paragraphs */
    numbers: [
      { v: "4",    l: "Businesses started" },
      { v: "100+", l: "Community members" },
      { v: "5",    l: "Competition placings" },
      { v: "5+",   l: "Years investing" }
    ],
    interests: "Data · Operations · Product · Finance",
    keywords: [
      "Forecasting", "Aggregate Planning", "MPS & MRP", "Lot Sizing", "Kanban",
      "Ergonomics", "Time & Motion Study", "QFD", "Regression", "ANOVA",
      "K-Means", "Python", "SPSS", "Excel", "Pricing", "Sales"
    ]
  },

  /* --- 4. EDUCATION ----------------------------------------------------- */
  education: {
    school: "BINUS University",
    degree: "Bachelor of Industrial Engineering",
    period: "Sep 2024 – 2028 (expected) · Jakarta",
    numbers: [
      { v: "3.43", l: "GPA out of 4.00" },
      { v: "2028", l: "Expected graduation" },
      { v: "Feb 2027", l: "Free for an internship: semesters 6 and 7 have no classes (BINUS Enrichment Program)" }
    ],
    /* the courses behind the project sheets */
    courses: [
      "Production & Operation Analysis",
      "Human-Integrated System",
      "Engineering Data Analysis",
      "System Engineering & Analysis"
    ],
    other: [
      { school: "Finplan", what: "WPPE preparation programme", when: "Sep 2026" },
      { school: "Kanaan Christian High School", what: "High school diploma · Banjarmasin, South Borneo", when: "2024" }
    ]
  },

  /* --- 5. INDUSTRIAL ENGINEERING PROJECTS (one sheet each) -------------- */
  /* steps: what was done, in order. chain: the path from input to result.
     images: "assets/projects/name" without the extension; the site loads
     name-thumb.webp on the sheet and name.webp when it's clicked. */
  projects: [
    {
      id: "production-planning",
      menu: "Production planning",
      kicker: "Production & Operation Analysis",
      title: "Production planning for a wireless mouse",
      meta: "Course project · 2026",
      lead: "A plan for a Razer wireless mouse line that says what to make, when, and how much.",
      steps: [
        { h: "Forecast", t: "Compared five methods on MAPE: moving average 3 (5.89) and 4 (5.88), Holt (4.73), TSD (4.06) and Winter's (2.67). Winter's won." },
        { h: "Plan",     t: "Compared zero inventory, constant workforce, overtime + backorder and overtime + subcontract. Zero inventory was the most efficient and met demand of 288,973 units." },
        { h: "Parts",    t: "17 unique components in 7 assembly levels, with an MPS and MRP for each. Lot sizes picked with Least Unit Cost after comparing it with Silver-Meal, Part Period Balancing and Wagner-Whitin." },
        { h: "Floor",    t: "Kanban set the safety and maximum stock. Campbell-Dudek-Smith brought the total completion time to 50 time units, and Tibrewala-Philippe-Browne scheduled 40 workers on five days on, two off." }
      ],
      stats: [
        { v: "2.67",    l: "MAPE, Winter's method" },
        { v: "288,973", l: "units of demand planned for" },
        { v: "17 / 7",  l: "components / assembly levels" }
      ],
      chain: ["Demand forecast", "Aggregate plan", "MPS & MRP", "Kanban & schedules"],
      methods: "Forecasting · Aggregate planning · Lot sizing · MPS · MRP · Kanban · CDS & Tibrewala scheduling",
      images: [
        { src: "assets/projects/poa-razer", alt: "Final poster for the Production & Operation Analysis project on the Razer wireless mouse", cap: "Final poster" },
        { src: "assets/projects/poa-forecast", alt: "Forecasting section of the poster: the five methods against actual sales, with MSE, MAPE and MAD; Winter's has the lowest MAPE at 2.67", cap: "Forecast comparison" },
        { src: "assets/projects/poa-aggregate", alt: "Aggregate planning section: costs of the four strategies, with zero inventory ranked first, and the monthly forecast and expected income", cap: "Aggregate planning" },
        { src: "assets/projects/poa-scheduling", alt: "Operation scheduling section: Johnson's rule job sequence and the weekly worker schedule", cap: "Operation scheduling" },
        { src: "assets/projects/poa-conclusion", alt: "The poster's conclusions, eight points from forecasting to scheduling", cap: "Conclusions" }
      ]
    },
    {
      id: "paint-roller",
      menu: "Ergonomic paint roller",
      kicker: "Human-Integrated System",
      title: "Ergonomic paint roller",
      meta: "Course project · 2026",
      lead: "A paint roller redesigned so the person using it doesn't have to bend down to reload paint.",
      steps: [
        { h: "Measure",  t: "Grip sized to the 50th percentile (4 cm diameter) and an extender adjustable from the 5th to the 95th percentile of standing reach." },
        { h: "Time",     t: "Time-and-motion study of manual painting: a 19.2-second average cycle and a 25.3-second standard time after rating and allowances." },
        { h: "Redesign", t: "Added an automatic pump, so the roller never has to be dipped in the tray." },
        { h: "Result",   t: "The average Fatigue Assessment Scale score fell from 40.78 to 19.12, about 53%. The StarPavilion sales website scored 74.1 on SUS, with reliability checked in SPSS." }
      ],
      stats: [
        { v: "53%",   l: "less fatigue (FAS 40.78 → 19.12)" },
        { v: "74.1",  l: "SUS score of the website" },
        { v: "25.3 s", l: "standard time per cycle" }
      ],
      chain: ["Body measurements", "Automatic pump", "No bending to reload", "53% less fatigue"],
      methods: "Anthropometry · Time & motion study · Fatigue Assessment Scale · SUS · WAMMI · Cronbach's alpha (SPSS)",
      images: [
        { src: "assets/projects/his-paint-roller", alt: "Final poster for the Human-Integrated System project on the automatic paint roller", cap: "Final poster" },
        { src: "assets/projects/his-before", alt: "The conventional paint roller before the redesign, with its technical drawing", cap: "Before" },
        { src: "assets/projects/his-after", alt: "The automatic paint roller after the redesign, with the extender and pump, and its technical drawing", cap: "After" },
        { src: "assets/projects/his-fatigue", alt: "Fatigue results: Cronbach's alpha 0.924 before and 0.906 after, and the average FAS score falling from 40.78 to 19.12", cap: "Fatigue result" },
        { src: "assets/projects/his-sus", alt: "SUS and WAMMI scoring tables for the website, with a WAMMI factor mean of 3.722", cap: "SUS & WAMMI" },
        { src: "assets/projects/his-website", alt: "Screens of the StarPavilion website that sells the paint roller", cap: "StarPavilion website" }
      ]
    },
    {
      id: "exam-scores",
      menu: "Predicting exam scores",
      kicker: "Engineering Data Analysis",
      title: "Predicting exam scores",
      meta: "Group project · 2025",
      lead: "20,000 students' study habits from a Kaggle dataset, turned into a model and a short list of what actually moves exam scores.",
      steps: [
        { h: "Describe", t: "Students who studied 6–8 hours a day averaged 79.96, against 44.69 for 0–2 hours. Attendance and sleep showed the same upward pattern." },
        { h: "Model",    t: "Multiple linear regression on an 80/20 split: each study hour adds 5.91 points, each sleep hour 1.44 and each attendance point 0.34. R² 0.63 on test and train alike, MAE 9.20." },
        { h: "Test",     t: "A t-test found internet access made no difference (p = 0.274). ANOVA found sleep quality did (p < 0.001)." },
        { h: "Mine",     t: "Apriori rules: students who studied little scored low 83.7% of the time. K-Means with an elbow curve split students into three clusters." }
      ],
      stats: [
        { v: "20,000", l: "students in the data" },
        { v: "0.63",   l: "R² on the test set" },
        { v: "83.7%",  l: "low study → low score" }
      ],
      chain: ["20,000 rows", "Regression", "t-test & ANOVA", "Rules & clusters"],
      methods: "Multiple linear regression · t-test · ANOVA · Apriori · K-Means · Excel · RStudio · Python",
      images: [
        { src: "assets/projects/eda-study-hours", alt: "Slide: average exam score by study hours, rising from 44.69 at 0–2 hours to 79.96 at 6–8 hours", cap: "Score by study hours" },
        { src: "assets/projects/eda-coefficients", alt: "Slide: regression coefficients, study hours 5.91, class attendance 0.34, sleep hours 1.44", cap: "Coefficients" },
        { src: "assets/projects/eda-actual-vs-predicted", alt: "Slide: actual versus predicted exam score scatter plot", cap: "Actual vs predicted" },
        { src: "assets/projects/eda-association-rules", alt: "Slide: association rules table with support, confidence and lift for each rule", cap: "Association rules" },
        { src: "assets/projects/eda-clusters", alt: "Slide: scatter plot of the three student clusters by study hours and exam score", cap: "Three clusters" }
      ]
    },
    {
      id: "product-design",
      menu: "Sustainable product design",
      kicker: "System Engineering & Analysis",
      title: "Sustainable product design",
      meta: "Individual and group project · 2025",
      lead: "From a customer survey to a scored design, twice: a tumbler on my own and a hanger with my group.",
      steps: [
        { h: "Listen",    t: "Surveyed 30 people about a biodegradable tumbler made from farm waste and turned their answers into six weighted needs." },
        { h: "Translate", t: "Built a QFD House of Quality and scored two designs: 3.69 against 3.00." },
        { h: "Choose",    t: "With my group, scored four concepts on eight criteria. A multifunction hanger won with 4.78." },
        { h: "Detail",    t: "Took the hanger through detailed design, technical drawings and production planning." }
      ],
      chain: ["Survey of 30", "Six weighted needs", "House of Quality", "Chosen design"],
      methods: "Voice of customer · QFD · Weighted scoring · Technical drawing · Production planning",
      images: [
        { src: "assets/projects/sea-qfd", alt: "The QFD House of Quality matrix for the tumbler: six customer requirements weighted against six functional requirements, with the competitive assessment", cap: "House of Quality" }
      ]
    }
  ],

  /* --- 6. WORK (one sheet each) ----------------------------------------- */
  work: [
    {
      id: "shifuwok",
      menu: "ShifuWok",
      kicker: "Software · Founder",
      title: "ShifuWok",
      meta: "Founder · Aug 2026 – Present · formerly MasterIDX",
      lead: "A research terminal for the Indonesian stock market that I built and run by myself. It started as a screener for my own trades.",
      steps: [
        { h: "Data",        t: "Covers all 962 listed companies: prices, broker flows, KSEI ownership and official IDX announcements. Every number shows its source and date." },
        { h: "Alone",       t: "I do the data pipeline, screens, testing, billing and support." },
        { h: "In the open", t: "The screener's rules are published with their test results, and a paper-trading portfolio is logged in public, losses included." },
        { h: "Kantor Agen", t: "A 3D office inside ShifuWok where 38 named agents move only when real work happens: a data pull, an AI call, a subagent run. Events are stripped of user data and pass a key check with rate limits. Admin-only, so there's no public link." }
      ],
      note: "Also built: TeknikalDrill, a practice-exam app for the RTA and CTA syllabus with summaries and mind maps for each unit. I made it while studying for the RTA exam.",
      chain: ["Screener for my trades", "Data for 962 companies", "Public terminal", "Agents shown in 3D"],
      methods: "Data pipelines · Testing · Kantor Agen: Three.js, TypeScript, Node.js, browser tests",
      images: [
        { src: "assets/projects/shifuwok-home", alt: "The shifuwok.com home page: 'Semua saham Indonesia, apa adanya.'", cap: "shifuwok.com" }
      ],
      link: "https://shifuwok.com/",
      linkLabel: "Open shifuwok.com",
      link2: "https://beixuantianjun.github.io/teknikaldrill/",
      link2Label: "Open TeknikalDrill"
    },
    {
      id: "bineca",
      menu: "BINECA 2026 finance",
      kicker: "Operations · Organization",
      title: "BINECA 2026 finance division",
      meta: "Coordinator · HIMTRI BINUS · Jul 2026 – Present",
      lead: "The finance division raises the event budget by selling instead of waiting for an allocation.",
      steps: [
        { h: "Sell",      t: "We run food resale, fundraising sales and event merchandise." },
        { h: "Price",     t: "I source the stock and set prices that keep a margin." },
        { h: "Promote",   t: "I promote each sale on campus." },
        { h: "Reconcile", t: "I keep stock, cash and hand-offs reconciled across pre-orders and selling days." }
      ],
      chain: ["Source stock", "Price with a margin", "Sell on campus", "Reconcile stock & cash"],
      methods: "Procurement · Pricing · Sales · Stock and cash reconciliation",
      images: []
    }
  ],

  /* --- 7. SMALL BUSINESSES ---------------------------------------------- */
  business: {
    heading: "Small businesses",
    lead: "I've been selling things since high school. In each one I sourced the product, set the price and sold it myself.",
    items: [
      { name: "BullzTCG", role: "Founder", when: "Mar 2026 – Present",
        text: "I buy, price and sell Pokémon and One Piece trading cards, online and at pop-up booths such as the one at Mall Taman Anggrek." },
      { name: "Uicreativa", role: "Market Sales Manager", when: "2024",
        text: "Handled sales and marketing strategy and helped grow the client base." },
      { name: "GrowYourUMKM", role: "Founder · Banjarmasin", when: "2023 – 2024",
        text: "A small marketing agency for cafés and local businesses. I ran it for a year, finding the clients and handling their marketing." },
      { name: "School food stand", role: "Head of Entrepreneur Division, OSIS", when: "2021 – 2023",
        text: "Reached a 50% profit margin in its first three months by keeping costs down and pricing carefully." }
    ],
    images: [
      { src: "assets/projects/bullz-booth", alt: "The BullzTCG pop-up booth at Mall Taman Anggrek, stock laid out and buyers at the counter", cap: "BullzTCG booth, Mall Taman Anggrek" },
      { src: "assets/projects/bullz-cards", alt: "Graded Pokemon cards in the display case", cap: "Graded cards" }
    ]
  },

  /* --- 8. MARKETS ------------------------------------------------------- */
  markets: {
    heading: "Markets",
    lead: "I've invested my own money in Indonesian stocks and crypto since 2021 and log every trade with its entry, size and result.",
    items: [
      { name: "Investing", when: "Feb 2021 – Present",
        text: "With stocks I look for companies priced below what the business is worth and hold until the gap closes. I sell when the reason I bought is no longer true." },
      { name: "MWcrypto", when: "Nov 2024 – Present",
        text: "A crypto trading community I started in November 2024, now past 100 members. I post setups with an entry, take-profit levels, a stop and the reasoning, plus market commentary and live sessions." },
      { name: "Bank of America IB simulation", when: "Sep 2026",
        text: "On Forage: screened an acquisition target with a SWOT analysis, built a DCF to a per-share value, ran a sensitivity analysis and wrote the company profile." }
    ],
    /* nothing here is passed yet, and the list says so */
    certs: [
      { name: "WPPE, broker-dealer representative", issuer: "Finplan / OJK", status: "Training done · exam pending" },
      { name: "RTA, Registered Technical Analyst", issuer: "CSA Institute", status: "Training done · exam pending" },
      { name: "WMI, investment manager representative", issuer: "OJK", status: "Planned" },
      { name: "CSA & CTA", issuer: "CSA Institute", status: "After RTA" }
    ],
    images: [
      { src: "assets/projects/wppe-certificate", alt: "Finplan Academy certificate for the KKNI Level 5 capital-market broker-dealer representative preparation programme, Jakarta, 17 September 2026", cap: "WPPE training" },
      { src: "assets/projects/rta-certificate", alt: "CSA Institute training certificate for the Registered Technical Analyst programme, Jakarta, 26-27 September 2026", cap: "RTA training" },
      { src: "assets/projects/forage-boa-ibd", alt: "Forage certificate of completion for the Bank of America Investment Banking Job Simulation, September 2026", cap: "BofA IB simulation" },
      { src: "assets/projects/mwc-call-hype", alt: "A HYPE long posted with entry, three take-profit levels, a stop, a conviction score and the reasoning", cap: "MWcrypto: HYPE setup" },
      { src: "assets/projects/mwc-calls-elite", alt: "Two dated calls posted to the elite-plan channel, each with the chart behind it", cap: "MWcrypto: elite calls" },
      { src: "assets/projects/mwc-call-sui", alt: "A SUI price-action post with the weekly chart", cap: "MWcrypto: SUI post" },
      { src: "assets/projects/track-record-log", alt: "The 2025 trade log: entry, take profit, stop loss, leverage and outcome per position, with a running win rate", cap: "2025 trade log" },
      { src: "assets/projects/track-record-pepe", alt: "A closed PEPEUSDT position at +909%, shared in a chat; the other people in the thread are redacted", cap: "Closed PEPE trade" }
    ]
  },

  /* --- 9. SKILLS -------------------------------------------------------- */
  skills: [
    { title: "Operations & planning",
      items: ["Demand forecasting", "Aggregate planning", "MPS & MRP", "Lot sizing", "Kanban", "Machine & worker scheduling"] },
    { title: "Ergonomics & design",
      items: ["Anthropometry", "Time & motion study", "QFD / House of Quality", "Weighted scoring", "Usability testing (SUS, WAMMI)"] },
    { title: "Data",
      items: ["Statistics", "Regression", "ANOVA & t-tests", "K-Means", "SPSS", "Microsoft Excel", "Python"] },
    { title: "Building",
      items: ["Web apps", "Data pipelines", "AI agents", "Testing", "PowerPoint"] },
    { title: "Business & markets",
      items: ["Business management", "Procurement & pricing", "Sales & marketing", "Project management", "Technical analysis", "Fundamental analysis", "Valuation (DCF)", "Risk management"] },
    { title: "People",
      items: ["Communication", "Leadership", "Teamwork", "Problem solving", "Adaptability", "Mentoring"] }
  ],

  /* --- 10. LEADERSHIP + AWARDS ------------------------------------------ */
  leadership: {
    role: "Freshmen Partner",
    org: "BINUS University",
    when: "Sep 2025 – Jan 2026",
    text: [
      "Mentored first-year students through onboarding and tracked their mandatory assessments.",
      "Led the group's tree-planting capstone from start to finish."
    ],
    image: { src: "assets/projects/freshmen-partner", alt: "The Freshmen Partner team at BINUS", cap: "Freshmen Partner team" }
  },
  /* a place starting with 1st / 2nd / 3rd / Best / Winner gets the solid badge */
  achievements: [
    { name: "Cedea Cooking Competition", place: "1st place", year: "2023",
      text: "Run by Cedea Seafood, judged on dishes made with their products." },
    { name: "KalPhyCo Rocket Championship", place: "Best Design", year: "2024",
      text: "A provincial rocket championship for students." },
    { name: "Kihajar STEM by Kemendikbud", place: "Finalist", year: "2023",
      text: "A national STEM competition run by the Ministry of Education." },
    { name: "Jurnalistik FLS2N", place: "Finalist", year: "2023",
      text: "The journalism category of the national student arts festival." },
    { name: "AVIMSA Doctor Championship", place: "Top 30", year: "2023 & 2024",
      text: "The Avicenna Medical Science Award, a national medical science competition for high school students." }
  ],

  /* --- 11. CONTACT ------------------------------------------------------ */
  contact: {
    heading: "Let's talk.",
    blurb:
      "I'm looking for an internship in Jakarta from February 2027, full-time " +
      "for up to 12 months, in data, operations, product or finance. Email is " +
      "the fastest way to reach me.",
    status: "Open to internships · Feb 2027"
  }
};
