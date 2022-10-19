import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { addItem } from '../../services/fetch-utils';

const Items = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [availability, setAvailability] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const { id } = useParams();

  const handleSubmit = async () => {
    await addItem(productName, price, availability, description, id);
  };

  return (
    <section className="main-container">
      <h3 className="title">Add More to Your Store:</h3>

      <form className="item-form" onSubmit={ async (e) => {
        e.preventDefault();
        handleSubmit();
      }}>
        <label aria-label="image" className="image-input">
          <p>Image of Product:</p>
          <input
            name="image" 
            type="file" 
            className="image" 
            value={ image } 
            onChange={(e) => setImage(e.target.value)} 
          />
        </label>
        

        <label aria-label="productName" className="productName-input">
          <p>Product Name:</p>
          <input 
            name="productName" 
            type="text" 
            className="productName" 
            placeholder="MooMoo Cow Plushie" 
            value={ productName } 
            onChange={(e) => setProductName(e.target.value)}
          />
        </label>

        <label aria-label="price" className="price-input">
          <p>Price:</p>
          <input 
            name="price" 
            type="text" 
            className="price" 
            placeholder="$45.00" 
            value={ price } 
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>

        <label aria-label="availability" className="availability-input">
          <p>Availability:</p>
          <input 
            name="availability" 
            type="text" 
            className="availability" 
            placeholder="10" 
            value={ availability } 
            onChange={(e) => setAvailability(e.target.value)}
          />
        </label>

        <label aria-label="description" className="description-input">
          <p>Description:</p>
          <input 
            name="description" 
            type="text" 
            className="description" 
            placeholder="Soft Cuddly 50in Plush MooMoo Cow" 
            value={ description } 
            onChange={(e) => setDescription(e.target.value)}
          />
        </label> 

        <div className="add-item-button">
          <p>Add the item to your store</p>
          <button>Add</button>
        </div>
      </form>
    </section>
  );
};

export default Items;