import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { useBusiness } from '../../Hooks/useBusiness';
import './Shop.css';

export default function Shop() {
  const businessInfo = [];
  const businessItems = [];
  const { id } = useParams();
  const { businessDetail, setBusinessDetail, loading, setLoading, error, setError } = useBusiness(id);

  if (businessDetail.length !== 0) {
    let x = JSON.parse(businessDetail.business_info);
    businessInfo.push(x);
  }

  if (businessDetail.length !== 0) {
    let x = JSON.parse(businessDetail.business_items);
    businessItems.push(x);
    console.log('businessItems[0][1]', businessItems[0][1]);
  }
  // console.log('business Detail', businessDetail);
  // console.log('business Info', businessInfo);



  // console.log('business Items', businessItems);
  // console.log('THIS DOES NOT WORK', businessItems[0].item_name);
  console.log('businessItems', businessItems);
  // console.log('businessItems[0]', businessItems[0][1]);
  
  
  return ( 
    <>
      <div className="welcome">WELCOME TO THE SHOP</div>
      {businessDetail.length !== 0 && (
        <div>
          <div className="title">Business Name: {businessInfo[0].business_name}</div>
          <div className="description">Business About: {businessInfo[0].business_about}</div>
          <div className="owner">Business PWNer: {businessInfo[0].business_owner}</div>
          {businessItems.map((item) => (
            <div key={item.item_name} {...item}>
              <div>This should show the item name: {item[0].item_name}</div>
              <div>This should show the item price: {item[0].item_price}</div>
            </div>
          ))}
          <div>{id}</div>
        </div>
      )
      }
    </>
  );
}



// "[
// {"item_name":"A new item that will blow your mind",
// "item_price":"$50.00",
// "item_availability":"100",
// "item_description":"None of your business",
// "item_id":1666140808928}",
// {"item_name":"Loose Cigarettes",
// "item_price":"$200.00",
// "item_availability":"500",
// "item_description":
// "I have in my posession 500 lose cigarettes I am looking to sell, don't ask questions.",
// "item_id":1666140999524}]

// [{"item_name":"A new item that will blow your mind","item_price":"$50.00","item_availability":"100","item_description":"None of your business","item_id":1666140808928},{"item_name":"Loose Cigarettes","item_price":"$200.00","item_availability":"500","item_description":"I have in my posession 500 lose cigarettes I am looking to sell, don't ask questions.","item_id":1666140999524}]
