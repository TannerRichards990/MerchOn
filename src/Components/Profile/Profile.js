//User profile page

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBusiness } from '../../Hooks/useBusiness';



import './Profile.css';


export default function Profile() {
  const businessInfo = [];
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');

  const { id } = useParams();
  //return user profile info, create a form to edit that info.
  //write a clickHandler function for saving profile information on button "submit"
  const { businessDetail, setBusinessDetail, loading, setLoading, error, setError } = useBusiness(id);
  // console.log('business detail', businessDetail);
  const clickHandler = () => {
    history.push(`/items/${id}`);
  };


  if (businessDetail.length !== 0) {
    let x = JSON.parse(businessDetail.business_info);
    businessInfo.push(x);
  }
  // console.log('business info', businessInfo);

  return (
    <div>
      {businessDetail.length !== 0 && (
        <div>
          <div className="profile-header">
            <div className="profile-image">
              <img src={image} alt="profile" />
            </div>
            <div className="profile-info">
              <h1>Current Name:{businessInfo[0].business_name}</h1>
              <h3>Current Description:{businessInfo[0].business_about}</h3>    
            </div>
          </div>
          <div className="profile-body">
            <div className="profile-form">
              <form>
                <input type="file" value={image} onChange={(e) => setImage(e.target.value)} placeholder="image" />
                <input type="text" value={businessDetail.business_name} onChange={(e) => setName(e.target.value)} placeholder="name" />
                <input type="text" value={businessDetail.business_about} onChange={(e) => setAbout(e.target.value)} placeholder="about" />
                <button onClick={clickHandler}>Submit Changes</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}




