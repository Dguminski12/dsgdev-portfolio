const PROJECTS = [
  {
    name: "FishMate UK",
    description:
      "A UK-focused fishing companion app concept. Built to practice full-stack patterns, auth, and a clean UI.",
    tech: ["React", "TypeScript", "Tailwind", "Supabase", "PWA"],
    live: "https://fishmate.dsgdev.dev",
    repo: "https://github.com/"
  },
  {
    name: "Desk Companion (Robotics)",
    description:
      "A Raspberry Pi + ESP32 project focused on state machines, non-blocking loops, and hardware/software bridging.",
    tech: ["Python", "ESP32", "Serial comms", "State machine"],
    live: "https://labs.dsgdev.dev",
    repo: "https://github.com/"
  },
  {
    name: "WordPress Support Demo",
    description:
      "A WordPress sandbox for learning support workflows: plugin conflicts, performance basics, and small theme changes.",
    tech: ["WordPress", "PHP (basics)", "Hosting / DNS"],
    live: "https://wp.dsgdev.dev",
    repo: ""
  },
];

function Tech({ items }) {
  return (
    <div className="pill-row">
      {items.map((t) => (
        <span className="pill" key={t}>{t}</span>
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="stack">
      <div className="card">
        <h1>Featured Projects</h1>
        <p className="sub">
          A small set of projects I’m actively building and improving. Each has a live link and/or repo.
        </p>
      </div>

      <div className="stack">
        {PROJECTS.map((p) => (
          <article className="card" key={p.name}>
            <h2>{p.name}</h2>
            <p>{p.description}</p>
            <Tech items={p.tech} />
            <div className="cta-row">
              {p.live && <a className="btn primary" href={p.live} target="_blank" rel="noreferrer">Live</a>}
              {p.repo && <a className="btn" href={p.repo} target="_blank" rel="noreferrer">Repo</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
