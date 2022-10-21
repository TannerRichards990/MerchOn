import React from 'react';
import { useHistory } from 'react-router-dom';
import './Cart.css';

export default function Cart() {
  const history = useHistory();
  
  if (!shoppingCart) {
    return (
      <>
        <div>Your shopping cart is empty</div>
      </>
    );
  }


  let totalSum = 0;
  let totalSumString = '';
  // console.log(localStorage);
  let shoppingCart = JSON.parse(localStorage.getItem('cart'));
  // console.log('shopping cart', shoppingCart);

  const clearCart = () => {
    localStorage.clear();
  };

  const checkOut = () => {
    history.push('/Venmo');
  };
  if (!shoppingCart) {
    return (
      <>
        <div>Your shopping cart is empty</div>
      </>
    );}

  if (!shoppingCart) {
    return (
      <>
        <div>Your shopping cart is empty</div>
      </>
    );}


  function totalMoney() {
    let moneyArr = [];
    shoppingCart.map((item) => (
      moneyArr.push(item[1])
    ));
    moneyArr.map((number) => (
      totalSum = totalSum + Number(number)
    ));
    totalSum = (Math.round(totalSum * 100) / 100);
    totalSumString = totalSum.toString();
  }

  totalMoney();

  return (
    <>    
      <div>
        <h2>Shopping Cart</h2>
        {localStorage.getItem('cart') && (
          <div>
            <div className='cart'>
              {shoppingCart.map((item) => (
                <div key={item} {...item}>
                  <li>
                    This should show the item name: {item[0]}
                    <h1>
                    This should show the item price: {item[1]}
                    </h1>
                  </li>
                </div>
              ))}
            </div>
            <button onClick={clearCart}>Clear Cart</button>
            <button onClick={totalMoney}>find sum</button>
            <div className='subtotal'>
                  Subtotal: ${totalSumString}
            </div>
            <button onClick={checkOut}>Checkout</button>
          </div>
        )}
        
      </div>
    </>
  );
}
