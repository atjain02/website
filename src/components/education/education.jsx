import React from "react";
import ExpandCollapseIcon from "../ExpandCollapseIcon";
import { GiBookshelf } from "react-icons/gi"

function Education({ flipped }) {
  const [expanded, setExpanded] = React.useState(false);

  function toggleExpanded() {
    setExpanded(!expanded);
  }

  const courses =
    "Data Structures/Algorithms, Object Oriented Programming, Operating Systems & Networks, Machine Learning, Probability & Statistics, Computer Organization/Memory, Combinatorics, Linear Algebra, Discrete Math";
  const coursesArr = courses.split(", ");

  const orgs =
    "Trading Club, Investments Committee, Big Data Big Impact, Seek Discomfort";
  const orgsArr = orgs.split(", ");

  return (
    <div id="Education" className="section clickable group" onClick={toggleExpanded}>
      <div className={`sectionLabel order-${flipped}`}>
        <GiBookshelf className="labelIcon"/>
        <a>Education</a>
      </div>
      <div className="sectionContent">
        <ul className="space-y-4 p-2">
          <li className="flex flex-row justify-between">
            <a className="textLabel">Georgia Institute of Technology</a>
            <a className="textContent">Bachelor's of Computer Science</a>
          </li>
          <li className="flex flex-row justify-between">
            <a className="textLabel">Concentrations:</a>
            <a className="textContent">Artificial Intelligence & Systems and Architecture</a>
          </li>
          <li className="flex flex-row justify-between">
            <a className="textLabel">GPA:</a> <a className="textContent">4.0 out of 4.0</a>
          </li>

          <li className="flex flex-row justify-between flex-nowrap">
            <a className="textLabel">Organizations:</a>
            <div className={(expanded ? "hidden " : "") + "basis-3/4"}>
              <p className="textContent text-right ml-4">{orgs}</p>
            </div>
            <ul className={expanded ? "textContent" : "hidden"}>
              {orgsArr.map((org) => {
                return <li>{org}</li>;
              })}
            </ul>
          </li>

          <li className="flex flex-row justify-between flex-nowrap">
            <a className="textLabel">Relevant Coursework:</a>
            <div className={(expanded ? "hidden " : "") + "basis-3/4"}>
              <p className="textContent text-right ml-4">{courses}</p>
            </div>
            <ul className={expanded ? "textContent" : "hidden"}>
              {coursesArr.map((course) => {
                return <li>{course}</li>;
              })}
            </ul>
          </li>

          <ExpandCollapseIcon expanded={expanded} flipped={flipped} />
        </ul>
      </div>
    </div>
  );
}

export default Education;
