import React from "react";

function NavBarLink(props) {
  return (
    <li className="nav-item">
      <a
        className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75"
        href={`#${props.section}`}
      >
        {/* <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i> */}
        <span className="ml-2">{props.section}</span>
      </a>
    </li>
  );
}

export default NavBarLink;
