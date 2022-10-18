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
    <section className="main-container">
      <div className="title">
        <h3>Add/Edit Your Item Here:</h3>
      </div>

      <form className="item-form" onSubmit={ async (e) => {
        e.preventDefault();
        handleSubmit();
      }}>
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

        <label aria-label="price" className="price-input">
          <input 
            name="price" 
            type="text" 
            className="price" 
            placeholder="$45.00" 
            value={ price } 
            onChange={ (e) => setPrice(e.target.value)}
          />
        </label>

        <label aria-label="availability" className="availability-input">
          <input 
            name="availability" 
            type="text" 
            className="availability" 
            placeholder="10" 
            value={ availability } 
            onChange={ (e) => setAvailability(e.target.value)}
          />
        </label>

        <label aria-label="description" className="description-input">
          <input 
            name="description" 
            type="text" 
            className="description" 
            placeholder="Soft Cuddly 50in Plush MooMoo Cow" 
            value={ description } 
            onChange={ (e) => setDescription(e.target.value)}
          />
        </label> 

        <div className="add-item-button">
          <button>Add/Edit Item</button>
        </div>
      </form>
    </section>
  );
};

export default Items;