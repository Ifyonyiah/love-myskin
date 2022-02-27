import React from 'react'
import skin7 from "../assets/skin7.jpg";
import skin8 from "../assets/skin8.jpg";
import skin10 from "../assets/skin10.jpg";
import skin9 from "../assets/skin9.jpg";
import "../styles/Skins.css";




function Skins() {
  return (
    <div className="container">

<div className='sub-container'>
      <div
        className="left"
        style={{ backgroundImage: `url(${skin7})` }}
      ></div>
      <div className="right">
        <h1> Oily Skin?</h1>
        <p>Oily skin happens when your glands produce too much sebum which can lead to a greasy surface, clogged pores, and acne. The causes of oily skin include genetic, environmental, and lifestyle factors.</p>
        <h1>Recommended Products:</h1>      
          <ul>
          <li>Cetaphil Pro-Oil Removing Foam Wash</li>
          <li>AcneFree Witch Hazel Mattifying Toner</li>
          <li>The Ordinary Oil Control Serum</li>
          </ul>
      </div>
</div>

<div className='sub-container'>
      <div
        className="left"
        style={{ backgroundImage: `url(${skin8})` }}
      ></div>
      <div className="right">
      <h1> Dry Skin?</h1>
        <p>Dry skin is when your skin dries out because it doesn't have enough moisture. It isn't usually serious, but it can be irritating. Environmental factors such as humidity and temperature drop can also make your skin drier.</p>
        <h1>Recommended Products:</h1>
        <ul>
        <li>Neutrogena Hydro Boost Gel Mosturizer </li>
        <li>CeraVe’s AM Facial Moisturizing Lotion</li>
        <li>Skinbetter’s Trio Rebalancing Moisture Treatment</li>
          </ul>
      </div>
</div>

<div className='sub-container'>
      <div
        className="left"
        style={{ backgroundImage: `url(${skin10})` }}
      ></div>
      <div className="right">
      <h1>Combination Skin?</h1>
        <p>Typically, the combination skin type is characterized by dry, flaking skin on the cheeks, while excessive oil and shine appears on other areas of the face. Those with combination skin are in a constant battle with their T-Zone.</p>
        <h1>Recommended Products:</h1>
        <ul>
        <li>Ursa Major Fantastic Face Wash</li>
        <li>RéVive Foaming Cleanser and Enriched Hydrating Wash</li>
        <li>Boho Aromatic Natural Balance Face Oil Serum</li>
        </ul>
      </div>
</div>

<div className='sub-container'>
      <div
        className="left"
        style={{ backgroundImage: `url(${skin9})` }}
      ></div>
      <div className="right">
      <h1> Normal Skin?</h1>
        <p>Characteristics of normal skin include a regular texture, no or few imperfections and a soft appearance. Normal skin does not require special care, but that does not mean that you  do not need to take care of it.</p>
        <h1>Recommended Products:</h1>
        <ul>
        <li>Plum Green Tea Alcohol-Free Toner</li>
          <li>Lacto Calamine Oil Balance Lotion</li>
          <li>Avene Very High Protection Sunscreen</li>
          </ul>
      </div>
    </div>
</div>
  );
}

export default Skins;