import React, { useState, useRef, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./Details.css";
import ProductDetails from "./ProductDetails";

const Details = () => {
  const { id } = useParams(); // Get the ID from the URL
  const location = useLocation(); // Access location state
  const [index, setIndex] = useState(0);
  const myRef = useRef(null);

  const products = location.state?.products || [];

  // Convert id to number if necessary
  const productId = Number(id);

  const handleTab = (index) => {
    setIndex(index);
    if (myRef.current && myRef.current.children) {
      const images = myRef.current.children;
      for (let i = 0; i < images.length; i++) {
        images[i].className = images[i].className.replace(" active", "");
      }
      if (images[index]) {
        images[index].className += " active";
      }
    }
  };

  useEffect(() => {
    if (myRef.current && myRef.current.children) {
      const images = myRef.current.children;
      if (images[index]) {
        images[index].className += " active";
      }
    }
  }, [index]);

  const product = products.find((product) => product.productId === productId);

  console.log("Product ID from URL:", productId);
  console.log("Products passed via state:", products);
  console.log("Found product:", product);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="app">
      <ProductDetails
        key={product.productId}
        item={product}
        index={index}
        handleTab={handleTab}
        myRef={myRef}
      />
    </div>
  );
};

export default Details;
