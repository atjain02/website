import React from "react";
import "./slidingToggle.css";
import { MdOutlineArrowBackIos } from "react-icons/md"

function SlidingToggle({ darkToggle, setDarkToggle }) {
  return (
    <div className="flex flex-row items-center space-x-4">
      <label class="toggleDarkBtn align-middle">
        <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
        <span class="slideBtnTg round"></span>
      </label>
      <MdOutlineArrowBackIos class="fill-white h-4 w-4"/>
      <p className="font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white ">
        Dark Mode!
      </p>
    </div>
  );
}

export default SlidingToggle;
