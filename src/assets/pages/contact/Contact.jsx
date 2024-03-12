import { useState } from "react";

import "./Contact.css";
import Nav from "../../../components/nav/Nav";
import Footer from "../../../components/footer/Footer";
import { useName } from "../../../../Context/Name.Context";

function Contact() {
  const [count, setCount] = useState(0);
  const { nameState } = useName();

  return (
    <>
      <Nav />
      <main>
        <h1>Hello, {nameState.name}!</h1>
        <div className="card">
          <button onClick={() => setCount(count + 1)}>count is {count}</button>
        </div>
        <p className="read-the-docs">
          I'm Vlad Beltran and I want to show you my CV in the best way, showing
          some of my skills and knowledge so you could have a good user
          experience.
        </p>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
