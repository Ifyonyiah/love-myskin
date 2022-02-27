import React from 'react';
import {Data} from '../data/Data';
import SkinItem from '../components/SkinItem';
import '../styles/SkinType.css';
import { Link } from 'react-router-dom';





function Skintypes() {


    return (
    <div className='skinTypes'>
        <h1 className='skinTitle'>What's Your Skin Type?</h1>
        
        
        <Link to="/skins">
            <div className='skinList'>
                {Data.map((skinItem, key) => { 
                    return (<SkinItem
                    key={key}
                    image={skinItem.image}
                    skin={skinItem.skin}
                    description={skinItem.description}
                    />
                    );
                })}
            </div>
      </Link>
        </div>
  );
}

export default Skintypes;