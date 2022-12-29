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
  SlidingToggle,
} from "./components";

import Expandable from "./components/Expandable";

import "./App.css";

const App = () => {
  const [darkToggle, setDarkToggle] = React.useState(true);

  return (
    <div className={`App ${darkToggle && "dark"}`}>
      <div className="font-sans bg-slate-100 pb-1 dark:bg-slate-800">
        
        <NavBar>
          <SlidingToggle
            darkToggle={darkToggle}
            setDarkToggle={setDarkToggle}
          />
        </NavBar>
        <About />
        {/* <div className="flex flex-col"> */}
        <Education flipped="0" />

        <Expandable flipped="1" initial={true}>
          {(flipped, expanded, ExpandCollapseIcon) => (
            <Experience
              flipped={flipped}
              expanded={expanded}
              ExpandCollapseIcon={ExpandCollapseIcon}
            />
          )}
        </Expandable>

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
    </div>
  );
};

export default App;
