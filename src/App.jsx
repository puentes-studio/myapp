import { Route, Routes } from 'react-router-dom';


import './App.css';

import Splash from './assets/pages/splash/Splash';
import Home from './assets/pages/home/Home';



function App() {
  


  return (
    <>
     <Routes>
        <Route path="/" element={<Splash />}/>
        <Route path="/home" element={<Home />}/>
     </Routes>
    </>
  );
}

export default App;

