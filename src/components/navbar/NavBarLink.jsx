import React from "react";

function NavBarLink(props) {
  function scrollTo() {
    var element = document.getElementById(props.section);
    element.scrollIntoView({behavior:"smooth", block: "center", inline:"nearest"});
  }

  return (
    <li className="nav-item">
      <a
        className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75 hover:cursor-pointer"
        // href={`#${props.section}`}
        onClick={scrollTo}
      >
        {/* <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i> */}
        <span className="ml-2">{props.section}</span>
      </a>
    </li>
  );
}

export default NavBarLink;
