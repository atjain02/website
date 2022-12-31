import React from "react";
import headshotNoBack from "../../assets/HeadshotBackRemoved.png";

function about() {
  return (
    <div
      id="About"
      className="section p-4 items-center dark:bg-gradient-to-b flex flex-row justify-around"
    >
      <div className="text-center text-xl basis-11/12 shrink">
        <a className="">I'm </a>
        <a className="text-5xl tracking-wider text-center hover:tracking-widest transition-all">
          Atishay Jain
        </a>
        <a>,</a>
        <div>
          <a>a </a>
          <a className="text-4xl tracking-wide text-center hover:tracking-wider transition-all">
            Computer Science
          </a>
          <a> major at </a>
          <a className="text-4xl tracking-wide text-center hover:tracking-wider transition-all">
            Georgia Tech
          </a>
          <a>.</a>
        </div>
        <div>
          Whether its Full-Stack Software Engineering, Machine Learning
          research, or Finance, I'm always looking to
        </div>
        <div>
          <a className="text-4xl tracking-tight text-center hover:tracking-widest transition-all">
            Learn
          </a>
          <a> , </a>
          <a className="text-4xl tracking-tight text-center hover:tracking-widest transition-all">
            Innovate
          </a>
          <a> , </a>
          <a className="text-4xl tracking-tight text-center hover:tracking-widest transition-all">
            Grow
          </a>
        </div>
      </div>
      <img
        src={headshotNoBack}
        alt="Atishay Jain"
        className="shrink basis-1/12 rounded-3xl"
      ></img>
    </div>
  );
}

export default about;
