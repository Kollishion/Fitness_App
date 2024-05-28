import React, { useState, useEffect } from "react";
import "./styleShee.css";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function Prop({ product_id, cover, pName, pPrice, products }) {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate(`/details/${product_id}`, { state: { products } });
  };

  return (
    <div className="cardContent">
      <div className="allContainer">
        <div className="imgContainer">
          <img src={cover} alt="error loading" />
        </div>
        <div className="info">
          <div className="titlePro">
            <h2>{pName}</h2>
          </div>
          <div className="priceContainer">
            <h3>${pPrice}</h3>
          </div>
          <button onClick={handleExploreClick} className="btn">
            <div className="buttContainer">EXPLORE!</div>
          </button>
        </div>
      </div>
    </div>
  );
}

function PropsTwo({ product_id, cover, pName, pPrice, products }) {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate(`/details/${product_id}`, { state: { products } });
  };

  return (
    <div className="cardContent">
      <div className="allContainer">
        <div className="imgContainer">
          <img src={cover} alt="error loading" />
        </div>
        <div className="info">
          <div className="titlePro">
            <h2>{pName}</h2>
          </div>
          <div className="priceContainer">
            <h3>${pPrice}</h3>
          </div>
          <button onClick={handleExploreClick} className="btn">
            <div className="buttContainer">EXPLORE!</div>
          </button>
        </div>
      </div>
    </div>
  );
}

function PropsThree({ product_id, cover, pName, pPrice, products }) {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate(`/details/${product_id}`, { state: { products } });
  };

  return (
    <div className="cardContent">
      <div className="allContainer">
        <div className="imgContainer">
          <img src={cover} alt="error loading" />
        </div>
        <div className="info">
          <div className="titlePro">
            <h2>{pName}</h2>
          </div>
          <div className="priceContainer">
            <h3>${pPrice}</h3>
          </div>
          <button onClick={handleExploreClick} className="btn">
            <div className="buttContainer">EXPLORE!</div>
          </button>
        </div>
      </div>
    </div>
  );
}

function Item() {
  const [equipment, setEquipment] = useState([]);
  const [garments, setGarments] = useState([]);
  const [supplements, setSupplements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products/getAll")
      .then((response) => {
        console.log("Response status: ", response.status); // Debug log
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data: ", data); // Debug log
        setEquipment(
          data.filter(
            (product) => product.category.toLowerCase() === "equipment"
          )
        );
        setGarments(
          data.filter((product) => product.category.toLowerCase() === "garment")
        );
        setSupplements(
          data.filter(
            (product) => product.category.toLowerCase() === "supplement"
          )
        );
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(`equip: ${equipment}, garm: ${garments}, supp:${supplements}`);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <h2>Equipments:</h2>
      <Slider {...settings}>
        {equipment.map((product) => (
          <Prop
            product_id={product.productId}
            cover={product.imageUrl}
            pName={product.productName}
            pPrice={product.price}
            key={product.productId}
            products={equipment}
          />
        ))}
      </Slider>

      <h2>Garments:</h2>
      <Slider {...settings}>
        {garments.map((product) => (
          <PropsTwo
            product_id={product.productId}
            cover={product.imageUrl}
            pName={product.productName}
            pPrice={product.price}
            key={product.productId}
            products={garments}
          />
        ))}
      </Slider>

      <h2>Supplements:</h2>
      <Slider {...settings}>
        {supplements.map((product) => (
          <PropsThree
            product_id={product.productId}
            cover={product.imageUrl}
            pName={product.productName}
            pPrice={product.price}
            key={product.productId}
            products={supplements}
          />
        ))}
      </Slider>
    </>
  );
}

export default Item;
