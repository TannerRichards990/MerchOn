import React from 'react';
import './Venmo.css';


export default function Venmo() {
  let totalSum = 0;
  let totalSumString = '';
  let shoppingCart = JSON.parse(localStorage.getItem('cart'));
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
      <div>Please send your payment of ${totalSumString} to:</div>
      <img src={process.env.PUBLIC_URL + `connor_venmo.png`}/>
    </>
  );
}