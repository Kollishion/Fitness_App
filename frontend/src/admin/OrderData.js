import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderData.css';

const OrderData = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/admins/orders/getAll')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setOrders(data))
      .catch(error => setError(error.message));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-4">Order Data</h1>
      <button className="btn-dash" onClick={() => navigate('/admin')}>
        Dashboard
      </button>
      {error && <p className="text-danger">{error}</p>}
      <table className="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User ID</th>
            <th>Time Stamp</th>
            <th>Purchase Amount</th>
            <th>Product IDs</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.order_id}>
              <td>{order.order_id}</td>
              <td>{order.userId}</td>
              <td>{order.timeStamp}</td>
              <td>{order.purchaseAmount}</td>
              <td>{order.product_ids}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderData;
