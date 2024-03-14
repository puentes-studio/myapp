import "./Contact.css";
import Nav from "../../../components/nav/Nav";
import Footer from "../../../components/footer/Footer";
// import { useName } from "../../../../Context/Name.Context";
import { useState } from "react";

function Contact() {
  // const [count, setCount] = useState(0);
  // const { nameState } = useName();

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
    // Handle form submission here
    console.log(formData);
  };

  return (
    <>
      <Nav />
      <div className="contact-header">
        {/* <h3 className="form-title">Contact me, {nameState.name}!</h3> */}
        {/* <img
          src={mobileIllustration}
          className="home-photo"
          alt="Home illustration"
        /> */}
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
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

          <button type="submit">Submit</button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
