import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { addItem } from '../../services/fetch-utils';
import './Items.css';

const Items = () => {
  const history = useHistory();
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const { id } = useParams();

  const handleSubmit = async () => {
    await addItem(productName, price, 0, description, id);
    history.push(`/Editor/${id}`);
  };

  return (
    <section className="items-container">
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
            placeholder="45.00" 
            value={ price } 
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>

        <label aria-label="description" className="description-input">
          <p>Description:</p>
          <input 
            name="description" 
            type="text" 
            className="description" 
            value={ description } 
            onChange={(e) => setDescription(e.target.value)}
          />
        </label> 

        <div className="add-item-button">
          <p>Add the item to your store</p>
          <button onClick={() => (handleSubmit)}>Add</button>
        </div>
      </form>
    </section>
  );
};

export default Items;