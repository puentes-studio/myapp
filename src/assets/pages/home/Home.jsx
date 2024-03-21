// import { useState } from "react";
import { NavLink } from "react-router-dom";
import mobileIllustration from "../../../assets/img/mobile-illustration.png";
import "./Home.css";
// import Nav from '../../../components/nav/Nav';
import { useName } from "../../../../Context/Name.Context";

function Home() {
  // const [count, setCount] = useState(0);
  const { nameState } = useName();

  return (
    <>
      {/* <Nav /> */}
      <div className="home-container">
        <img
          src={mobileIllustration}
          className="home-photo"
          alt="Home illustration"
        />
      </div>
      <h1 className="name">Hello, {nameState.name}!</h1>
      {/* <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div> */}
      <p className="home-description">
        I'm Vlad Beltran and I want to introduce my self the best way possible,
        showing to you some of my skills and knowledge so you can have a good
        user experience and impression.
      </p>
      <NavLink className="go-button" to="/about">
        Go!
      </NavLink>
    </>
  );
}

export default Home;
