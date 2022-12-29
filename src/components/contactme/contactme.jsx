import React from "react";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import IconDesc from "../IconDesc";

function ContactMe({ flipped }) {
  return (
    <div id="Contact Me" className="section">
      <div className={`sectionLabel order-${flipped}`}>Contact Me</div>
      <div className="sectionContent">
        <div className="flex flex-row justify-between">
          <IconDesc
            href="mailto: ati.jain02@gmail.com"
            icon={<SiMinutemailer className="w-24 h-24" />}
            desc="ati.jain02@gmail.com"
          />

          <IconDesc
            href="https://www.github.com/atjain02"
            icon={<FaGithub className="w-24 h-24" />}
            desc="github.com/atjain02"
          />

          <IconDesc
            href="https://www.linkedin.com/in/atishay-jain123"
            icon={<FaLinkedin className="w-24 h-24" />}
            desc="linkedin.com/in/atishay-jain123"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
