import React from 'react';
import { NavBar, About, Education, Experience, Skills, Projects, ContactMe } from './components'
import './App.css'

const App = () => (
  <div className="App font-sans bg-slate-100 pb-1">
    <NavBar />
    <About />
    <Education />
    <Experience />
    <Projects />
    <Skills />
    <ContactMe />
  </div>
);

export default App;