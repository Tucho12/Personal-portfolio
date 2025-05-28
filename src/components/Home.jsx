import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";


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
    url: "https://www.facebook.com/yourfacebookprofile",
    icon: <FaFacebook />,
  },
];

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="home-title">Tucho Biratu</h1>
        <p className="home-description">
          I'm a passionate software developer focused on building web
          applications that solve real-world problems. I love working with
          modern JavaScript frameworks like React and thrive on clean,
          functional UI design. Let’s connect and collaborate!
        </p>
        <div className="social-icons">
          {socialMedia.map(({ name, url, icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="social-icon-link"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
