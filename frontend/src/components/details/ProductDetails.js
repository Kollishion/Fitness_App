import React from "react";

const ProductDetails = ({ item, index, handleTab, myRef }) => {
  if (!item) {
    return <div>Product details not found</div>;
  }

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

  // Check if item.src is an array and index is within bounds
  const validSrc =
    Array.isArray(item.src) && index >= 0 && index < item.src.length;

  return (
    <div className="details">
      <div className="big-img">
        {validSrc ? (
          <img src={item.src[index]} alt="" />
        ) : (
          <div>No image available</div>
        )}
      </div>

      <div className="box">
        <div className="cart-button">
          <button className="cart">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/shopping-cart.png"
              alt="cart icon"
            />
          </button>
        </div>
        <div className="row">
          <h2>{item.title}</h2>
        </div>
        <div className="rating">
          {renderStars(item.rating)}
          <span>
            {" "}
            {item.rating} ({item.numReviews} reviews)
          </span>
        </div>
        <a href="/checkout" className="price">
          ${item.price}
        </a>{" "}
        {/* Updated to an anchor element */}
        <p>{item.description}</p>
        <p>{item.content}</p>
        <div className="thumb" ref={myRef}>
          {item.src &&
            item.src.map((img, idx) => (
              <img src={img} alt="" key={idx} onClick={() => handleTab(idx)} />
            ))}
        </div>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
