import React from 'react';
import Portada from './components/Portada';
import About from './components/About';
import Skills from './components/Skills';
import Exp from './components/Exp';
import Edu from './components/Edu';
import Jobs from './components/Jobs';
import Contact from './components/Contact';
import Media from './components/Media';

import './index.css';


function App() {
  return (
    <div className= "cuerpo">
      <Portada />
      <About />
      <Skills />
      <Exp />
      <Edu />
      <Jobs />
      <Contact />
      <Media />
    </div>
  );
}

export default App;
