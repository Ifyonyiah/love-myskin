import React from 'react'
import skin4 from '../assets/skin4.jpg';
import '../styles/About.css';
function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{ backgroundImage: `url(${skin4})` }}></div>
            <div className='aboutBottom'>
                <h1>About Us</h1>
                    <p>Love My Skin is a skin care platform dedicated to healthy and glowing skin. Taking good care of your skin is important for more than just your appearance. As the largest organ you have, your skin is essential to your general health. If you take care of it, it can help take care of you!
                    </p>
                    </div>
            </div>
        
  );
}

export default About;