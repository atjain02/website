import React from "react";
import {
  FaReact,
  FaJava,
  FaHtml5,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGit,
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

function Skills({ flipped }) {
  return (
    <div id="Skills" className="section">
      <div className={`sectionLabel order-${flipped}`}>Skills</div>
      <div className="sectionContent">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-row justify-between flex-wrap">
            <a className="font-semibold text-2xl">Programming Languages:</a>
            <div className="flex flex-row space-x-4">
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
              <IconDesc desc="C/C++" />
              <IconDesc
                icon={<FaHtml5 className="skillsIcon" />}
                desc="HTML/CSS"
              />
            </div>
          </div>

          <div className="flex flex-row justify-between flex-nowrap">
            <a className="font-semibold">Frameworks/Libraries:</a>
            <div className="flex flex-row space-x-4">
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

          <div className="flex flex-row justify-between flex-nowrap">
            <a className="font-semibold">Other:</a>
            <div className="flex flex-row space-x-4">
              <IconDesc
                icon={<SiMongodb className="skillsIcon" />}
                desc="MongoDB"
              />
              <IconDesc
                icon={<SiFirebase className="skillsIcon" />}
                desc="Google Firebase"
              />
              <IconDesc
                icon={<FaDocker className="skillsIcon" />}
                desc="Docker"
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
