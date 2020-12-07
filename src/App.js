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
      <div className='header-backdrop' />
      <div className='container'>
        <div className='heading'>
          <div className='toggle'>
            <button>Dark Mode</button>
          </div>
          <h2>Social Media Dashboard</h2>
          <h5 className='sub-heading'>Total Followers: 23,004</h5>
        </div>
        <div className='divider' />
        <div className='grid-container'>
          <Totals
            logo={facebook}
            user='@nathanf'
            total='1987'
            newToday='12'
            type='FOLLOWERS'
            className='facebook'
            style='facebook'
            change='+'
          />
          <Totals
            logo={twitter}
            user='@nathanf'
            total='1044'
            newToday='99'
            type='FOLLOWERS'
            style='twitter'
            change='+'
          />
          <Totals
            logo={instagram}
            user='@realnathanf'
            total='11k'
            newToday='1099'
            type='FOLLOWERS'
            style='instagram'
            change='+'
          />
          <Totals
            logo={youtube}
            user='Nathan F.'
            total='8239'
            newToday='144'
            type='SUBSCRIBERS'
            style='youtube'
            change='-'
          />
        </div>

        <div className='heading'>
          <h3>Overview - Today</h3>
        </div>

        <div className='grid-container'>
          <Overview
            type='Page Views'
            number='87'
            logo={facebook}
            percentage='3'
            change='+'
          />
          <Overview
            type='Likes'
            number='52'
            logo={facebook}
            percentage='2'
            change='-'
          />
          <Overview
            type='Likes'
            number='5462'
            logo={instagram}
            percentage='3'
            change='+'
          />
          <Overview
            type='Profile Views'
            number='52k'
            logo={instagram}
            percentage='1375'
            change='+'
          />
          <Overview
            type='Retweets'
            number='117'
            logo={twitter}
            percentage='303'
            change='+'
          />

          <Overview
            type='Likes'
            number='507'
            logo={twitter}
            percentage='553'
            change='+'
          />
          <Overview
            type='Likes'
            number='107'
            logo={youtube}
            percentage='19'
            change='-'
          />
          <Overview
            type='Total Views'
            number='1407'
            logo={youtube}
            percentage='12'
            change='-'
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
