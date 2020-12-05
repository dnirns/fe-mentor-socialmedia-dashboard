import React from 'react'

const Overview = ({ type, number, logo, percentage }) => {
  return (
    <>
      <div className='grid-item'>
        <img src={logo} />
        <h4>{type}</h4>
        <h2>{number}</h2>
        <p>{percentage}%</p>
      </div>
    </>
  )
}

export default Overview
