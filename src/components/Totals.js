import React from 'react'

const TotalFollowers = ({ logo, user, total, newToday, type }) => {
  return (
    <div className='grid-item'>
      <img src={logo} alt='sociallogo' />
      <h6>{user}</h6>
      <h2>{total}</h2>
      <p> {type}</p>
      <p>{newToday} Today</p>
    </div>
  )
}

export default TotalFollowers
