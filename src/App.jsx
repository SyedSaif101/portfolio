import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Badge } from "./components/Badge.jsx";
import { BarList } from "./components/BarList.jsx";
import { CardSpotlight } from "./components/CardSpotlight.jsx";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const tracks = [
  { id: "ai", label: "AI & LLM Apps", count: 3 },
  { id: "astro", label: "Astrophysics & ML", count: 3 },
  { id: "security", label: "Cybersecurity", count: 4 },
  { id: "automation", label: "Automation & Systems", count: 6 },
];

const projects = {
  ai: [
    {
      tag: "In progress · Transformer fine-tuning",
      status: "In progress",
      statusVariant: "warning",
      title: "Predictive Keyboard — Context-Aware Next-Word Prediction",
      description:
        "Fine-tunes DistilGPT2 on MASSIVE en-US (plus OASST1 and WikiText) through a config-driven pipeline, and benchmarks an n-gram baseline against the pretrained and fine-tuned models. Predictions are served through a FastAPI REST endpoint returning JSON, with a Gradio demo, and run CPU-only on a laptop.",
      tags: ["PyTorch", "Hugging Face", "FastAPI", "Gradio", "MLflow", "GitHub Actions"],
      href: "https://github.com/SyedSaif101",
      linkLabel: "View GitHub profile",
      featured: true,
    },
    {
      tag: "n8n · AI Newsposting",
      title: "Trending news → brand voice → Telegram, every 12 hours",
      description:
        "A scheduled trigger pulls trending stories from multiple sources in parallel, filters and codes each branch, merges and aggregates them, then runs the result through a Gemini-based classifier and copywriter agent before posting to the client's Telegram channel.",
      tags: ["n8n", "Gemini API", "Agent workflow", "Telegram"],
      flow: ["3 news sources", "Filter + normalize", "Merge + aggregate", "Gemini classify", "Brand-voice rewrite", "Telegram post"],
    },
    {
      tag: "Applied AI · Gemini Chatbot",
      title: "Message in → Gemini reasoning → reply out",
      description:
        "A conversational loop built from scratch: the user's message is captured, sent to the Gemini API with recent conversation context, and the generated response is returned to the user.",
      tags: ["Python", "Gemini API", "Conversation context", "REST"],
      flow: ["User message", "Context assembly", "Gemini API", "Generate response", "Deliver reply"],
    },
  ],
  astro: [
    {
      tag: "Research · SARL–NCGSA",
      title: "SDSS Quasar Spectra — Deep Learning Classification",
      description:
        "Built a pipeline to explore and prepare SDSS quasar spectra for deep learning: downloaded 15,955 FITS files from DR18, applied Savitzky–Golay smoothing, wavelength/redshift correction, and power-law fitting to separate clean spectra from noisy ones ahead of model training.",
      tags: ["Python", "Astropy", "NumPy", "SDSS DR18", "Spectral processing"],
      href: "/reports/Internship_SARL.pdf",
      linkLabel: "View research report",
    },
    {
      tag: "IBM Quantum Hackathon",
      title: "Quantum Radar — Interaction-Free Ship Detection",
      description:
        "Built a hybrid quantum-classical Battleship engine that finds ships without hitting them, using the Quantum Zeno Effect to push interaction-free detection fidelity from about 25% (basic Elitzur–Vaidman) to about 99.5%. Classical game logic in Python, detection oracle in Qiskit, tested under ideal and noisy simulation.",
      tags: ["Qiskit", "Python", "Quantum Zeno Effect", "Simulation"],
      href: "/reports/Hackathon_Report.pdf",
      linkLabel: "View hackathon report",
    },
    {
      tag: "Research report",
      title: "Dark Matter & Dark Energy",
      description:
        "A research report reviewing current theory and observational evidence on dark matter and dark energy, and their role in cosmic structure and expansion.",
      tags: ["Cosmology", "Literature review", "Astrophysics"],
    },
  ],
  security: [
    {
      tag: "Google Cloud KMS",
      title: "Asymmetric Encryption — Sign & Verify",
      description:
        "Generated an RSA key pair in Google Cloud KMS to digitally sign files, then verified signatures with the public key to demonstrate tamper detection and data integrity.",
      tags: ["OpenSSL", "Google Cloud KMS", "RSA", "Cryptography"],
      href: "/reports/Asymmetric_Encryption_to_Sign_and_Verify_Data.pdf",
      linkLabel: "View report",
    },
    {
      tag: "Design exercise",
      title: "Security Infrastructure for an E-Commerce Company",
      description:
        "Designed a security plan covering MFA, RBAC, VPN remote access, firewall rules, VLAN segmentation, endpoint protection, and IDS — aligned with PCI DSS and GDPR.",
      tags: ["Network security", "PCI DSS", "GDPR", "Infrastructure"],
      href: "/reports/Security_Infrastructure_Design.pdf",
      linkLabel: "View design report",
    },
    {
      tag: "Hands-on lab",
      title: "OWASP Juice Shop Penetration Test",
      description:
        "Hands-on penetration testing against the intentionally vulnerable OWASP Juice Shop application, practicing common web exploitation techniques in a controlled lab.",
      tags: ["Web AppSec", "OWASP", "Penetration testing"],
    },
    {
      tag: "Coursework",
      title: "Linux Shell Scripting & Filesystem Administration",
      description:
        "Wrote and debugged Bash scripts for system administration workflows, and worked hands-on with Linux file permissions, directory structures, and symbolic and hard links.",
      tags: ["Bash", "Linux", "Filesystem"],
      href: "/reports/Linux_Shell_Scripting.pdf",
      linkLabel: "View coursework report",
    },
  ],
  automation: [
    {
      tag: "n8n · Email Automation",
      title: "Inbox trigger → smart reply → auto-send",
      description:
        "Watches an inbox for new messages, filters by sender and subject criteria, generates a templated response based on the message content, and sends the reply automatically — removing a repetitive manual step from the workflow.",
      tags: ["n8n", "Email trigger", "Filtering", "Templating"],
      flow: ["New email", "Sender / subject filter", "Generate templated reply", "Auto-send", "Log result"],
      featured: true,
    },
    {
      tag: "Make · Template study",
      title: "One approved asset → multi-platform social post",
      description:
        "A sheet-driven trigger pulls approved content, fetches the asset from storage, notifies the team, updates status, then routes the same post to Instagram and Facebook in parallel.",
      tags: ["Make", "Google Sheets", "Cloud storage", "Instagram", "Facebook"],
      flow: ["Sheet update", "Repeat items", "Fetch asset", "Notify + update", "Instagram / Facebook"],
    },
    {
      tag: "Zapier · Template study",
      title: "Webhook → enrichment → AI-driven branching",
      description:
        "An inbound webhook enriches a lead via Clearbit, then splits into three paths — nurture sequence, high-priority AI response, or an auto-created support ticket — based on the lead profile and intent.",
      tags: ["Zapier", "Webhooks", "Lead enrichment", "AI branching", "Zendesk"],
      flow: ["Webhook", "Enrich lead", "Evaluate intent", "Nurture / priority / support"],
    },
    {
      tag: "Leadership",
      title: "Team Lead, Google Quantum AI — GDG IST",
      description:
        "Lead and coordinate the Quantum AI team: defining project milestones, mentoring members through quantum computing and AI fundamentals, and running candidate interviews.",
      tags: ["Quantum computing", "Mentorship", "Team coordination"],
    },
    {
      tag: "Hardware",
      title: "Bluetooth-Controlled RC Car",
      description:
        "Built an Arduino RC car using an L298N motor driver and HC-05 Bluetooth module, tracing and resolving TXD/RXD wiring faults along the way.",
      tags: ["Arduino", "Embedded", "Bluetooth", "Electronics"],
    },
    {
      tag: "Database",
      title: "Census Management System",
      description:
        "Designed a MySQL database for a census system — schema, 90+ seed records, 20 queries — with accompanying documentation and report.",
      tags: ["MySQL", "Database design", "SQL"],
    },
  ],
};

const credentials = [
  ["Google Cybersecurity Professional Certificate", "Linux, SIEM, SQL, Python, Incident Response", "Jul 2025"],
  ["EC-Council Ethical Hacking Essentials (EHE)", "Threat Detection", "Jun 2025"],
  ["IT Security: Defense Against the Digital Dark Arts", "Malware Detection, SIEM", "Sep 2025"],
  ["Office of the CISO Institute: Cybersecurity Essentials", "Cloud Security, Authentication", "Sep 2025"],
  ["Automate Cybersecurity Tasks with Python", "Python, Algorithms", "Jul 2025"],
  ["Sound the Alarm: Detection and Response", "SIEM", "Jul 2025"],
  ["Assets, Threats, and Vulnerabilities", "NIST 800-53, Cryptography", "Jul 2025"],
  ["Connect and Protect: Networks and Network Security", "Network Architecture", "May 2025"],
  ["Play It Safe: Manage Security Risks", "Security Audits", "Apr 2025"],
  ["Foundations of Cybersecurity", "Cybersecurity Fundamentals", "Mar 2025"],
  ["Tools of the Trade: Linux and SQL", "Linux, Bash", "Jun 2025"],
  ["Google Prompting Essentials", "AI, Problem Solving", "Aug 2025"],
  ["Hands-on Quantum Error Correction — Google Quantum AI", "Quantum Computing", "Jun 2025"],
  ["Quantum Computing For Everyone — Fractal", "Quantum Computing", "Mar 2025"],
  ["Crash Course on Python", "Python, Algorithms", "Sep 2025"],
  ["Python Data Structures — University of Michigan", "Data Structures", "Jun 2025"],
  ["Programming for Everybody — University of Michigan", "Python", "Apr 2025"],
  ["Python for Data Science, AI & Development — IBM", "Python", "Mar 2025"],
  ["AI For Everyone — DeepLearning.AI", "Generative AI", "Mar 2025"],
  ["Ethical Hacking Foundations — Packt", "Linux", "Jun 2025"],
  ["Rocket Science for Everyone — Yale University", "Rocket Technology", "Mar 2025"],
  ["Workshop on GR, Cosmology, Astrophysics & Particle Physics — SARL", "Astrophysics", "Dec 2024"],
  ["How to Write a Research Paper — HEC", "Research Skills", "Feb 2025"],
  ["Work Smarter with MS Excel / PowerPoint — Microsoft", "MS Office", "Mar 2025"],
];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18" className="arrow-icon">
      {diagonal ? <path d="M4 14 14 4M5 4h9v9" /> : <path d="M2.5 9h12m-4.5-4.5L14.5 9 10 13.5" />}
    </svg>
  );
}

function FlowStrip({ steps = [] }) {
  return (
    <div className="flow-strip" aria-label={`Workflow: ${steps.join(", then ")}`}>
      {steps.map((step, index) => (
        <React.Fragment key={`${step}-${index}`}>
          <span className="flow-node">{step}</span>
          {index < steps.length - 1 && <span className="flow-arrow" aria-hidden="true">→</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <CardSpotlight
      className={`project-card reveal ${project.featured ? "project-card-featured" : ""}`}
      color={index % 2 === 0 ? "rgba(85,214,199,0.12)" : "rgba(156,143,240,0.14)"}
    >
      <div className="project-topline">
        <span className="project-category">{project.tag}</span>
        {project.status && <Badge variant={project.statusVariant}>{project.status}</Badge>}
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.flow && <FlowStrip steps={project.flow} />}
      <div className="tag-list">
        {project.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
      </div>
      {project.href && (
        <a
          className="text-link"
          href={project.href.startsWith("/") ? `${import.meta.env.BASE_URL}${project.href.slice(1)}` : project.href}
          target={project.href.startsWith("http") || project.href.endsWith(".pdf") ? "_blank" : undefined}
          rel={project.href.startsWith("http") || project.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
        >
          {project.linkLabel || "Open project"} <ArrowIcon diagonal />
        </a>
      )}
    </CardSpotlight>
  );
}

function App() {
  const root = useRef(null);
  const [activeTrack, setActiveTrack] = useState("ai");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useGSAP(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    intro
      .from(".hero-kicker", { y: 16, opacity: 0, duration: 0.65 })
      .from(".hero-title", { y: 34, opacity: 0, duration: 0.9 }, "-=0.3")
      .from(".hero-copy", { y: 20, opacity: 0, duration: 0.75 }, "-=0.48")
      .from(".hero-actions", { y: 14, opacity: 0, duration: 0.55 }, "-=0.42");

    gsap.fromTo(
      ".spectral-main",
      { strokeDasharray: 1900, strokeDashoffset: 1900 },
      { strokeDashoffset: 0, duration: 2.6, delay: 0.25, ease: "power2.inOut" },
    );
    gsap.fromTo(
      ".spectral-label",
      { opacity: 0, y: 6 },
      { opacity: 0.82, y: 0, duration: 0.55, stagger: 0.16, delay: 1.8 },
    );

    gsap.utils.toArray(".reveal-section").forEach((element) => {
      gsap.fromTo(
        element,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: element, start: "top 84%", once: true },
        },
      );
    });
  }, { scope: root, dependencies: [] });

  const closeMobileNav = () => setMobileNavOpen(false);

  return (
    <div ref={root} className="site-shell">
      <nav className="site-nav" aria-label="Main navigation">
        <div className="nav-inner">
          <a className="nav-logo" href="#top" aria-label="Syed Saif Gillani home">SSG<span>.</span></a>
          <div className={`nav-links ${mobileNavOpen ? "nav-links-open" : ""}`}>
            <a href="#about" onClick={closeMobileNav}>About</a>
            <a href="#work" onClick={closeMobileNav}>Work</a>
            <a href="#snapshot" onClick={closeMobileNav}>Snapshot</a>
            <a href="#credentials" onClick={closeMobileNav}>Credentials</a>
            <a href="#contact" onClick={closeMobileNav}>Contact</a>
          </div>
          <a className="nav-contact" href="mailto:saifgillani3@gmail.com">Let’s connect <ArrowIcon diagonal /></a>
          <button
            className="mobile-menu-button"
            type="button"
            aria-label={mobileNavOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileNavOpen}
            onClick={() => setMobileNavOpen((open) => !open)}
          >
            <span /><span />
          </button>
        </div>
      </nav>

      <main id="top">
        <header className="hero-section">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />
          <div className="beam beam-one" aria-hidden="true" />
          <div className="beam beam-two" aria-hidden="true" />
          <div className="spectrum-layer" aria-hidden="true">
            <svg className="hero-spectrum" viewBox="0 0 1080 340" preserveAspectRatio="xMidYMax meet">
              <path d="M0 300H1080" className="spectral-base" />
              <path className="spectral-main" d="M0,300 L120,298 L200,296 L260,180 L280,60 L300,180 L340,296 L460,294 L520,296 L560,150 L580,40 L600,150 L640,296 L760,292 L820,290 L850,200 L870,90 L890,200 L920,290 L1080,286" />
              <text className="spectral-label" x="280" y="48" textAnchor="middle">Hα</text>
              <text className="spectral-label" x="580" y="28" textAnchor="middle">[O III]</text>
              <text className="spectral-label" x="870" y="78" textAnchor="middle">Hβ</text>
            </svg>
          </div>

          <div className="container hero-content">
            <div className="hero-kicker"><span className="status-dot" /> Islamabad, Pakistan <span className="kicker-divider">/</span> Space Science · Applied AI</div>
            <h1 className="hero-title">Reading signal<br />out of <em>noise.</em></h1>
            <p className="hero-copy">
              I build AI applications in Python and apply machine learning to scientific data — from fine-tuned language models and agent workflows to deep-learning pipelines for astronomical spectra. Grounded in space science, with a security mindset.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore selected work <ArrowIcon /></a>
              <a className="button button-secondary" href="mailto:saifgillani3@gmail.com">Get in touch <ArrowIcon diagonal /></a>
            </div>
            <div className="hero-footnote"><span className="mono-label">CURRENT FOCUS</span> LLM applications <span className="footnote-dot">·</span> Spectral ML <span className="footnote-dot">·</span> Automation</div>
          </div>
          <div className="hero-index mono-label">01 / 04</div>
        </header>

        <div className="signal-divider" aria-hidden="true"><div className="signal-divider-track" /></div>

        <section className="section about-section" id="about">
          <div className="container about-layout">
            <div className="about-aside reveal-section">
              <div className="section-index">01 <span>—</span> PROFILE</div>
              <div className="stats-stack">
                <div className="stat-block"><span className="stat-value">3.35</span><span className="stat-label">CGPA · B.S. Space Science</span></div>
                <div className="stat-block"><span className="stat-value">25+</span><span className="stat-label">Certifications completed</span></div>
                <div className="stat-block"><span className="stat-value">1 yr+</span><span className="stat-label">AGN research · SARL–NCGSA</span></div>
              </div>
            </div>
            <div className="about-copy reveal-section">
              <div className="eyebrow">About</div>
              <h2>Science first.<br /><em>Systems thinking</em> always.</h2>
              <p>
                I'm a final-year <strong>Space Science</strong> student at the Institute of Space Technology, Islamabad, working as a <strong>Research Intern</strong> at the Space and Astrophysics Research Lab. My research uses SDSS spectral data to classify AGN and other celestial objects with machine learning and deep learning.
              </p>
              <p>
                Alongside research, I lead the <strong>Quantum AI team</strong> at Google Developer Group on Campus. I hold Google's Cybersecurity Professional Certificate and build AI tooling — including Gemini-powered agent workflows and fine-tuned language models served through REST APIs — to remove repetitive work from research and everyday tasks.
              </p>
              <p>
                I'm also developing a freelance track for international clients and tutor mathematics and physics.
              </p>
              <div className="about-bottomline"><span className="mono-label">BASE</span> Islamabad, Pakistan <span className="footnote-dot">·</span> Open to remote collaboration</div>
            </div>
          </div>
        </section>

        <div className="signal-divider signal-divider-alt" aria-hidden="true"><div className="signal-divider-track" /></div>

        <section className="section work-section" id="work">
          <div className="container">
            <div className="section-heading reveal-section">
              <div className="section-index">02 <span>—</span> SELECTED WORK</div>
              <div className="section-heading-main">
                <div>
                  <div className="eyebrow">Selected work</div>
                  <h2>Four tracks.<br /><em>One method.</em></h2>
                </div>
                <p>Understand the system. Build the pipeline. Ship something that works. Explore selected projects across AI, astrophysics, security, and automation.</p>
              </div>
            </div>

            <div className="track-tabs" role="tablist" aria-label="Project domains">
              {tracks.map((track) => (
                <button
                  key={track.id}
                  id={`tab-${track.id}`}
                  type="button"
                  role="tab"
                  aria-selected={activeTrack === track.id}
                  aria-controls={`panel-${track.id}`}
                  className={`track-tab ${activeTrack === track.id ? "active" : ""}`}
                  onClick={() => setActiveTrack(track.id)}
                >
                  <span>{track.label}</span><small>{String(track.count).padStart(2, "0")}</small>
                </button>
              ))}
            </div>

            {tracks.map((track) => (
              <div
                key={track.id}
                id={`panel-${track.id}`}
                className="track-panel"
                role="tabpanel"
                aria-labelledby={`tab-${track.id}`}
                hidden={activeTrack !== track.id}
              >
                <div className="project-grid">
                  {projects[track.id].map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="signal-divider" aria-hidden="true"><div className="signal-divider-track" /></div>

        <section className="section snapshot-section" id="snapshot">
          <div className="container snapshot-layout">
            <div className="snapshot-intro reveal-section">
              <div className="section-index">03 <span>—</span> PORTFOLIO SNAPSHOT</div>
              <div className="eyebrow">At a glance</div>
              <h2>A portfolio built<br />across <em>disciplines.</em></h2>
              <p>The counts below reflect the project cards currently displayed in each track — not a rating of skill or project impact.</p>
              <Badge variant="success">4 active domains</Badge>
            </div>
            <div className="snapshot-panel reveal-section">
              <div className="snapshot-panel-header">
                <div><span className="mono-label">PROJECT INDEX</span><h3>Selected work by track</h3></div>
                <span className="live-mark"><i /> LIVE INDEX</span>
              </div>
              <BarList data={[
                { name: "Automation & Systems", value: 6 },
                { name: "Cybersecurity", value: 4 },
                { name: "AI & LLM Apps", value: 3 },
                { name: "Astrophysics & ML", value: 3 },
              ]} valueFormatter={(value) => `${value} cards`} />
              <div className="snapshot-foot">16 selected project cards across four portfolio tracks</div>
            </div>
          </div>
        </section>

        <div className="signal-divider signal-divider-alt" aria-hidden="true"><div className="signal-divider-track" /></div>

        <section className="section credentials-section" id="credentials">
          <div className="container">
            <div className="section-heading reveal-section">
              <div className="section-index">04 <span>—</span> CREDENTIALS</div>
              <div className="section-heading-main">
                <div><div className="eyebrow">Credentials</div><h2>Learning across<br /><em>technical domains.</em></h2></div>
                <p>Selected credentials across cybersecurity, Python, quantum computing, AI, and research fundamentals. The list below includes the items currently supplied for this portfolio.</p>
              </div>
            </div>

            <div className="credential-table-wrap reveal-section">
              <div className="credential-table-heading"><span>PROGRAM / CERTIFICATE</span><span>FOCUS AREA</span><span>COMPLETED</span></div>
              {credentials.map(([name, focus, date], index) => (
                <div className="credential-row" key={name}>
                  <span className="credential-number">{String(index + 1).padStart(2, "0")}</span>
                  <strong>{name}</strong>
                  <span className="credential-focus">{focus}</span>
                  <time>{date}</time>
                </div>
              ))}
            </div>
            <p className="credential-note">Credential IDs and additional certificates can be linked from LinkedIn or added to this list.</p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-grid" aria-hidden="true" />
          <div className="container contact-content reveal-section">
            <div className="eyebrow">Get in touch</div>
            <h2>Have a problem worth<br />solving? <em>Let’s talk.</em></h2>
            <p>For opportunities and collaboration across space science, AI/ML, automation, and cybersecurity.</p>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:saifgillani3@gmail.com">saifgillani3@gmail.com <ArrowIcon diagonal /></a>
              <a className="button button-secondary" href="https://www.linkedin.com/in/syed-saif-gillani-309078296/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowIcon diagonal /></a>
              <a className="button button-secondary" href="https://github.com/SyedSaif101" target="_blank" rel="noopener noreferrer">GitHub <ArrowIcon diagonal /></a>
            </div>
          </div>
          <div className="contact-corner mono-label">OPEN TO REMOTE COLLABORATION</div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>Syed Saif Gillani <span className="footer-dot">·</span> Islamabad, Pakistan</span>
          <span>Built with React, GSAP & a little scientific curiosity.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
