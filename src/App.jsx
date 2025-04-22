import React, { useRef } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import SectionDivider from './Components/SectionDivider/SectionDivider'
import About from './Components/About/About'
import Resume from './Components/Resume/Resume'
import Contact from './Components/Contact/Contact'

function App() {
  const portfolioRef = useRef(null)
  const scrollToPortfolio = () =>
    portfolioRef.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <Navbar onPortfolioClick={scrollToPortfolio} />
      <Hero portfolioRef={portfolioRef} />

      <SectionDivider id="about" label="About Me" />
      <About />

      <SectionDivider id="resume" label="Resume" />
      <Resume />

      <SectionDivider id="contact" label="Contact" />
      <Contact />
    </>
  )
}

export default App
