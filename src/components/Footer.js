import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import "../styles/Footer.css";
import FavoriteIcon from '@mui/icons-material/Favorite';


function Footer() {
  return (
    <div className='footer'>
         <section className='subscribe'>
        <p className='sub-heading'>
        Join the Love My Skin newsletter to receive our recommended products for healthy skin!</p>
        <div className='input-area'>
            <form id="subForm" method="POST">
                <input
                className='sub-input'
                type="email"
                name="email"
                placeholder='Your Email'
                />
                <button>Subscribe</button>
            </form>
        </div>
  </section> 
        <div className='socialMedia'>
            <InstagramIcon style={{color:'whitesmoke', margin: 20, fontSize: 50, cursor: 'pointer', }} />
            <TwitterIcon style={{color:'whitesmoke', margin: 20, fontSize: 50, cursor: 'pointer'}} />
            <FacebookIcon style={{color:'whitesmoke', margin: 20, fontSize: 50, cursor: 'pointer'}} />
        </div>
        <p> &copy; 2022 LoveMySkin.com</p>
    </div>
  );
}

export default Footer;