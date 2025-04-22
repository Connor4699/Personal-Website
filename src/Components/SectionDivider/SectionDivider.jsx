import React from 'react'
import './SectionDivider.css'

const SectionDivider = ({ id, label }) => (
  <div id={id} className="section-divider">
    <hr className="bottom-line" />
    <div className="section-heading">
      <h2 className="section-label">{label}</h2>
    </div>
  </div>
)

export default SectionDivider
