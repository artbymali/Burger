import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import "./Product.css";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { TbStarFilled } from "react-icons/tb";
import { MdCancel } from "react-icons/md";
import Card from "./Card";

const productData = {
  1: {
    bgImage: `/burBGone.jpg`,
    imgageUrl: `/BugOne.png`,
    heading: "Zinger Burger",
    price: 6.0,
    details:
      "Indulge in the rich, savory flavors of our Black Angus Burger, crafted from premium Black Angus beef, known for its exceptional marbling and tenderness. This gourmet burger is seared to perfection, delivering a juicy, melt-in-your-mouth experience with every bite. Topped with sharp cheddar cheese, crisp lettuce, vine-ripened tomatoes, and a tangy house-made aioli, it’s nestled in a soft, toasted brioche bun.",
  },
  2: {
    bgImage: `/ProductPageBGTwo.jpg`,
    imgageUrl: `/BugOne.png`,
    productImg: `/BugTwo.png`,
    heading: "Black Angus Burger",
    price: 6.0,
    details:
      "Indulge in the rich, savory flavors of our Black Angus Burger, crafted from premium Black Angus beef, known for its exceptional marbling and tenderness. This gourmet burger is seared to perfection, delivering a juicy, melt-in-your-mouth experience with every bite. Topped with sharp cheddar cheese, crisp lettuce, vine-ripened tomatoes, and a tangy house-made aioli, it’s nestled in a soft, toasted brioche bun.",
  },
  3: {
    bgColor: "blue",
    heading: "Bøfsandwich",
    price: 6.0,
  },
  // Add more products here...
};

function Product() {
  const { productId } = useParams();
  const [cart, setCart] = useState([]);
  const scrollerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

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

  const [count, setCount] = useState(0);

  let addValue = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  let removeValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {

    if (count <= 0) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const cartItem = { ...product, quantity: count };
      const updatedCart = [...cart];
      const existingItemIndex = updatedCart.findIndex(
        (item) => item.heading === cartItem.heading
      );

      // If the product is already in the cart, update its quantity
      if (existingItemIndex !== -1) {
        updatedCart[existingItemIndex].quantity += count;
      } else {
        updatedCart.push(cartItem);
      }

      setCart(updatedCart); // Update the cart state
      setCount(0); // Reset the quantity input
      setIsLoading(false); // Stop loading animation
    }, 3000);
  };

  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedReviews, setSubmittedReviews] = useState([]);
  const [hoveredStar, setHoveredStar] = useState(null);
  const [selectedStar, setSelectedStar] = useState(null);

  // Form input handlers
  const handleReviewChange = (e) => setReview(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  // Rating system logic
  const handleMouseEnter = (index) => setHoveredStar(index);
  const handleMouseLeave = () => setHoveredStar(null);
  const handleClick = (index) => setSelectedStar(index);

  const getStarOpacity = (index) => {
    const activeIndex = hoveredStar !== null ? hoveredStar : selectedStar;
    if (activeIndex !== null) {
      if (index <= activeIndex) {
        return 1 - (activeIndex - index) * 0.15;
      }
      return 0.3;
    }
    return 1 - index * 0.15;
  };

  const handleReviewSubmit = () => {
    if (
      !review.trim() ||
      !name.trim() ||
      !email.trim() ||
      selectedStar === null
    ) {
      alert("Please fill in all fields and provide a rating.");
      return;
    }

    if (review.trim() !== "" && name.trim() !== "" && email.trim !== "") {
      const newReview = {
        name,
        email,
        review,
        rating: selectedStar + 1,
      };
      setSubmittedReviews([...submittedReviews, newReview]);
      setReview("");
      setName("");
      setEmail("");
      setSelectedStar(null);
    }
  };

  const calculateTotalPrice = (price, quantity) => {
    return (price * quantity).toFixed(2);
  };

  const handleRemoveCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <>
      <Header />
      <div className="Product-page">
        <div className="Product-page-container">
          <div className="Product-content">
            <div className="Product-selling">
              <div className="Product-selling-content">
                <div className="Product-selling-content-left">
                  <h1>{product.heading}</h1>
                  <h2>{product.price.toFixed(2)}</h2>
                  <h3>Ingredients:</h3>
                  <p>
                    onion, oregano, bacon, cheese, ketchup, mustard, green salad
                  </p>
                  <div className="Product-selling-button">
                    <div className="button-input">
                      <FiMinus onClick={removeValue} className="minus" />
                      <h3>{count}</h3>
                      <FaPlus onClick={addValue} className="plus" />
                    </div>
                    <button
                      onClick={handleAddToCart}
                      className={`add-to-cart-btn ${
                        isLoading ? "loading" : ""
                      }`}
                      disabled={isLoading} // Disable button during animation
                    >
                      {isLoading ? "ADDING..." : "ADD TO CART"}
                    </button>
                  </div>
                </div>
                <div className="Product-selling-content-right">
                  <img src="/BugOne.png" alt="" />
                </div>
              </div>
              <div className="Product-selling-dis">
                <h2>Description:</h2>
                <p>
                  Shoulder pig biltong buffalo. Burgdoggen meatball sirloin pig.
                  Picanha pork belly shank, pastrami rump turducken pork
                  tenderloin sausage. Prosciutto drumstick tongue t-bone. Filet
                  mignon bresaola jowl ribeye kielbasa, brisket kevin picanha
                  swine short ribs pig turkey chuck venison. Hamburger strip
                  steak boudin turkey bresaola leberkas.
                </p>
              </div>
              <div className="Product-Meta">
                <div className="Product-Tags">
                  <p>#BACON</p>
                  <p>#BURGER</p>
                  <p>#CHEESE</p>
                </div>
              </div>
            </div>

            <div className="Related-Products-Page">
              <div className="Related-Product-Heading">
                <h2>Related Products:</h2>
              </div>

              <div className="Related-Products">
                <Card
                  productId="6"
                  title="Mexican Navho Burger"
                  titleSize="titleFontSize"
                  card_six_inner="six_width_inner"
                  card_front_img={`/BugSix.png`}
                  card_front_img_inner="imageWidth"
                  category="CHICKEN"
                  categorySize="categoryFontSize"
                  price_inner="$13.00"
                  forProductPage={true}
                  handleAddToCart={handleAddToCart}
                  isLoading={isLoading}
                />
                <Card
                  productId="7"
                  title="ShroomBacon Burger"
                  titleSize="titleFontSize"
                  card_seven_inner="seven_width_inner"
                  card_front_img={`/BugSeven.png`}
                  card_front_img_inner="imageWidth"
                  card_front_image_width="imgSize"
                  category="BEEF"
                  categorySize="categoryFontSize"
                  price_inner="$10.00"
                  forProductPage={true}
                  handleAddToCart={handleAddToCart}
                  isLoading={isLoading}
                />
                <Card
                  productId="8"
                  title="ShroomBacon Burger"
                  titleSize="titleFontSize"
                  card_seven_inner="seven_width_inner"
                  card_front_img={`/BugSix.png`}
                  card_front_img_inner="imageWidth"
                  category="MEALS"
                  categorySize="categoryFontSize"
                  price_inner="$22.00"
                  forProductPage={true}
                  handleAddToCart={handleAddToCart}
                  isLoading={isLoading}
                />
              </div>
            </div>

            <div className="Product-Review-Box">
              <div className="Product-Review">
                <div className="Product-Review-heading">
                  <h3>Reviews</h3>
                </div>

                <div className="Product-Review-Content">
                  {submittedReviews.length === 0 ? (
                    <p>There are no reviews yet.</p>
                  ) : (
                    <ul>
                      {submittedReviews.map((rev, index) => (
                        <li key={index}>
                          <div className="Review-comment">
                            <div className="Review-NaEm">
                              <div className="Review-name">
                                <h3>{rev.name}</h3>
                              </div>
                              <div className="Review-email">
                                <h5>({rev.email}):</h5>
                              </div>
                            </div>
                            <div className="Review-Rev">
                              <p>{rev.review}</p>
                            </div>
                          </div>
                          <div className="Review-Rating">
                            <div className="Review-Rating-hed">Rating:</div>
                            <div className="Review-Rating-star">
                              {Array.from({ length: 5 }, (_, i) => (
                                <TbStarFilled
                                  key={i}
                                  style={{
                                    opacity: i < rev.rating ? 1 : 0.3,
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className="Product-Comment">
                <div className="Product-Rating">
                  <h3>Be the first to review "Bacon Cheeseburger"</h3>
                  <div className="Product-Star-Rating">
                    <p>Your Rating</p>
                    <span>
                      {[...Array(5)].map((_, index) => (
                        <span
                          key={index}
                          onMouseEnter={() => handleMouseEnter(index)}
                          onMouseLeave={handleMouseLeave}
                          onClick={() => handleClick(index)}
                          style={{
                            cursor: "pointer",
                            opacity: getStarOpacity(index),
                            transition: "opacity 0.3s",
                          }}
                        >
                          <TbStarFilled />
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
                <div className="Product-User-Comment">
                  <div className="Your-Review">
                    <p>Your Review</p>
                    <input
                      type="text"
                      value={review}
                      onChange={handleReviewChange}
                    />
                  </div>
                  <div className="Your-Name">
                    <p>Name</p>
                    <input
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </div>
                  <div className="Your-Email">
                    <p>Email</p>
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <button onClick={handleReviewSubmit}>SUBMIT</button>
                </div>
              </div>
            </div>
          </div>

          <div className="Product-bar">
            <div className="Product-bar-cart">
              <div className="Product-bar-cart-heading">
                <h3>Cart</h3>
              </div>
              <div className="Product-bar-cart-products">
                {cart.length === 0 ? (
                  <p>Your cart is empty.</p>
                ) : (
                  cart.map((item, index) => (
                    <div key={index} className="cart-item">
                      <div className="cart-item-top">
                        <img src={item.imgageUrl} alt="" />
                        <div className="cart-item-top-text">
                          <h4>{item.heading}</h4>
                          <p>
                            {item.price.toFixed(2)} x {item.quantity}
                          </p>
                        </div>
                        <span onClick={() => handleRemoveCart(index)}>
                          <MdCancel />
                        </span>
                      </div>
                      <div className="cart-item-bottom">
                        <div className="cart-item-bottom-text">
                          <h5>Subtotal:</h5>
                          <p>
                            {/* {item.price.toFixed(2)} x {item.quantity} = $ */}
                            ${calculateTotalPrice(item.price, item.quantity)}
                          </p>
                        </div>
                        <div className="cart-item-bottom-buttons">
                          <button>VIEW CART</button>
                          <button>CHECKOUT</button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="Product-bar-rating"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
