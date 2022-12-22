import React from 'react';
import { NavBar, About, Education, Experience, Skills } from './components'
import './App.css'

const App = () => (
  <div className="App font-sans">
    <NavBar />
    <About />
    <Education />
    <Experience />
    <Skills />
  </div>
);

export default App;