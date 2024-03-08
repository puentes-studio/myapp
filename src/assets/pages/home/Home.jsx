import { useState } from 'react';
import vladphoto from '../assets/vlad-picture.jpeg';
import './App.css';
import Nav from '../../components/nav/Nav';



function Home() {
  const [count, setCount] = useState(0);


  return (
    <>
      <Nav />
      <div>
        <a href="#" target="_blank">
          <img src={vladphoto} className="cv-photo" alt="CV Photo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default Home;

