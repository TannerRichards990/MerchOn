// import { LocalTaxi } from '@mui/icons-material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './Cart.css';

export default function Cart() {
  const history = useHistory();
  // let temp = [];
  let totalSum = 0;
  let totalSumString = '';
  let shoppingCart = JSON.parse(localStorage.getItem('cart'));

  if (!shoppingCart) {
    return (
      <>
        <div>Your shopping cart is empty</div>
      </>
    );
  }


  const clearCart = () => {
    localStorage.removeItem('cart');
    location.reload();
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

  const clearItem = (remove) => {
    let temp = [];
    shoppingCart.map((keep) => {
      if (keep !== remove)
        temp.push(keep);
      localStorage.setItem('cart', JSON.stringify(temp));
      location.reload();
    }
    );
  };

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
      <div className='banner'>
        <h2>Shopping Cart</h2>
      </div>
      <div className='cart-container'> 
        {localStorage.getItem('cart') && (
          <div>
            <div className='cart'>
              {shoppingCart.map((item) => (
                <div key={item} {...item}>
                  <li>
                    item name: {item[0]}
                    <h1>
                    item price: ${item[1]}
                    </h1>
                  </li>
                  <button onClick={() => (clearItem(item))}>Remove Item</button>
                </div>
              ))}
            </div>
            <div className='subtotal'>
            Subtotal: ${totalSumString}
            </div>
            <button className='clear' onClick={clearCart}>Clear Cart</button>
            <button className='checkout' onClick={checkOut}>Checkout</button>
          </div>
        )}
      </div>
      
    </>
  );
}
