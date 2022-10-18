import React from 'react';

const Item = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [availablity, setAvailability] = useState('');
  const [description, setDescription] = useState('');

async function handleSubmit() {
    await addItem(productName, price, availablity, description);
}

return (
    <div className="main-container">
      <h3>Add/Edit Your Item Here:</h3>
      <form className="item-form"></form>
      <label aria-label="productName" className="productName-input">
        <input name="productName" type="text" className="productName" placeholder="MooMoo Cow Plushie"></input>
      </label>
    </div>
)
}