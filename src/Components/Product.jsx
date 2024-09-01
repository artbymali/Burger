import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import "./MyAccount.css"

const productData = {
  1: {
    bgImage: `/burBGone.jpg`,
    heading: "Bacon+Cheese +Green Burger",
    price: "$6.00",
  },
  2: { 
    bgImage: `/ProductPageBGTwo.jpg`,
    heading: "Bacon+Cheese +Green Burger",
    price: "$6.00",
   },
  3: { 
    bgColor: "blue", 
    heading: "Bøfsandwich", 
    price: "$8.00" },
  // Add more products here...
};

function Product() {
  const { productId } = useParams();
  const product = productData[productId] || {
    bgImage: null,
    heading: "Default Burger",
    price: "$0.00",
  };

  const productStyle = {
    backgroundImage: product.bgImage ? `url(${product.bgImage})` : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <>
      <Header />
      <div className="ProductPage">
        <div className="FrontImage" style={productStyle}></div>
        <div className="SecondaryContent">

        </div>
      </div>
    </>
  );
}

export default Product;
