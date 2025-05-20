import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { SiFlutter, SiDart, SiReact } from "react-icons/si";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

const About = ({theme}) => {
  const isDark = theme === "dark";
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
  const skills = [
    { name: "HTML", level: 90, icon: <FaHtml5 /> },
    { name: "CSS", level: 85, icon: <FaCss3Alt /> },
    { name: "JavaScript", level: 85, icon: <FaJsSquare /> },
    { name: "React", level: 80, icon: <FaReact /> },
    { name: "Node.js", level: 75, icon: <FaNodeJs /> },
    { name: "MongoDB", level: 70, icon: <FaDatabase /> },
    { name: "Flutter", level: 70, icon: <SiFlutter /> },
    { name: "Dart", level: 65, icon: <SiDart /> },
    { name: "GitHub", level: 80, icon: <FaGithub /> },
  ];
  return (
    <div className="main-content mx-auto text-white">
      <Container fluid>
        <Row className="mb-4 resume-section">
          <Col xs={12}>
            <h2 className="section-title mb-4">About Me</h2>
            <p>
              Hello! I’m <strong>Tucho Biratu</strong>, a passionate{" "}
              <strong>Full Stack Web & Mobile Developer</strong> based in Addis
              Ababa, Ethiopia.
            </p>
            <p>
              I specialize in crafting responsive, scalable, and elegant digital
              solutions using the <strong>MERN Stack</strong> for web and{" "}
              <strong>Flutter</strong> & <strong>React Native</strong> for
              cross-platform mobile apps.
            </p>
            <p>
              With a strong focus on clean UI/UX, performance, and best coding
              practices, I bring both frontend creativity and backend logic to
              every project.
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <h3 className="mb-3">Skills</h3>
            {skills.map(({ name, level, icon }) => (
              <div key={name} className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <div>
                    {icon} <strong className="ms-2">{name}</strong>
                  </div>
                  <span>{level}%</span>
                </div>
                <ProgressBar
                  now={level}
                  variant={isDark ? "info" : "primary"}
                  style={{ height: "8px" }}
                />
              </div>
            ))}
          </Col>
        </Row>


        <Row>
          <Col xs={12}>
            <div className="alert alert-primary mt-4">
              Ready to bring your idea to life? Let’s connect and build
              something amazing together — for the web or mobile!
            </div>
          </Col>
        </Row>
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
      </Container>
    </div>
  );
};

export default About;
