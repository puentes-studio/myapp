import "./Contact.css";
import Nav from "../../../components/nav/Nav";
import Footer from "../../../components/footer/Footer";
import ContactForm from "../../../components/contactForm/ContactForm";
import PhoneLink from "../../../components/phoneLink/PhoneLink";
// import { useName } from "../../../../Context/Name.Context";

function Contact() {
  // const { nameState } = useName();

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
        <ContactForm />
        <PhoneLink />
      </div>

      <Footer />
    </>
  );
}

export default Contact;
