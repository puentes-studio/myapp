import { useState } from 'react';
import vladphoto from '../../../assets/vlad-picture.jpeg';
import './Home.css';
import Nav from '../../../components/nav/Nav';
import { useName } from '../../../../Context/Name.Context';




function Home() {
  const [count, setCount] = useState(0);
  const { nameState } = useName()

  return (
    <>
      <Nav />
      <div>
        <a href="#" target="_blank">
          <img src={vladphoto} className="cv-photo" alt="CV Photo" />
        </a>
      </div>
      <h1>Hello, {nameState.name}!</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        I'm Vlad Beltran and I want to show you my CV in the best way, showing some of my skills and knowledge so you could have a good user experience.
      </p>
    </>
  );
}

export default Home;

