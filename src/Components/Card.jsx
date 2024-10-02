import React from "react";
import { FaPlus } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Card({
  title,
  titleSize,
  titleHomeSize,
  price,
  textClass,
  category,
  categorySize,
  categoryHomeSize,
  card_front_img,
  card_front_img_width,
  card_front_image_width,
  card_front_img_inner,
  card_Bg,
  cardClass,
  productId, // Add this prop
  forProductPage,
  handleAddToCart,
  isLoading,
}) {
  const cardStyle = {
    backgroundImage: `url(${card_Bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const cardClasses = ["card", forProductPage && "ProductCard", cardClass]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <div className={cardClasses} style={cardStyle}>
        {forProductPage ? (
          <>
            <div className="image">
              <img
                className={`${card_front_img_width} ${card_front_image_width} ${card_front_img_inner}`}
                src={card_front_img}
                alt=""
              />
            </div>
            <div className="heading">
              <p className={`${textClass} ${categorySize} ${categoryHomeSize}`}>
                {category}
              </p>
              <h2 className={`${textClass} ${titleSize} ${titleHomeSize}`}>
                {title}
              </h2>
            </div>
          </>
        ) : (
          <>
            <div className="heading">
              <p className={`${textClass} ${categorySize} ${categoryHomeSize}`}>
                {category}
              </p>
              <NavLink to={`/Product/${productId}`}>
              <h2 onClick={handleAddToCart} className={`${textClass} ${titleSize} ${titleHomeSize}`}>
                {title}
              </h2>
              </NavLink>
            </div>
            <div className="image">
              <img
                className={`${card_front_img_width} ${card_front_img_inner}`}
                src={card_front_img}
                alt=""
              />
            </div>
          </>
        )}

        {/* <div className="bottom">
          <div className="price">
            <h3 className={textClass}>{price}</h3>
            <p>220gr / 600cal</p>
          </div>
          <div className="button">
            {forProductPage ? (
            <button>ADD TO CART</button> // Pure button for product page
          ) : (
            <NavLink to={`/Product/${productId}`}>
              <i>
                <FaPlus className="icon" />
              </i>
            </NavLink>
          )}
          </div>
        </div> */}

        <div className="bottom">
          {forProductPage ? (
            <div className="productPrice">
              <p>$8.00</p>
              <button
                onClick={handleAddToCart}
                className={`add-to-cart-btn ${isLoading ? "loading" : ""}`}
                disabled={isLoading} // Disable button during loading
              >
                {isLoading ? "ADDING..." : "ADD TO CART"}
              </button>
            </div>
          ) : (
            <>
              <div className="price">
                <h3 className={textClass}>{price}</h3>
                <p>220gr / 600cal</p>
              </div>

              <div className="button">
                <NavLink to={`/Product/${productId}`}>
                  <i>
                    <FaPlus className="icon" />
                  </i>
                </NavLink>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
