import React from 'react'
import './index.css'
import MoonIcon from '../../assets/images/moon_icon.svg'
import SearchIcon from '../../assets/images/search_icon.svg'
import GermanyPicture from '../../assets/images/germany-picture.jpg'
import UsaPicture from '../../assets/images/usa_picture.jpg'
import BrazilPicture from '../../assets/images/brazil_picture.jpg'
import IcelandPicture from '../../assets/images/iceland_picture.jpg'
import AfganistanPicture from '../../assets/images/afganiston_picture.jpg'
import AlandPicture from '../../assets/images/alandPicture_picture.jpg'
import Albania from '../../assets/images/albarra_picture.jpg'
import Algeria from '../../assets/images/algeria_picture.jpg'

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

      <div className="language">
        <label htmlFor="search">
            <img src={SearchIcon} alt="" />
            <input id='search' type="text" placeholder='Search for a country' />
        </label>

        <select name="" id="">
            <option value="English">English</option>
            <option value="Uzbek">Uzbek</option>
            <option value="Russia">Russia</option>
        </select>
      </div>

      <div className="cards">
        <div className="card">

        </div>
      </div>
    </div>
  )
}

export default Home
