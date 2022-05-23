import React from 'react'
import dev from './images/jane.png';

function About() {
  return (
    <div className="About-page">
        <h1>Get Inspired with the journey so far</h1>
        <div className="note">
        The Journey started February 2022 with reading and yet no idea of how to start with the practical.
        Yea, she is a newbie to react but not with HTML,CSS & JS. Only to see reactjs as a Strange land.
        With the desire to learn, Jane opted in for SideHusle React Class 4.0 but yet couldn't get anything out of it. The group chat was always annoying seeing people building project and you seem left behind.
        SideHustle cohort 5.0 commenced April and i decided to opt in again for Reactjs along one more course.
        This time the girl has determined never to give up or feel intimidated but rather seek guidance from those who know road. It started again and i was lost as usual, already familiar with basics and few Hooks and function,still no idea of getting started building a website with Reactjs. Jane started chatting colleagues up for help, luckily first captone was grouped and my group member shared Github link to the project code. I downloaded it and started studying each line (esp unknown Libraries) and gradually writing my code with the guide from the codes, white asking an online colleague how to decode error flagged.Now we are in week5 of the Cohort and i'm just getting week2's work done. This time i ignore group chat intimidation and criticism but wih a mindset of getting something even little project out of this cohort as we are drawing to its End. I own my React start up to SideHustle and looking forward to building more standard website next. SORRY FOR DIVERTING FROM RESTAURANT CONTENTS, I no sell food bikonu  
        </div>
           <div className='janeimg'><img src={dev} alt='' /></div>
    </div>
  )
}

export default About