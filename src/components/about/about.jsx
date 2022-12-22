import React from "react";
import "./about.css";
import headshotNoBack from "../../assets/HeadshotBackRemoved.png";

function about() {
  return (

    <div id="About" className="flex flex-row items-center object-center justify-between m-4 p-4 pb-8 px-24 border-dashed border-2 rounded-2xl">
      <div className="text-center">
        <a className='text-xl'>I'm </a>
        <a className="text-4xl tracking-wider text-center hover:tracking-widest">
          Atishay Jain
        </a>
        <a>,</a>
        <div>
          <a>a </a>
          <a className="text-2xl tracking-wide text-center hover:tracking-wider">Computer Science</a>
          <a> major at </a>
          <a className="text-2xl tracking-wide text-center hover:tracking-wider">Georgia Tech</a>
          <a>.</a>
        </div>
        <div>
          Whether its Full-Stack Software Engineering, Machine Learning
          research, or Finance, I'm always looking to
        </div>
        <div>
          <a className="text-3xl tracking-tight text-center hover:tracking-widest">Learn </a>
          <a> , </a>
          <a className="text-3xl tracking-tight text-center hover:tracking-widest">Innovate </a>
          <a> , </a>
          <a className="text-3xl tracking-tight text-center hover:tracking-widest">Grow</a>
        </div>
      </div>
      <img
        src={headshotNoBack}
        alt="Atishay Jain"
        className='flex-initial max-w-xs'
      ></img>
    </div>
  );
}

export default about;
