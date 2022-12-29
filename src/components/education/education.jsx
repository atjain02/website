import React from "react";
import ExpandCollapseIcon from "../ExpandCollapseIcon";

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
      <div className={`sectionLabel order-${flipped}`}>Education {flipped}</div>
      <div className="sectionContent">
        <ul className="space-y-4 p-2">
          <li className="flex flex-row justify-between">
            <a className="font-extrabold">Georgia Institute of Technology:</a>{" "}
            <a>Bachelor's of Computer Science</a>
          </li>
          <li className="flex flex-row justify-between">
            <a className="font-semibold">Concentrations:</a>{" "}
            <a>Artificial Intelligence & Systems and Architecture</a>
          </li>
          <li className="flex flex-row justify-between">
            <a className="font-semibold">GPA:</a> <a>4.0 out of 4.0</a>
          </li>

          <li className="flex flex-row justify-between flex-nowrap">
            <a className="font-semibold">Organizations:</a>
            <div className={(expanded ? "hidden " : "") + "basis-3/4"}>
              <p className=" text-right">{orgs}</p>
            </div>
            <ul className={expanded ? "" : "hidden"}>
              {orgsArr.map((org) => {
                return <li>{org}</li>;
              })}
            </ul>
          </li>

          <li className="flex flex-row justify-between flex-nowrap">
            <a className="font-semibold">Relevant Coursework:</a>
            <div className={(expanded ? "hidden " : "") + "basis-3/4"}>
              <p className=" text-right">{courses}</p>
            </div>
            <ul className={expanded ? "" : "hidden"}>
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
