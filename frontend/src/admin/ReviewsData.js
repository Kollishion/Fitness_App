import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ReviewsData.css';

const ReviewData = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/admins/reviews/getAll')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setReviews(data))
      .catch(error => setError(error.message));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-4">Review Data</h1>
      <button className="btn-dash" onClick={() => navigate('/admin')}>
        Dashboard
      </button>
      {error && <p className="text-danger">{error}</p>}
      <table className="table">
        <thead>
          <tr>
            <th>Review ID</th>
            <th>User ID</th>
            <th>Description</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map(review => (
            <tr key={review.reviewId}>
              <td>{review.reviewId}</td>
              <td>{review.userId}</td>
              <td>{review.description}</td>
              <td>{review.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewData;
