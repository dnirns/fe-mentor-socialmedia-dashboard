import React from 'react'
import Totals from './components/Totals'
import Overview from './components/Overview'

import twitter from './images/icon-twitter.svg'
import facebook from './images/icon-facebook.svg'
import instagram from './images/icon-instagram.svg'
import youtube from './images/icon-youtube.svg'

const App = () => {
  return (
    <>
      <div className='container'>
        <div className='toggle'>
          <button>Dark Mode</button>
        </div>
        <div className='heading'>
          <h1>Social Media Dashboard</h1>
          <h5 className='sub-heading'>Total Followers: 23,004</h5>
        </div>
        <div className='grid-container'>
          <Totals
            logo={facebook}
            user='@nathanf'
            total='1987'
            newToday='12'
            type='Followers'
          />
          <Totals
            logo={twitter}
            user='@nathanf'
            total='1044'
            newToday='99'
            type='Followers'
          />
          <Totals
            logo={instagram}
            user='@realnathanf'
            total='11k'
            newToday='1099'
            type='Followers'
          />
          <Totals
            logo={youtube}
            user='Nathan F.'
            total='8239'
            newToday='144'
            type='Subscribers'
          />
        </div>

        <div className='heading'>
          <h2>Overview - Today</h2>
        </div>

        <div className='grid-container'>
          <Overview
            type='Page Views'
            number='87'
            logo={facebook}
            percentage='3'
          />
          <Overview type='Likes' number='52' logo={facebook} percentage='2' />
          <Overview
            type='Likes'
            number='5462'
            logo={instagram}
            percentage='3'
          />
          <Overview
            type='Retweets'
            number='52k'
            logo={instagram}
            percentage='1375'
          />
          <Overview
            type='Retweets'
            number='117'
            logo={twitter}
            percentage='303'
          />

          <Overview type='Likes' number='507' logo={twitter} percentage='553' />
          <Overview type='Likes' number='107' logo={youtube} percentage='19' />
          <Overview
            type='Total Views'
            number='1407'
            logo={youtube}
            percentage='12'
          />
        </div>
      </div>

      <footer>
        <div className='attribution'>
          Challenge by
          <a href='https://www.frontendmentor.io?ref=challenge'>
            Frontend Mentor
          </a>
          . Coded by <a href='#'>Daniel Irons</a>.
        </div>
      </footer>
    </>
  )
}

export default App
