import React, { useState } from 'react';

import Preview from '../Preview/Preview';
import EditShop from '../Editor/EditShop';

import './EditPage.css';

export default function EditPage() {
  const [shopName, setShopName] = useState('');
  const [aboutShop, setAboutShop] = useState('');
  const [shopFont, setShopFont] = useState('default');
  const [shopTheme, setShopTheme] = useState('default');
  const [shopImage, setShopImage] = useState('');
  const [addItem, setAddItem] = useState([]);


  return (
    <div className='Editor'>
      <Preview {...{ shopName, aboutShop, shopImage, shopTheme, shopFont, addItem }} />
      <EditShop {...
        { shopName, 
          setShopName, 
          aboutShop, 
          setAboutShop, 
          shopImage, 
          setShopImage, 
          shopTheme, 
          setShopTheme, 
          shopFont, 
          setShopFont, 
          addItem, 
          setAddItem }} />
    </div>
  );
}

//This page is for displaying the controls and preview side by side