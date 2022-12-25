import React from "react";

function education({ flipped }) {
  return (
    <div id="Education" className="section">
      <div className={`sectionLabel order-${flipped}`}>Education</div>
      <div className="sectionContent">
        <ul>
          <li className="font-extrabold">Georiga Institute of Technology</li>
          <li className="flex flex-row justify-between">
            <a className="font-semibold">Concentrations:</a>{" "}
            <a>Artificial Intelligence & Systems and Architecture</a>
          </li>
          <li className="flex flex-row justify-between">
            <a className="font-semibold">GPA:</a> <a>4.0 out of 4.0</a>
          </li>
          <li className="flex flex-row justify-between flex-nowrap">
            <a className="font-semibold">Relevant Coursework:</a>
            <p className='basis-3/4 text-right'>
              Data Structures/Algorithms, Object Oriented Programming, Operating Systems &
              Networks, Probability & Statistics, Computer Organization/Memory,
              Machine Learning, Combinatorics, Linear Algebra, Discrete Math
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default education;
