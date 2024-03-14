import { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Construct the email body with form data
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nDescription: ${formData.description}`;
    // Construct the mailto link
    const mailtoLink = `mailto:vlad.puentes@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(
      emailBody
    )}`;
    // Open the mail client with the mailto link
    window.location.href = mailtoLink;
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="description">Description:</label>
        <br />
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>
        <br />

        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
