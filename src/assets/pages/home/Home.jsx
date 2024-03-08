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

