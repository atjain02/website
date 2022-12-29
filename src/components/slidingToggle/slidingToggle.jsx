import React from "react";
import "./slidingToggle.css";

function SlidingToggle({ darkToggle, setDarkToggle }) {
  return (
    <div className="flex flex-row">
      <p className="font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
        Dark Mode
      </p>
      <label class="toggleDarkBtn align-middle">
        <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
        <span class="slideBtnTg round"></span>
      </label>
    </div>
  );
}

export default SlidingToggle;
