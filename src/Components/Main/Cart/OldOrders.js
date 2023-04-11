import React from 'react'
import ProductNavigation from '../../Navigation/ProductNavigation'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import "./Order.css"
const OldOrders = () => {


   const [backData, SetBacKData] = useState([]);
   let mobiledata = parseInt(sessionStorage.getItem("data"));
   console.log(mobiledata)

 
   useEffect(() => {
     axios
       .get(`http://localhost:8078/orders/${mobiledata}`)
     .then((response) => {
         console.log(response.data);
        SetBacKData(response.data);
      })
       .catch((error) => {
         console.log(error);
      });
   }, []);
  
  return (
    <>
    <ProductNavigation/>
    <div className="card">
    <h4 className="card-text">Recent Orders</h4>
      <img src={backData.imageUrl} width="300px" alt={backData.name} />
      <div className="card-body">
        <h5 className="card-title">{backData.name}</h5>
        <p className="card-text">{backData.description}</p>
        <p className="card-text">Quantity:{backData.quantity}</p>
        <p className="card-text">Price:  ${backData.price}</p>
        <p className="card-text">Order On :  {backData.date}</p>
        
      </div>
    </div>
    
  
    </>
    
  )
}

export default OldOrders
