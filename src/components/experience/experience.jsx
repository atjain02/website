import React from "react";
import Details from "../Details.jsx";

function Experience({ flipped, expanded, ExpandCollapseIcon }) {
  return (
    <div id="Experience" className="section dark:bg-gradient-to-bl">
      <div className="sectionContent">
      <Details
          title="Software Engineering Intern"
          date="August 2022 - December 2022"
          location="Atlanta, GA"
          org="MintED"
          expanded={expanded}
          content={
            <ul className="list-disc textContent">
              <li>
                Developed a backend API using NodeJS, GraphQL, MongoDB, to support the creation of Ethereum NFTs
              </li>
              <li>
                Used Solidity to write and deploy Ethereum Smart Contracts for a Web3 app to commemorate digital assets
              </li>
            </ul>
          }
        />

        <Details
          title="Software Engineering Intern"
          date="January 2022 - August 2022"
          org="Shardings"
          expanded={expanded}
          content={
            <ul className="list-disc textContent">
              <li>
                Used React-Native, the MERN tech stack, and Google Cloud for
                full-stack website and app development
              </li>
              <li>
                Developed a video conferencing IOS/Android app with chat,
                breakouts, polling, and external service integrations
              </li>
              <li>
                Generated software mockups using Figma and guided technical
                product roadmaps
              </li>
            </ul>
          }
        />
        <Details
          title="Summer Intern"
          date="July 2020 - August 2020"
          org="Axa XL"
          location="Exton, PA"
          expanded={expanded}
          content={
            <ul className="list-disc textContent">
              <li>
                Quantified risks and created pricing models using R, and experienced data modeling, actuarial science, and underwriting
              </li>
            </ul>
          }
        />
        {ExpandCollapseIcon}
      </div>
      <div className={`sectionLabel`}>Experience</div>
    </div>
  );
}

export default Experience;
