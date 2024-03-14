// import { useState } from "react";
import vladphoto from "../../img/vlad-picture.jpeg";
import "./About.css";
import Nav from "../../../components/nav/Nav";
import Accordeon from "../../../components/accordeon/Accordeon";
import Footer from "../../../components/footer/Footer";
// import { useName } from "../../../../Context/Name.Context";

function About() {
  // const [count, setCount] = useState(0);
  // const { nameState } = useName();

  return (
    <>
      <Nav />
      <div>
        <img src={vladphoto} className="cv-photo" alt="CV Photo" />
      </div>
      <div>
        <h1 className="about-title">Vlad Beltran</h1>
        {/* <div className="card">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
      </div> */}
        <p className="description-about">
          I'm a <span className="highlight-1">Front-End Developer</span>{" "}
          proficient and goal focused, modular web design, object-oriented,
          mastery of CSS, Javascript, UI builder, management of MySQL databases.
          With a{" "}
          <span className="highlight-2">background in graphic design</span> and{" "}
          <span className="highlight-3">
            passion for learning, technology and innovation,
          </span>{" "}
          Problem solving mindset.
        </p>
      </div>
      <section className="tech-stack">
        <h3 className="skills-title">Skills</h3>
        <Accordeon />

        <p className="description-about-2">
          I am dedicated to continual improvement in the landscape of{" "}
          <span className="highlight-4">Frontend Development.</span> <br />
          My skill set encompasses:{" "}
          <span className="highlight-5">
            Agile Methodologies, UI/UX Principles, Cross-Browser Compatibility,
            and Performance Optimization.
          </span>
        </p>
      </section>
      <Footer />
    </>
  );
}

export default About;
