import React, { useState } from 'react';
import './Profile.css';

export default function Profile() {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');


  //return user profile info, create a form to edit that info.
  //write a clickHandler function for saving profile information on button "submit"



  return (
    <div>
      <div className="profile-header">
        <div className="profile-image">
          <img src={image} alt="profile" />
        </div>
        <div className="profile-info">
          <h1>{name}</h1>
          <h3>{about}</h3>
          
        </div>
      </div>
      <div className="profile-body">
        <div className="profile-form">
          <form>
            <input type="file" value={image} onChange={(e) => setImage(e.target.value)} placeholder="image" />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="name" />
            <input type="text" value={about} onChange={(e) => setAbout(e.target.value)} placeholder="about" />
            <button>submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}




