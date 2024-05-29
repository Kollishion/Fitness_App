import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddProductForm.css';

const AddProductForm = () => {
  const [form, setForm] = useState({
    productName: '',
    category: 'SUPPLEMENT', // Default to SUPPLEMENT
    price: '',
    description: '',
    imageUrl: ''
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/admins/products/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to add the product');
        }
        navigate('/admin/product-data');
      })
      .catch(error => setError(error.message));
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Add New Product</h1>
      <button className="btn-dash" onClick={() => navigate('/admin')}>
        Dashboard
      </button>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label>Product Name</label>
          <input
            className="form-control"
            name="productName"
            value={form.productName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select
            className="form-control"
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          >
            <option value="SUPPLEMENT">SUPPLEMENT</option>
            <option value="EQUIPMENT">EQUIPMENT</option>
            <option value="GARMENT">GARMENT</option>
          </select>
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            className="form-control"
            type="number"
            step="0.01"
            min="0"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            name="description"
            value={form.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Image URL</label>
          <input
            className="form-control"
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn-primary">Add Product</button>
          <button type="button" className="btn-outline" onClick={() => navigate('/admin/products')}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
