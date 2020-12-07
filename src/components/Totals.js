import React from 'react'

const TotalFollowers = ({
  logo,
  user,
  total,
  newToday,
  type,
  style,
  change,
  theme
}) => {
  return (
    <div className={`grid-item`}>
      <div className={`card-border-top ${style}`} />
      <div className={`card-bg ${theme}`}>
        <div className='username'>
          <img src={logo} alt='sociallogo' />
          <p>{user}</p>
        </div>
        <h1>{total}</h1>
        <p className='followers-text'> {type}</p>

        <div className='change-container'>
          <span className={change === '+' ? 'plus-arrow' : 'minus-arrow'}>
            {' '}
          </span>
          <h5
            style={{
              color:
                change === '+' ? 'hsl(163, 72%, 41%)' : 'hsl(356, 69%, 56%)',
            }}
          >
            &nbsp;{newToday} Today
          </h5>
        </div>
      </div>
    </div>
  )
}

export default TotalFollowers
