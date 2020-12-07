import React from 'react'

const TotalFollowers = ({ logo, user, total, newToday, type, style }) => {
  return (
    <div className='grid-item'>
      <div className={`card-border-top ${style}`}/>
      <div className='card-bg'>
        <div className='username'>
          <img src={logo} alt='sociallogo'/><p>{user}</p>
        </div>
        <h1>{total}</h1>
        <p> {type}</p>
        <p>{newToday} Today</p>
      </div>
    </div>
  )
}

export default TotalFollowers
