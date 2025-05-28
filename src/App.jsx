import React, { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Project";
import Contact from "./components/Contact";

import "./App.css";
const socialMedia = [
  {
    name: "GitHub",
    url: "https://github.com/Tucho12",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tucho12",
    icon: <FaLinkedin />,
  },
  {
    name: "Facebook",
    url: "https://www.linkedin.com/in/tucho12",
    icon: <FaFacebook />,
  },
];

const profile = {
  photo: "Images/Tucho.png",
  name: "Tucho Biratu",
  role: "Full Stack Developer",
  email: "t.biratu123@gmail.com",
  birth: "March 11, 2000",
  location: "Addis Ababa, Ethiopia",
  phone: "+2519 1208 9253",
};

const profileIcons = {
  email: <FaEnvelope />,
  birth: <FaBirthdayCake />,
  location: <FaMapMarkerAlt />,
  phone: <FaPhone />,
};

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }
  }, [sidebarOpen]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("light-mode");
  };

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "resume":
        return <Resume />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="container">
      <div className="content">
        <button
          className="hamburger-btn"
          aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Sidebar: add class for toggle */}
        <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <img
            src={profile.photo}
            alt={`${profile.name} Profile`}
            className="profile-photo"
          />
          <h2 className="name">{profile.name}</h2>
          <h4 className="role">{profile.role}</h4>

          <div className="profile-info">
            <p>
              <span className="info-icon">{profileIcons.email}</span>
              <strong>Email:</strong> <br />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>
            <p>
              <span className="info-icon">{profileIcons.birth}</span>
              <strong>Birth:</strong> <br />
              {profile.birth}
            </p>
            <p>
              <span className="info-icon">{profileIcons.location}</span>
              <strong>Location:</strong>
              <br />
              {profile.location}
            </p>
            <p>
              <span className="info-icon">{profileIcons.phone}</span>
              <strong>Phone:</strong> <br />
              <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            </p>
          </div>

          <div className="social-media">
            {socialMedia.map(({ name, url, icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
              >
                {icon}
              </a>
            ))}
          </div>
        </aside>

        <main className="main-contents">
          <nav className="navbar" aria-label="Primary navigation">
            {["home","about", "resume", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => {
                  setActiveSection(section);
                  setSidebarOpen(false);
                }}
                aria-current={activeSection === section ? "page" : undefined}
                className={activeSection === section ? "active" : ""}
              >
                {section}
              </button>
            ))}
          </nav>

          <section className="content-section">{renderContent()}</section>
        </main>
      </div>
    </div>
  );
};

export default App;
