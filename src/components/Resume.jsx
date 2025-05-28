import React from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaBrain,
  FaCode,
  FaStar,
  FaCogs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaMobileAlt,
  FaAndroid,
  FaLaptopCode,
  FaApple,
  FaCodeBranch,
  FaDownload,
} from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import { SiFlutter, SiDart, SiReact } from "react-icons/si";
const Resume = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./resume.pdf"; 
    link.download = "My_Resume.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="main-content mx-auto text-white resume-section">
      {/* Title */}
      <div className="mb-4">
        <h2 className="section-title">Resume</h2>
      </div>

      <div className="mb-4">
        <h4 className="section-heading">
          <FaStar className="me-2" />
          Summary
        </h4>
        <p className="section-text">
          Passionate Full Stack Web & Mobile Developer with experience in React,
          Node.js, Flutter, and React Native. I specialize in building scalable,
          responsive applications with modern UI and clean code.
        </p>
      </div>

      {/* Experience */}
      <div className="mb-4">
        <h4 className="section-heading">
          <FaBriefcase className="me-2" />
          Experience
        </h4>
        <div className="resume-card">
          <h6>Full Stack Developer – Internship at OICT solutions</h6>
          <p className=" text-success">2025 – Present</p>
          <p>Created dynamic, user-focused interfaces with MERN-Stack</p>
        </div>
        <div className="resume-card mt-3">
          <h6>
            Mobile Developer – Acadamic Projects and Internship OICT solutions
          </h6>
          <p className="text-success">2025 – Present</p>
          <p>
            Developed mobile apps using Flutter and React Native for Android &
            iOS.
          </p>
        </div>
      </div>

      {/* Education */}
      <div className="mb-4">
        <h4 className="section-heading">
          <FaGraduationCap className="me-2" />
          Education
        </h4>
        <div className="resume-card">
          <h6>BSc in Software Engineering – Injibara University</h6>
          <p className="text-success">2021 – Now</p>
        </div>
      </div>

      <Row className="mb-4">
        <Col xs={12} md={6} className="mb-4">
          <h4 className="mb-3">
            <FaCogs className="me-2" />
            Core Web Skills
          </h4>
          <ul className="list-unstyled about-list">
            <li>
              <FaHtml5 className="me-2 text-danger" />
              HTML5
            </li>
            <li>
              <FaCss3Alt className="me-2 text-primary" />
              CSS3 / Bootstrap 5
            </li>
            <li>
              <FaJsSquare className="me-2 text-warning" />
              JavaScript (ES6+)
            </li>
            <li>
              <FaReact className="me-2 text-info" />
              React.js / Context API / Hooks
            </li>
            <li>
              <FaNodeJs className="me-2 text-success" />
              Node.js / Express.js
            </li>
            <li>
              <FaDatabase className="me-2 text-secondary" />
              MongoDB / Mongoose
            </li>
            <li>
              <FaGithub className="me-2" />
              Git / GitHub / REST APIs
            </li>
          </ul>
        </Col>

        <Col xs={12} md={6}>
          <h4 className="mb-3">
            <FaMobileAlt className="me-2" />
            Mobile Development
          </h4>
          <ul className="list-unstyled about-list">
            <li>
              <SiFlutter className="me-2 text-info" />
              Flutter / <SiDart className="me-2" />
              Dart
            </li>
            <li>
              <SiReact className="me-2 text-primary" />
              React Native
            </li>
            <li>
              <FaAndroid className="me-2 text-success" />
              Android &nbsp;&nbsp;
              <FaApple className="me-2 text-secondary" />
              iOS Platforms
            </li>
            <li>
              <FaLaptopCode className="me-2" />
              Responsive & Cross-Platform Design
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h4 className="mb-3">
            <FaBrain className="me-2" />
            Soft Skills
          </h4>
          <ul className="list-unstyled about-list">
            <li>
              <FaCodeBranch className="me-2" />
              Team Collaboration & Agile Workflow
            </li>
            <li>
              <FaCode className="me-2" />
              Clean, Maintainable Code
            </li>
            <li>
              <FaBrain className="me-2 text-info" />
              Continuous Learning & Problem Solving
            </li>
          </ul>
        </Col>
      </Row>
      <button
        onClick={handleDownload}
        className="btn btn-primary d-inline-flex align-items-center"
      >
        <FaDownload className="me-2" />
        Download Resume
      </button>
      {/* Footer Call to Action */}
      <div className="alert alert-primary mt-3 mb-0">
        Let’s collaborate and build impactful solutions for the web or mobile!
      </div>
    </div>
  );
};

export default Resume;
