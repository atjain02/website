import React from 'react';
import { NavBar, About, Education, Experience, Skills } from './components'
import './App.css'

const App = () => (
  <div className="App">
    <NavBar />
    <About />
    <Education />
    <Experience />
    <Skills />
    Hello this is Atishay Jain's website!
  </div>
);

export default App;