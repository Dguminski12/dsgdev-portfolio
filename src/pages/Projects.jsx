import { useEffect, useState } from "react";
import "./styles/Projects.css";

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

function GithubProjects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProjects() {
            try {
                const res = await fetch('https://api.github.com/users/dguminski12/repos?sort=updated');
                const data = await res.json();
                setProjects(data);
            } catch (error) {
                console.error("Error fetching GitHub projects:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchProjects();
    }, []);

    if (loading) {
        return <div className="loading">Loading projects...</div>;
    }

    return (
        <div className="project-list">
            {projects.map((project) => (
                <article className="project-item" key={project.id}>
                    <div className="project-header">
                        <h2 className="project-title">
                            <a 
                                className="project-title-link" 
                                href={project.html_url} 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                {project.name}
                            </a>
                        </h2>
                        <span className="project-visibility">
                            {project.private ? "Private" : "Public"}
                        </span>
                    </div>
                    
                    <p className="project-description">
                        {project.description || "No description provided."}
                    </p>
                    
                    <div className="project-meta">
                        {project.language && (
                            <div className="project-meta-item project-language">
                                <span 
                                    className="language-dot" 
                                    style={{ backgroundColor: LANGUAGE_COLORS[project.language] || "#858585" }}
                                />
                                <span>{project.language}</span>
                            </div>
                        )}
                        
                        {project.stargazers_count > 0 && (
                            <div className="project-meta-item">
                                <span>⭐</span>
                                <span>{project.stargazers_count}</span>
                            </div>
                        )}
                        
                        {project.forks_count > 0 && (
                            <div className="project-meta-item">
                                <span>🔱</span>
                                <span>{project.forks_count}</span>
                            </div>
                        )}
                        
                        <div className="project-meta-item">
                            Updated {new Date(project.updated_at).toLocaleDateString()}
                        </div>
                    </div>

                    {project.homepage && (
                        <div className="project-actions">
                            <a className="btn" href={project.homepage} target="_blank" rel="noreferrer">
                                🔗 Live Demo
                            </a>
                        </div>
                    )}
                </article>
            ))}
        </div>
    );
}

export default function Projects() {
    return (
        <section>
            <div className="card projects-header">
                <h1>GitHub Projects</h1>
                <p className="sub">
                    A dynamic list of my public GitHub repositories, fetched directly from the GitHub API.
                </p>
            </div>
            <GithubProjects />
        </section>
    );
}