import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductData.css';

const ProductData = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/admins/products/getAll')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => setError(error.message));
  }, []);

  const handleEdit = (productId) => {
    navigate(`/admin/products/edit/${productId}`);
  };

  const handleDelete = (productId) => {
    fetch(`http://localhost:8080/admins/products/delete/${productId}`, {
      method: 'POST'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete the product');
        }
        setProducts(products.filter(product => product.productId !== productId));
      })
      .catch(error => setError(error.message));
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Product Data</h1>
      {error && <p className="text-danger">{error}</p>}
      <button className="btn-dash" onClick={() => navigate('/admin')}>
        Dashboard
      </button>
      <button className="btn-add" onClick={() => navigate('/admin/products/add')}>
        Add Product
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image URL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.productId}>
              <td>{product.productId}</td>
              <td>{product.productName}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td><img className='imagez' src={product.imageUrl} alt={product.name} /></td>
              <td>
                <button className='btn-edit' onClick={() => handleEdit(product.productId)}>Edit</button>
                <button className='btn-delete' onClick={() => handleDelete(product.productId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductData;
