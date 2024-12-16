import React from 'react'
import './index.css'
import MoonIcon from '../../assets/images/moon_icon.svg'

function Home() {
  return (
    <div className='containers'>
      <div className="logo">
        <h3>Where in the world?</h3>
        <div className="right">
            <img src={MoonIcon} alt="" />
            <h4>Dark Mode</h4>
        </div>
      </div>
    </div>
  )
}

export default Home
