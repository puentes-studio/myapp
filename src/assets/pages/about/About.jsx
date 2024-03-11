// import { useState } from "react";
import vladphoto from "../../../assets/vlad-picture.jpeg";
import "./About.css";
import Nav from "../../../components/nav/Nav";
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
          proficient and goal focused, dedicated to crafting immersive user
          experiences. With a{" "}
          <span className="highlight-2">background in graphic design</span> and{" "}
          <span className="highlight-3">
            passion for learning, technology and innovation,
          </span>{" "}
          I bring a blend of creativity and technical expertise to every
          project.
        </p>
      </div>
      <section className="tech-stack">
        <h3>Technology stack</h3>
        <p>React, Node.js, Git, SQL, C#, ES6, HTML, CSS, Adobe, Figma.</p>
      </section>
    </>
  );
}

export default About;
