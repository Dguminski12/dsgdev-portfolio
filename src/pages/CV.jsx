import "./styles/CV.css";

export default function CV() {
    return (
        <div className="cv-container">
            {/* Header Section */}
            <div className="card cv-header">
                <h1>Dawid S. Guminski</h1>
                <p className="cv-title">Telecoms Engineer & Junior Software Developer</p>
                <p className="sub">
                    Telecoms Engineer transitioning into software development with a hands-on background 
                    in engineering. Skilled in JavaScript, React, and Python with a strong foundation 
                    in problem-solving and technical systems.
                </p>
                <div className="cv-contact">
                    <a className="btn" href="mailto:youremail@example.com">📧 Email</a>
                    <a className="btn" href="https://github.com/" target="_blank" rel="noreferrer">🔗 GitHub</a>
                    <a className="btn" href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">💼 LinkedIn</a>
                </div>
            </div>

            {/* Experience Section */}
            <section className="cv-section">
                <h2 className="cv-section-title">Work Experience</h2>
                <div className="cv-timeline">
                    <article className="cv-timeline-item">
                        <div className="cv-item-header">
                            <div>
                                <h3 className="cv-item-title">Advanced Fibre Engineer</h3>
                                <p className="cv-item-company">Openreach</p>
                            </div>
                            <span className="cv-item-date">March 2021 - Present</span>
                        </div>
                        <div className="cv-item-description">
                            <ul>
                                <li>Installed and maintained fibre optic networks, ensuring high-quality service delivery</li>
                                <li>Troubleshot complex network issues, reducing downtime and improving customer satisfaction</li>
                                <li>Collaborated with cross-functional teams to optimize installation processes</li>
                            </ul>
                        </div>
                        <div className="cv-item-tech">
                            <span className="cv-tech-tag">Fiber Optics</span>
                            <span className="cv-tech-tag">Network Troubleshooting</span>
                            <span className="cv-tech-tag">Technical Support</span>
                        </div>
                    </article>

                    <article className="cv-timeline-item">
                        <div className="cv-item-header">
                            <div>
                                <h3 className="cv-item-title">Machine Technician</h3>
                                <p className="cv-item-company">Flexible Medical Packaging</p>
                            </div>
                            <span className="cv-item-date">Sept 2018 - Feb 2021</span>
                        </div>
                        <div className="cv-item-description">
                            <ul>
                                <li>Operated and maintained packaging machinery to ensure efficient production</li>
                                <li>Performed routine inspections and troubleshooting to minimize downtime</li>
                                <li>Worked closely with quality control to maintain product standards</li>
                            </ul>
                        </div>
                        <div className="cv-item-tech">
                            <span className="cv-tech-tag">Machine Operation</span>
                            <span className="cv-tech-tag">Quality Control</span>
                            <span className="cv-tech-tag">Maintenance</span>
                        </div>
                    </article>
                </div>
            </section>

            {/* Education Section */}
            <section className="cv-section">
                <h2 className="cv-section-title">Education</h2>
                <div className="card cv-summary">
                    <div className="cv-education-item">
                        <h3 className="cv-degree">A Levels</h3>
                        <p className="cv-institution">Bay Leadership Academy</p>
                        <p className="cv-edu-date">2016 - 2018</p>
                        <ul className="cv-item-description">
                            <li>ICT - Merit</li>
                            <li>Media - Distinction</li>
                            <li>Photography - B</li>
                        </ul>
                    </div>
                    <div className="cv-education-item">
                        <h3 className="cv-degree">Self-Directed Learning</h3>
                        <ul className="cv-item-description">
                            <li>Codecademy - Learn Python 3, JavaScript, React</li>
                            <li>freeCodeCamp - Responsive Web Design</li>
                            <li>Raspberry Pi & Embedded Systems Projects</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="cv-section">
                <h2 className="cv-section-title">Technical Skills</h2>
                <div className="card cv-skills-grid">
                    <div className="cv-skill-category">
                        <h4>Frontend Development</h4>
                        <div className="cv-skill-list">
                            <span className="cv-skill-item">React</span>
                            <span className="cv-skill-item">JavaScript</span>
                            <span className="cv-skill-item">TypeScript (learning)</span>
                            <span className="cv-skill-item">HTML/CSS</span>
                            <span className="cv-skill-item">Vite</span>
                        </div>
                    </div>
                    <div className="cv-skill-category">
                        <h4>Backend & Systems</h4>
                        <div className="cv-skill-list">
                            <span className="cv-skill-item">Python</span>
                            <span className="cv-skill-item">Node.js</span>
                            <span className="cv-skill-item">C/C++ (learning)</span>
                            <span className="cv-skill-item">Linux</span>
                            <span className="cv-skill-item">Raspberry Pi</span>
                        </div>
                    </div>
                    <div className="cv-skill-category">
                        <h4>Tools & Platforms</h4>
                        <div className="cv-skill-list">
                            <span className="cv-skill-item">Git/GitHub</span>
                            <span className="cv-skill-item">Docker (learning)</span>
                            <span className="cv-skill-item">WordPress</span>
                            <span className="cv-skill-item">Cloudflare</span>
                            <span className="cv-skill-item">VS Code</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Download Section */}
            <div className="card cv-download">
                <a className="cv-download-btn" href="/path-to-your-cv.pdf" download>
                    📄 Download PDF Version
                </a>
            </div>
        </div>
    );
}