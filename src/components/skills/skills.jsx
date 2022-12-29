import React from "react";
import {
  FaReact,
  FaJava,
  FaHtml5,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGit,
  FaAws,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiPytorch,
  SiNumpy,
  SiPandas,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";
import IconDesc from "../IconDesc";
import { CPP } from "../../assets/icons";

function Skills({ flipped }) {
  return (
    <div id="Skills" className="section">
      <div className={`sectionLabel order-${flipped}`}>Skills</div>
      <div className="sectionContent">
        <div className="flex flex-col space-y-8">
          <div className="skillsRow group/row">
            <a className="font-semibold text-2xl">Programming Languages:</a>
            <div className="skillsIconsResp">
              <IconDesc icon={<FaJava className="skillsIcon" />} desc="Java" />
              <IconDesc
                icon={<SiJavascript className="skillsIcon" />}
                desc="JavaScript"
              />
              <IconDesc
                icon={<SiTypescript className="skillsIcon" />}
                desc="TypeScript"
              />
              <IconDesc
                icon={<FaPython className="skillsIcon" />}
                desc="Python"
              />
              <IconDesc icon={<CPP className="skillsIcon" />} desc="C/C++" />
              <IconDesc
                icon={<FaHtml5 className="skillsIcon" />}
                desc="HTML/CSS"
              />
            </div>
          </div>

          <div className="skillsRow group/row">
            <a className="font-semibold text-2xl">Frameworks/Libraries:</a>
            <div className="skillsIconsResp">
              <IconDesc
                icon={<FaReact className="skillsIcon" />}
                desc="ReactJs/React Native"
              />
              <IconDesc
                icon={<FaNodeJs className="skillsIcon" />}
                desc="NodeJs"
              />
              <IconDesc
                icon={<SiPytorch className="skillsIcon" />}
                desc="PyTorch"
              />
              <IconDesc
                icon={<SiNumpy className="skillsIcon" />}
                desc="NumPy"
              />
              <IconDesc
                icon={<SiPandas className="skillsIcon" />}
                desc="Pandas"
              />
            </div>
          </div>

          <div className="skillsRow group/row">
            <a className="font-semibold text-2xl">Other:</a>
            <div className="skillsIconsResp">
              <IconDesc
                icon={<SiMongodb className="skillsIcon" />}
                desc="MongoDB"
              />
              <IconDesc
                icon={<FaAws className="skillsIcon" />}
                desc="AWS"
              />
              <IconDesc
                icon={<FaDocker className="skillsIcon" />}
                desc="Docker"
              />
              <IconDesc
                icon={<SiFirebase className="skillsIcon" />}
                desc="Google Firebase"
              />
              <IconDesc icon={<FaGit className="skillsIcon" />} desc="Git" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
