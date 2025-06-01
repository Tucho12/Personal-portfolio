import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const projects = [
  {
    title: "E-Commerce App",
    image: "./Images/apple.JPG",
    link: "https://apleclone.netlify.app/",
    category: "Frontend",
    date: "20 May, 2024",
    description: "Apple website cloning  built with Javascript and Css.",
  },
  {
    title: "Portfolio Website",
    image: "./Images/portfolio.JPG",
    link: "https://tucho12.github.io/myPortifolio/",
    category: "Frontend",
    date: "10 Apr, 2024",
    description: "Personal portfolio to showcase skills and projects.",
  },
  {
    title: "Mobile BMI App",
    image: "./Images/input_page.png",
    link: "https://github.com/Tucho12/Mobile-App",
    category: "Mobile",
    date: "5 Nov, 2024",
    description: "Mobile app to calculate body mass index.",
  },
  {
    title: "Portfolio Website",
    image: "./Images/jale.JPG",
    link: "https://jale-graphics.netlify.app/",
    category: "Frontend",
    date: "10 Apr, 2024",
    description: "Personal portfolio to showcase skills and projects.",
  },
  {
    title: "facebook Login Page",
    image: "./Images/facebook.JPG",
    link: "https://fbloginform.netlify.app/",
    category: "Frontend",
    date: "15 March, 2024",
    description: "Login page of facebook.",
  },
  {
    title: "House rental Management System",
    image: "./Images/Hrms.JPG",
    link: "https://frontend-orcin-xi-42.vercel.app/",
    category: "Full stack",
    date: "10 March, 2025 - now",
    description:
      "I am doing Fullstack on HRMS at OICT solutions by Internship.",
  },
];

function Project() {
  return (
    <div className="main-content mx-auto text-white project-section">
      <Container fluid>
        <div className="resume-section">
          <h2 className="section-title mb-4">Projects</h2>
        </div>
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col xs={12} md={6} key={index}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <Card className="bg-custom-dark rounded-4 border-0 shadow-sm overflow-hidden project-card">
                  <div className="project-image-wrapper">
                    <Card.Img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                  </div>
                  <Card.Body>
                    <small className=" opacity-75 d-block text-light mb-1">
                      {project.category} • {project.date}
                    </small>
                    <Card.Title className="fs-5 text-light">
                      {project.title}
                    </Card.Title>
                    <Card.Text className=" opacity-75 text-light small">
                      {project.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Project;
