const LINKS = [
  {
    title: "Featured Projects",
    url: "/projects",
    note: "Short write-ups and links to live demos & repos."
  },
  {
    title: "FishMate UK",
    url: "https://fishmate.dsgdev.dev",
    note: "UK-focused fishing companion app (PWA)."
  },
  {
    title: "Labs",
    url: "https://labs.dsgdev.dev",
    note: "Robotics, Pi, Python, C/C++ learning notes & experiments."
  },
  {
    title: "WordPress Demo",
    url: "https://wp.dsgdev.dev",
    note: "Support/dev practice site (theme + plugins)."
  },
];

export default function Home() {
  return (
    <section className="stack">
      <div className="hero card">
        <h1>DSG Development</h1>
        <p className="sub">
          Junior software developer (in training) with a hands-on background in engineering.
          Building projects across React, Python, and embedded/robotics.
        </p>

        <div className="cta-row">
          <a className="btn primary" href="/projects">View Projects</a>
          <a className="btn" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn" href="mailto:youremail@example.com">Contact</a>
        </div>

        <div className="meta">
          <span>Based in the UK</span>
          <span>•</span>
          <span>Open to junior roles</span>
        </div>
      </div>

      <div className="grid">
        {LINKS.map((l) => (
          <a
            className="card link-card"
            key={l.title}
            href={l.url}
            target={l.url.startsWith("http") ? "_blank" : undefined}
            rel={l.url.startsWith("http") ? "noreferrer" : undefined}
          >
            <div className="link-title">{l.title} →</div>
            <div className="link-note">{l.note}</div>
          </a>
        ))}
      </div>

      <div className="card">
        <h2>Skills Snapshot</h2>
        <div className="pill-row">
          <span className="pill">JavaScript</span>
          <span className="pill">React</span>
          <span className="pill">TypeScript (learning)</span>
          <span className="pill">Python</span>
          <span className="pill">C / C++ (learning)</span>
          <span className="pill">Git / GitHub</span>
          <span className="pill">Linux / Raspberry Pi</span>
          <span className="pill">Cloudflare</span>
          <span className="pill">Docker (learning)</span>
          <span className="pill">WordPress</span>
        </div>
      </div>
    </section>
  );
}
