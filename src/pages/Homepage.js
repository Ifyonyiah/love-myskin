import React from 'react'
import { Link } from 'react-router-dom';
import skin2 from '../assets/skin2.jpg';
import "../styles/Homepage.css";
import FavoriteIcon from '@mui/icons-material/Favorite';


function Homepage() {
  return (
    <div className='home' style={{backgroundImage: `url(${skin2})`}}>
        <div className='headerContainer'>
        <h1 style={{ fontFamily: 'Yeseva One',}}> Love My Skin <FavoriteIcon className='icon0' /> </h1>
        <p> - "Beauty Is Being Comfortable In Your Own Skin"</p>
        <Link to="/skintypes">
          <button> Start Your Skin Journey Now </button>
        </Link>
        </div>
        </div>
  );
}

export default Homepage;