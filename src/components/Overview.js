import React from 'react'

const Overview = ({ type, number, logo, percentage, styleClass }) => {
  return (
    <>
      <div className='grid-item'>
        <img src={logo} />
        <h4>{type}</h4>
        <h1>{number}</h1>
        <p>{percentage}%</p>
      </div>
    </>
  )
}

export default Overview
