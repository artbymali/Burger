import React from "react";
import Card from "../../Components/Card";

function Bestsellers() {
  return (
    <>
      <section id="Bestsellers">
        <div className="card-container">
          <div className="card-content">
            <div className="card-heading">
              <h2 id="myy-text">
                <span>Bestsellers</span>
              </h2>
            </div>

            <div className="cards">
              <Card
                productId="1"
                title="Bacon+Cheese +Green Burger"
                titleHomeSize ="titleSize"
                cardClass="one_width"
                card_front_img={`/BugOne.png`}
                card_front_img_width = "ImgWidth"
                category="BEEF"
                categoryHomeSize="categorySize"
                price="$6.00"
              />
              <Card
                productId="2"
                title="Black Angus Burger"
                titleHomeSize ="titleSize"
                cardClass="two_width"
                card_front_img={`/BugTwo.png`}
                card_front_img_width = "ImgWidth"
                category="BEEF"
                categoryHomeSize="categorySize"
                price="$12.00"
              />
              <Card
                productId="3"
                title="Bøfsandwich"
                titleHomeSize ="titleSize"
                cardClass="three_width"
                textClass="white-text" 
                card_Bg={`/BugThree.jpeg`}
                category="BEEF"
                categoryHomeSize="categorySize"
                price="$8.00"
              />
              <Card
                productId="4"
                card_Bg="/BugFour.jpeg"
                cardClass="four_width"
                textClass="white-text" 
                price="$11.00"
              />
              <Card
                productId="5"
                title="BaconBacon Cheeseburger"
                titleHomeSize ="titleSize"
                cardClass="five_width"
                card_front_img={`/BugFive.jpeg`}
                card_front_img_width = "ImgWidth"
                category="MEALS"
                categoryHomeSize="categorySize"
                price="$9.00"
              />
              <Card
                productId="6"
                title="CrazyBeefTuna Burger"
                titleHomeSize ="titleSize"
                cardClass="six_width"
                card_front_img={`/BugSix.png`}
                card_front_img_width = "ImgWidth"
                category="CHICKEN"
                categoryHomeSize="categorySize"
                price="$13.00"
              />
              <Card
                productId="7"
                title="ShroomBacon Burger"
                titleHomeSize ="titleSize"
                cardClass="seven_width"
                card_front_img={`/BugSeven.png`}
                card_front_img_width = "ImgWidth"
                category="BEEF"
                categoryHomeSize="categorySize"
                price="$10.00"
              />
              <Card
                productId="8"
                title="#stayhome kit: 6 mini burger + 6 Pack Kraft beer"
                titleHomeSize ="titleSize"
                card_Bg="/BugEight.jpeg"
                cardClass="eight_width"
                category="MEALS"
                categoryHomeSize="categorySize"
                price="$22.00"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bestsellers;
