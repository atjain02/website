import React from "react";
import Details from "../Details";

function Projects({ flipped }) {
  return (
    <div id="Projects" className="section">
      <div className={`sectionLabel order-${flipped}`}>Projects</div>
      <div className="sectionContent">
        <Details
          title="Edu-Nav"
          date="October 2020 - Present"
          content={
            <ul className="list-disc list-inside">
              <li>
                Conceived, created, and currently operate Edu-Nav (a web-app)
                that streamlines event-management, navigation, and scheduling in
                schools using Cloud Firestore, ReactJS, and Socket.IO
              </li>
              <li>
                Placed top 10 out of 200+ competitors at the Seton Hall Pirate’s
                Pitch start-up competition
              </li>
            </ul>
          }
        />

        <Details
          title="Heart Disease Detector"
          date="August 2021 - January 2022"
          content={
            <ul className="list-disc list-inside">
              <li>
                Trained classification models to predict the risk of heart
                disease in individuals in varying cities based on health history
              </li>
              <li>
                Cleansed and normalized datasets, and implemented Logistic
                Regression, Random Forest, Naïve Bayes, etc.
              </li>
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default Projects;
