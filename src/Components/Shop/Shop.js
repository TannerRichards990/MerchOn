import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { useBusiness } from '../../Hooks/useBusiness';
import './Shop.css';

export default function Shop() {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const history = useHistory();
  const { businessDetail, setBusinessDetail, loading, setLoading, error, setError } = useBusiness(id);

  const rows = [];
  if (businessDetail.length !== 0) {
    for (let i = 0; i < businessDetail.length; i++) {
      let x = JSON.parse(businessDetail[i].business_info);
      rows.push(x);
    }
  }
  console.log(rows);

  return (
    <>
      <div className="title">WELCOME TO THE SHOP</div>
      <div>{id}</div>
    </>
  );
}
