import React from "react";
import Details from "../Details.jsx";
import ExpandCollapseIcon from "../ExpandCollapseIcon.jsx";

function Experience({ flipped }) {
  const [expanded, setExpanded] = React.useState(true);

  return (
    <div id="Experience" className="section clickable group" onClick={() => setExpanded(!expanded)}>
      <div className={`sectionLabel order-${flipped}`}>Experience {flipped}</div>
      <div className="sectionContent">
        <Details
          title="Software Engineering Intern"
          date="January 2022 - August 2022"
          org="Shardings"
          expanded={expanded}
          content={
            <ul className="list-disc list-inside">
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
            <ul className="list-disc list-inside">
              <li>
                Quantified risks and created pricing models using R, and experienced data modeling, actuarial science, and underwriting
              </li>
            </ul>
          }
        />

        <ExpandCollapseIcon expanded={expanded} flipped={flipped} />
      </div>
    </div>
  );
}

export default Experience;
