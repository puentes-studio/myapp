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
        <a href="#" target="_blank">
          <img src={vladphoto} className="cv-photo" alt="CV Photo" />
        </a>
      </div>
      <h1>Vlad Beltran</h1>
      {/* <div className="card">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
      </div> */}
      <p className="read-the-docs">
        I'm a skilled Front-end Developer proficient in React, dedicated to
        crafting immersive user experiences. With a background in graphic design
        and a passion for learning, technology and innovation, I bring a blend
        of creativity and technical expertise to every project."
      </p>
    </>
  );
}

export default About;
