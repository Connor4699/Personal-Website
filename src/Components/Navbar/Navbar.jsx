import React from 'react'
import './Navbar.css'

const Navbar = ({ onPortfolioClick }) => {
  return (
    <nav className='container navbar'>
      <button className='logo-btn' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Connor Zhou
      </button>
      <ul>
        <li><a className='btn' href="#portfolio">Portfolio</a></li>

        <li><a className='btn' href="#about">About me</a></li>


        <li><a className='btn' href="#resume">Resume</a></li>


        <li><a className='btn' href="#contact">Contact</a></li>
        </ul>

    </nav>
  )
}

export default Navbar