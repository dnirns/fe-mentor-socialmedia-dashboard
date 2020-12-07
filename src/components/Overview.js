import React from 'react'

const Overview = ({ type, number, logo, percentage, style, change }) => {
  return (
    <div className='grid-item overview'>
      <div className='overview-grid'>
        <h5>{type}</h5>
        <img src={logo} />
      </div>
      <div className='overview-grid'>
        <h2>{number}</h2>

        <div className='change-container'>
          <span className={change === '+' ? 'plus-arrow' : 'minus-arrow'} />
          <h5
            style={{
              color:
                change === '+' ? 'hsl(163, 72%, 41%)' : 'hsl(356, 69%, 56%)',
            }}
          >
            &nbsp;{percentage}%
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Overview
