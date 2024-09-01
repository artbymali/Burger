import React from "react";
import { FaPlus } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Card({
  card_heading_h2,
  h2class,
  pclass,
  pricetext,
  price,
  heading_tittle,
  card_front_img,
  card_Bg,
  card_one,
  card_two,
  card_three,
  card_four,
  card_five,
  card_six,
  card_seven,
  card_eight,
  productId, // Add this prop
}) {
  const cardStyle = {
    backgroundImage: `url(${card_Bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const cardClasses = [
    "card",
    card_one && card_one,
    card_two && card_two,
    card_three && card_three,
    card_four && card_four,
    card_five && card_five,
    card_six && card_six,
    card_seven && card_seven,
    card_eight && card_eight,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <div className={cardClasses} style={cardStyle}>
        <div className="heading">
          <p className={pclass}>{heading_tittle}</p>
          <h2 className={h2class}>{card_heading_h2}</h2>
        </div>
        <div className="image">
          <img src={card_front_img} alt="" />
        </div>
        <div className="bottom">
          <div className="price">
            <h3 className={pricetext}>{price}</h3>
            <p>220gr / 600cal</p>
          </div>
          <div className="button">
            <NavLink to={`/Product/${productId}`}> {/* Update the link */}
              <i>
                <FaPlus className="icon" />
              </i>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
