//User profile page

import React, { useState } from 'react';



import './Profile.css';


export default function Profile() {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [followers, setFollowers] = useState('');
  const [favorites, setFavorites] = useState('');

  //return user profile info, create a form to edit that info.

  return (
    <div>
      <div className="profile-header">
        <div className="profile-image">
          <img src={image} alt="profile" />
        </div>
        <div className="profile-info">
          <h1>{name}</h1>
          <h3>{about}</h3>
          <h4>{followers}</h4>
          <h4>{favorites}</h4>
        </div>
      </div>
      <div className="profile-body">
        <div className="profile-form">
          <form>
            <input type="file" value={image} onChange={(e) => setImage(e.target.value)} placeholder="image" />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="name" />
            <input type="text" value={about} onChange={(e) => setAbout(e.target.value)} placeholder="about" />
            <input type="text" value={followers} onChange={(e) => setFollowers(e.target.value)} placeholder="followers" />
            <input type="text" value={favorites} onChange={(e) => setFavorites(e.target.value)} placeholder="favorites" />
            <button>submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}




