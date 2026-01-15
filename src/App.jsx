import { Routes, Route, NavLink } from "react-router-dom";
import Home from "../docs/Home.jsx";
import Projects from "./pages/Projects.jsx";
import CV from "./pages/CV.jsx";
import "./styles/App.css";

function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="brand" href="/">Dawid Guminski</a>
        <nav className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
          <NavLink to="/cv" className={({ isActive }) => isActive ? "active" : ""}>CV</NavLink>
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Dawid Guminski</span>
          <span className="footer-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            <a href="mailto:youremail@example.com">Email</a>
            {/* Add LinkedIn later */}
          </span>
        </div>
      </footer>
    </>
  );
}
