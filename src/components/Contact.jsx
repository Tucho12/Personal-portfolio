import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "emailjs-com";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errs.email = "Email is invalid";
      }
    }
    if (!formData.subject.trim()) errs.subject = "Subject is required";
    if (!formData.message.trim()) {
      errs.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message should be at least 10 characters";
    }
    return errs;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .send(
          "service_2chobra2",
          "template_w39dpcq",
          {
            subject: formData.subject,
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
          "QivX-aoQ7cL04-iBI"
        )
        .then(
          (result) => {
            console.log("Email sent:", result.text);
            alert("Message sent!");
            setFormData({ name: "", email: "", subject: "", message: "" });
            setErrors({});
            setSubmitted(true);
          },
          (error) => {
            console.error("Email error:", error.text);
            alert("Failed to send message.");
          }
        );
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  return (
    <div className="main-content mx-auto">
      <div className="text-white mb-4 resume-section">
        <h2 className="section-title">Get In Touch</h2>
        <p>
          Have a project in mind or just want to say hello? Send a message!
        </p>
      </div>

      <form noValidate onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-white">
            Your Name
          </label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label text-white">
            Your Email
          </label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="subject" className="form-label text-white">
            Subject
          </label>
          <input
            type="text"
            className={`form-control ${errors.subject ? "is-invalid" : ""}`}
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Project Inquiry"
          />
          {errors.subject && (
            <div className="invalid-feedback">{errors.subject}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label text-white">
            Your Message
          </label>
          <textarea
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="I'd like to discuss a project..."
          />
          {errors.message && (
            <div className="invalid-feedback">{errors.message}</div>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100 d-flex justify-content-center align-items-center"
        >
          <FaPaperPlane className="me-2" />
          Send Message
        </button>

        {submitted && (
          <div className="alert alert-success mt-3">
            Thank you for contacting us!
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
