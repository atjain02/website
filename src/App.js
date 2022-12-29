import React from "react";
import {
  NavBar,
  About,
  Education,
  Experience,
  Skills,
  Projects,
  ContactMe,
  Research,
} from "./components";

import Expandable from "./components/Expandable";

import "./App.css";

const App = () => (
  <div className="App font-sans bg-slate-100 pb-1">
    <NavBar />
    <About />
    {/* <div className="flex flex-col"> */}
    <Education flipped="0" />
    <Experience flipped="1" />

    <Expandable flipped="0" initial={true}>
      {(flipped, expanded, ExpandCollapseIcon) => (
        <Research
          flipped={flipped}
          expanded={expanded}
          ExpandCollapseIcon={ExpandCollapseIcon}
        />
      )}
    </Expandable>

    <Expandable flipped="1" initial={true}>
      {(flipped, expanded, ExpandCollapseIcon) => (
        <Projects
          flipped={flipped}
          expanded={expanded}
          ExpandCollapseIcon={ExpandCollapseIcon}
        />
      )}
    </Expandable>

    <Skills flipped="0" />
    <ContactMe flipped="1" />
    {/* </div> */}
  </div>
);

export default App;
