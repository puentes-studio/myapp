import "./Contact.css";
import Nav from "../../../components/nav/Nav";
import Footer from "../../../components/footer/Footer";
import ContactForm from "../../../components/contactForm/ContactForm";
import PhoneLink from "../../../components/phoneLink/PhoneLink";
import contactImg from "../../img/desktop-illustration.png";
// import { useName } from "../../../../Context/Name.Context";

function Contact() {
  // const { nameState } = useName();

  return (
    <>
      <Nav />
      <div className="contact-header">
        {/* <h3 className="form-title">Contact me, {nameState.name}!</h3> */}
        <img
          src={contactImg}
          className="contact-photo"
          alt="Home illustration"
        />
      </div>

      <div className="form-container">
        <p className="from-description">
          Fill the form or just send an email to vladimir.puentesb@gmail.com
        </p>
        <div className="form-phone-container">
          <ContactForm className="contact-padding" />
          <PhoneLink />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
