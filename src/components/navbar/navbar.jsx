import React, { useState } from "react";
import NavBarLink from "./NavBarLink";
import { FaBars } from "react-icons/fa";

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between px-6 py-2 mb-3 bg-slate-800 font-mono">
        {/* <div className="container px-4 mx-auto flex flex-wrap items-center justify-between"> */}
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#About"
            >
              Atishay Jain
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars/>
              {/* <i className="fas fa-bars"></i> */}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <NavBarLink section="About" />
              <NavBarLink section="Education" />
              <NavBarLink section="Experience" />
              <NavBarLink section="Research" />
              <NavBarLink section="Projects" />
              <NavBarLink section="Skills" />
              <NavBarLink section="Contact Me" />
            </ul>
          </div>
        {/* </div> */}
      </nav>
    </>
  );
}

export default NavBar;
