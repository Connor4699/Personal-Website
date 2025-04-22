import React, { useEffect, useRef } from 'react'
import './Resume.css'

const Resume = () => {
  const ref = useRef(null)

  useEffect(() => {
    ref.current?.classList.add('slide-in')
  }, [])

  return (
    <div ref={ref} className="resume-container" id="resume">
      <h2>Resume</h2>

      {/* Remove any <embed> and just provide download */}
      <a href="/Resume.docx" download className="download-btn">
        Download My Resume (DOCX)
      </a>
    </div>
  )
}

export default Resume