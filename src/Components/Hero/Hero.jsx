import React from 'react'
import './Hero.css'
import gradPhoto from '../../assets/grad-photo.png'

const Hero = ({ portfolioRef }) => {
  return (
    <>
      <div className='hero'>
        <div className='hero-text'>
          <p>
          Hi there I'm Connor! Growing up, I’ve always loved designing and building things. My passion led me to study Mechatronics Engineering at the University of Waterloo, and through years in the competitive robotics community, I’ve developed strong skills in CAD, programming, and electronics.
          </p>
        </div>
        <img className='profile-pic' src={gradPhoto} alt="Connor's Graduation" />
      </div>

      <div ref={portfolioRef} id="portfolio" className="hero-divider">
        <hr className="bottom-line" />
        <div className="portfolio-heading">
          <h2 className="section-label">Portfolio</h2>
        </div>
      </div>
    </>
  )
}

export default Hero