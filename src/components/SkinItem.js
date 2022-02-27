import React from 'react'


function SkinItem({ image, skin, description, }) {
  return (
    
    <div className='skinItem'>
      
        <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1>{skin}</h1>
            <p>{description}</p>
          
        </div>
        
  );
}

export default SkinItem;