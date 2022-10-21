//This page is for displaying the controls and preview side by side

import React, { useState } from 'react';
import Preview from '../Preview/Preview';
import EditShop from '../Editor/EditShop';
import './EditPAge.css';

export default function EditPage() {
  const [shopName, setShopName] = useState('');
  const [aboutShop, setAboutShop] = useState('');
  const [shopTheme, setShopTheme] = useState('default');
  const [shopImage, setShopImage] = useState('');
  const [addItem, setAddItem] = useState([]);

  return (
    <div className='Editor'>
      <Preview {...{ shopName, aboutShop, shopImage, shopTheme, addItem }} />
      <EditShop {...
        { shopName, 
          setShopName, 
          aboutShop, 
          setAboutShop, 
          shopImage, 
          setShopImage, 
          shopTheme, 
          setShopTheme,  
          addItem, 
          setAddItem }} />
    </div>
  );
}