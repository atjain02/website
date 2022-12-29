import React from "react";
import headshotNoBack from "../../assets/HeadshotBackRemoved.png";

function about() {
  return (
    <div
      id="About"
      className="section p-4 pb-7 px-28 items-center"
    >
      <div className="text-center">
        <a className="text-xl">I'm </a>
        <a className="text-4xl tracking-wider text-center hover:tracking-widest transition-all">
          Atishay Jain
        </a>
        <a>,</a>
        <div>
          <a>a </a>
          <a className="text-2xl tracking-wide text-center hover:tracking-wider transition-all">
            Computer Science
          </a>
          <a> major at </a>
          <a className="text-2xl tracking-wide text-center hover:tracking-wider transition-all">
            Georgia Tech
          </a>
          <a>.</a>
        </div>
        <div>
          Whether its Full-Stack Software Engineering, Machine Learning
          research, or Finance, I'm always looking to
        </div>
        <div>
          <a className="text-3xl tracking-tight text-center hover:tracking-widest transition-all">
            Learn
          </a>
          <a> , </a>
          <a className="text-3xl tracking-tight text-center hover:tracking-widest transition-all">
            Innovate
          </a>
          <a> , </a>
          <a className="text-3xl tracking-tight text-center hover:tracking-widest transition-all">
            Grow
          </a>
        </div>
      </div>
      <img
        src={headshotNoBack}
        alt="Atishay Jain"
        className="flex-initial max-w-xs rounded-3xl"
      ></img>
    </div>
  );
}

export default about;
