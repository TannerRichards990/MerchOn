import React, { useState } from 'react';
import { addItem } from '../../services/fetch-utils';

const Items = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [availability, setAvailability] = useState('');
  const [description, setDescription] = useState('');

  async function handleSubmit() {
    await addItem(productName, price, availability, description);
  }

  return (
    <div className="main-container">
      <h3>Add/Edit Your Item Here:</h3>

      <form className="item-form"></form>
      <label aria-label="productName" className="productName-input">
        <input 
          name="productName" 
          type="text" 
          className="productName" 
          placeholder="MooMoo Cow Plushie" 
          value={ productName } 
          onChange={ (e) => setProductName(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Items;