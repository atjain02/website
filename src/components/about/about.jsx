import React from 'react';
import './about.css';
import headshotNoBack from '../../assets/HeadshotBackRemoved.png';

function about() {
  return (
    <div className='about'>
      <div className='aboutTextContainer'>
        <div id='intro' className='aboutText'>I'm Atishay Jain</div>
        <div id='college' className='aboutText'>A Computer Science major at Georgia Tech</div>
        <div id='description' className='aboutText'>Whether its Full-Stack Software Engineering, Machine Learning research, or Finance, I'm always looking to </div>
        <div id='keywordsContainer'>
          <div id='learn' className='keyword'>Learn</div>
          <div id='innovate' className='keyword'>Innovate</div>
          <div id='grow' className='keyword'>Grow</div>
        </div>
      </div>
      <img src={headshotNoBack} alt='Atishay Jain' className='headshot' height='500'></img>
    </div>
  )
}

export default about