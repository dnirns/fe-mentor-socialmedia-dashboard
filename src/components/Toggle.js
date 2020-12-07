import React, { useState } from 'react'

const Toggle = ({ handleToggle }) => {
  return (
    <div className='toggle-container'>
      <h5 className='toggle-text'>Dark Mode</h5>
      <label className='switch'>
        <input type='checkbox' onClick={handleToggle} />
        <div className='slider round' />
      </label>
    </div>
  )
}

export default Toggle
