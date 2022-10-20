import React from 'react';
import CartItem from './CartItem';

export default function Cart() {
  let totalSum = 0;
  console.log(localStorage);
  let shoppingCart = JSON.parse(localStorage.getItem('cart'));
  console.log('shopping cart', shoppingCart);

  const clearCart = () => {
    localStorage.clear();
    console.log(localStorage);
  };

  const totalMoney = () => {
    let moneyArr = [];
    shoppingCart.map((item) => (
      moneyArr.push(item[1])
    ));
    console.log('mon array', moneyArr);
    moneyArr.reduce((a, b) => a + b, 0);
    console.log('possible sum', moneyArr);
  };

  return (
    <>    
      <div>
        <h2>Shopping Cart</h2>
        {localStorage.getItem('cart') && (
          <div>
            <div className='cart'>
              {shoppingCart.map((item) => (
                <div key={item} {...item}>
                  <div>This should show the item name: {item[0]}</div>
                  <div>This should show the item price: {item[1]}</div>
                </div>
              ))}
            </div>
            <button onClick={clearCart}>Clear Cart</button>
            <button onClick={totalMoney}>find sum</button>
            <div>
                  sum: {totalSum}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
