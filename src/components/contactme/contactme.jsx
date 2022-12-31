import React from "react";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import IconDesc from "../IconDesc";
import { AiFillPhone } from "react-icons/ai";

function ContactMe({ flipped }) {
  return (
    <div id="Contact Me" className="section dark:bg-gradient-to-bl">
      <div className="sectionContent">
        <div className="flex flex-row justify-between">
          <IconDesc
            href="mailto: ati.jain02@gmail.com"
            icon={<SiMinutemailer className="w-24 h-24 shrink  " />}
            desc="ati.jain02@gmail.com"
          />

          <IconDesc
            href="https://www.github.com/atjain02"
            icon={<FaGithub className="w-24 h-24 shrink" />}
            desc="github.com/atjain02"
          />

          <IconDesc
            href="https://www.linkedin.com/in/atishay-jain123"
            icon={<FaLinkedin className="w-24 h-24 shrink" />}
            desc="linkedin.com/in/atishay-jain123"
          />
        </div>
      </div>
      <div className={`sectionLabel`}>
        <AiFillPhone className="labelIcon" />
        <a> Contact Me</a>
      </div>
    </div>
  );
}

export default ContactMe;
