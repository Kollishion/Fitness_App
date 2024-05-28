import React, { useState, useEffect, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './CombinedStyles.css';

const ProductDetails = ({ product }) => {
  const [index, setIndex] = useState(0);
  const myRef = useRef(null);
  const history = useHistory();

  const handleTab = (index) => {
    setIndex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  useEffect(() => {
    if (myRef.current && myRef.current.children[index]) {
      myRef.current.children[index].className = "active";
    }
  }, [index]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="fas fa-star"></i>);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star"></i>);
      }
    }
    return stars;
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="details">
      <div className="big-img">
        <img src={product.imageUrl} alt={product.productName} />
      </div>

      <div className="box">
        <div className="cart-button">
          <button className="cart">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/shopping-cart.png" alt="cart icon" />
          </button>
        </div>
        <div className="row">
          <h2>{product.productName}</h2>
        </div>
        <div className="rating">
          {renderStars(product.rating)}
          <span> {product.rating} ({product.numReviews} reviews)</span>
        </div>
        <p className="price">${product.price}</p>
        <p>{product.description}</p>
        <div className="thumb" ref={myRef}>
          {product.images && product.images.map((img, idx) => (
            <img
              src={img}
              alt=""
              key={idx}
              onClick={() => handleTab(idx)}
            />
          ))}
        </div>
        <button className="add-to-cart-button" onClick={() => history.push('/cart')}>Add to Cart</button>
      </div>
    </div>
  );
};

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  return (
    <div className="app">
      {product && <ProductDetails product={product} />}
    </div>
  );
};

export default Details;
