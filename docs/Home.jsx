import { useEffect, useState } from "react";
import "./styles/Home.css";

const LANGUAGE_COLORS = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Python: "#3572A5",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Java: "#b07219",
    C: "#555555",
    "C++": "#f34b7d",
    Shell: "#89e051",
    Go: "#00ADD8"
};

function FeaturedProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch('https://api.github.com/users/dguminski12/repos?sort=updated');
        const data = await res.json();
        // Get only the first 4 projects
        setProjects(data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching GitHub projects:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  if (loading) {
    return <div className="card"><p className="sub">Loading featured projects...</p></div>;
  }

  return (
    <>
      {projects.map((project) => (
        <a
          className="card link-card featured-project"
          key={project.id}
          href={project.html_url}
          target="_blank"
          rel="noreferrer"
        >
          <div className="link-title">
            {project.name} →
            {project.language && (
              <span className="project-lang">
                <span 
                  className="language-dot" 
                  style={{ backgroundColor: LANGUAGE_COLORS[project.language] || "#858585" }}
                />
                {project.language}
              </span>
            )}
          </div>
          <div className="link-note">{project.description || "No description provided."}</div>
          {project.homepage && (
            <div className="project-homepage">🔗 Live Demo</div>
          )}
        </a>
      ))}
    </>
  );
}

export default function Home() {
  return (
    <section className="stack">
      <div className="hero card">
        <h1>Dawid Guminski</h1>
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

      <div className="section-header">
        <h2>Featured Projects</h2>
        <p className="sub">Recent repositories from GitHub</p>
      </div>

      <div className="grid">
        <FeaturedProjects />
      </div>

      <div className="section-header">
        <h2>Skills Snapshot</h2>
      </div>

      <div className="card">
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
