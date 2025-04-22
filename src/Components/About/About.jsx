import React from 'react'
import './About.css'
import climbPhoto from '../../assets/gymnastics2.JPG'
import gymPhoto from '../../assets/gymnastics1.JPG'

const About = () => (
  <div className="about container" id="about">

    <div className="about-content">
      <p>
        I’m currently a Mechatronics Engineering student at the University of Waterloo. 
        I’ve been hooked on robotics for as long as I can remember, back in high school I even founded and led my own VEX teams. Nowadays I get to build and compete with Queen’s VEX U team. 
        When I’m not tinkering in the lab, you’ll find me tackling a climbing wall with friends or reminiscing about my time as a competitive gymnast. All of these hands‑on adventures have taught me persistence, teamwork, and a love for turning ideas into reality.
      </p>
      <div className="about-images">
        <img src={climbPhoto} alt="Connor rock climbing" />
        <img src={gymPhoto} alt="Connor in gymnastics" />
      </div>
    </div>
  </div>
)

export default About