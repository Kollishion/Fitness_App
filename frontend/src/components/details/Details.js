import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./CombinedStyles.css";

const Details = ({ setCartCount }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page starts at the top
    fetch(`http://localhost:8080/products/getAll/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [id]);

  const ProductDetails = ({ product }) => {
    const [index, setIndex] = useState(0);
    const myRef = useRef(null);

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
        <div className="details-header">
          <h2>{product.productName}</h2>
          <div className="rating">{renderStars(product.rating)}</div>
        </div>

        <div className="details-content">
          <div className="big-img">
            <img src={product.imageUrl} alt={product.productName} />
          </div>

          <div className="box">
            <p className="price">${product.price}</p>
            <p className="description">{product.description}</p>

            <div className="thumb" ref={myRef}>
              {product.images &&
                product.images.map((img, idx) => (
                  <img
                    src={img}
                    alt={`Product view ${idx + 1}`}
                    key={idx}
                    onClick={() => handleTab(idx)}
                    className={idx === index ? "active" : ""}
                  />
                ))}
            </div>
            <button
              className="add-to-cart-button"
              onClick={() => setCartCount((prevCount) => prevCount + 1)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="app">
      {product ? <ProductDetails product={product} /> : <div>Loading...</div>}
    </div>
  );
};

export default Details;
