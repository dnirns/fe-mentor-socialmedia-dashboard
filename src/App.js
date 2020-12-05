import React from 'react'
import Totals from './components/Totals'

import twitter from './images/icon-twitter.svg'
import facebook from './images/icon-facebook.svg'
import instagram from './images/icon-instagram.svg'
import youtube from './images/icon-youtube.svg'

const App = () => {
  return (
    <main>
      <div>
        <h2>Social Media Dashboard</h2>
      </div>
      Total Followers: 23,004 Dark Mode
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
      Overview - Today Page Views 87 3% Likes 52 2% Likes 5462 2257% Profile
      Views 52k 1375% Retweets 117 303% Likes 507 553% Likes 107 19% Total Views
      1407 12%
      <footer></footer>
      <div className='attribution'>
        Challenge by
        <a href='https://www.frontendmentor.io?ref=challenge'>
          Frontend Mentor
        </a>
        . Coded by <a href='https://www.dnirns.com'>Daniel Irons</a>.
      </div>
    </main>
  )
}

export default App
