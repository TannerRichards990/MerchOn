import React from 'react';
import CartItem from './CartItem';

export default function Cart() {
  console.log(localStorage);
  let shoppingCart = JSON.parse(localStorage.getItem('cart'));
  console.log('shopping cart', shoppingCart);
  console.log('shopping cart[0]', shoppingCart[0]);

  const clearCart = () => {
    localStorage.clear();
    console.log(localStorage);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div className='cart'>
        {shoppingCart.map((item) => (
          <div key={item.item_name} {...item}>
            <div>This should show the item name: {item[0]}</div>
            <div>This should show the item price: {item[1]}</div>
          </div>
        ))}
      </div>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}
