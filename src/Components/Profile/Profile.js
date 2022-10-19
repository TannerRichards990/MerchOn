import React, { useState } from 'react';
import { getProfile } from '../../services/fetch-utils';
import './Profile.css';

export default function Profile() {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    await getProfile(image, name, about);
  };

  //return user profile info, create a form to edit that info.
  //write a clickHandler function for saving profile information on button "submit"

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Profile</h1> 

        <div className="profile-image">
          <img src={image} className="image" />
        </div>

        <div className="profile-info">
          <h1>{name}</h1>
          <h3>{about}</h3>
          
        </div>
      </div>
      <div className="profile-body">
        <div className="profile-form">
          <form>
            <input 
              type="file" 
              onChange={(e) => setImage(e.target.files[0].name)} 
              placeholder="Image" />

            <label>
              <p>Name</p> 
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Name" />
            </label>
            <label>
              <p>About</p>
              <input 
                type="text" 
                value={about} 
                onChange={(e) => setAbout(e.target.value)} 
                placeholder="About" />
            </label>

            <div className="button">
              <button 
                onSubmit={ async (e) => { 
                  handleSubmit(e); 
                }}>Submit</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}




