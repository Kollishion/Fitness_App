import React, { useState } from 'react';
import './CartStyle.css';
import things from './things';

function Cart() {
  const [items, setItems] = useState(things);

  const removeItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  const payNow = (amount, description = "Total Payment") => {
    const options = {
      key: "rzp_test_1l8BwLOHKEgffm", // Enter the Key ID generated from the Dashboard
      amount: amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "USD",
      name: "Fitness Fussion", // Your business name
      description: description,
      image: "public/photo_2024-05-21_12-47-32.jpg",
      handler: function (response) {
        alert(response.razorpay_payment_id);
      }
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const cartTotal = items.reduce((total, item) => total + parseFloat(item.pPrice.slice(1)), 0);

  return (
    <>
      <div className='allCart'>
        <h1>Shopping Cart</h1>
        <p className='itemCounter'>You have {items.length} Items in cart</p>
        {items.map((ok) => (
          <div className='overAll' key={ok.id}>
            <div className='itemsContent'>
              <div className='cartItems'>
                <div className='itemImage'>
                  <img src={ok.cover} alt="Items cover" />
                </div>
                <div className='itemTitle'>
                  <h2>{ok.pName}</h2>
                  <h3>{ok.pPrice}</h3>
                </div>
                <div className='remove'>
                  <button className='remove' onClick={() => removeItem(ok.id)}>X</button>
                </div>
                <div className='payNow'>
                  <button onClick={() => payNow(parseFloat(ok.pPrice.slice(1)), ok.pName)}>Pay Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className='cartTotal'>
          <h3>Cart Total: $<span>{cartTotal.toFixed(2)}</span></h3>
          <button onClick={() => payNow(cartTotal)}>PROCEED PAYMENT</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
