import React from "react";
import {
  NavBar,
  About,
  Education,
  Experience,
  Skills,
  Projects,
  ContactMe,
  Research
} from "./components";
import "./App.css";

const App = () => (
  <div className="App font-sans bg-slate-100 pb-1">
    <NavBar />
    <About />
    {/* <div className="flex flex-col"> */}
      <Education />
      <Experience flipped="1"/>
      <Research/>
      <Projects flipped="1"/>
      <Skills />
      <ContactMe flipped="1"/>
    {/* </div> */}
  </div>
);

export default App;
