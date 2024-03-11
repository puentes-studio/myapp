import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import mobileIllustration from '../../../assets/mobile-illustration.png';
import './Home.css';
// import Nav from '../../../components/nav/Nav';
import { useName } from '../../../../Context/Name.Context';




function Home() {
  const [count, setCount] = useState(0);
  const { nameState } = useName()

  return (
    <>
      {/* <Nav /> */}
      <div className='home-container'>
        <a href="#" target="_blank">
          <img src={mobileIllustration} className="home-photo" alt="Home illustration" />
        </a>
      </div>
      <h1 className='name'>Hello, {nameState.name}!</h1>
      {/* <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div> */}
      <p className="home-description">
        I'm Vlad Beltran and I want to introduce my self the best way possible, showing to you some of my skills and knowledge so you can have a good impression and user experience.
      </p>
      <NavLink className="go-button" to="/about">Go!</NavLink>
    </>
  );
}

export default Home;

