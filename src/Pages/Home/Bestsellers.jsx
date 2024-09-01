import React from 'react'
import Card from '../../Components/Card'

function Bestsellers() {
  return (
    <>
        <section id='Bestsellers'>
            <div className="card-container">
                <div className="card-content">
                    <div className="card-heading">
                        <h2 id='myy-text'><span>Bestsellers</span></h2>
                    </div>

                    <div className="cards">
                        <Card productId="1" card_heading_h2="Bacon+Cheese +Green Burger" card_one="one_width" card_front_img={`/BugOne.png`} heading_tittle="BEEF" price="$6.00"/>
                        <Card productId="2" card_heading_h2="Black Angus Burger" card_two="two_width" card_front_img={`/BugTwo.png`} heading_tittle="BEEF" price="$12.00"/>
                        <Card productId="3" card_heading_h2="Bøfsandwich" card_three="three_width" h2class="white-text" pclass="white-text" pricetext="white-text" card_Bg={`/BugThree.jpeg`} heading_tittle="BEEF" price="$8.00"/>
                        <Card productId="4" card_Bg="/BugFour.jpeg" card_four="four_width" pclass="white-text" pricetext="white-text" price="$11.00" />
                        <Card productId="5" card_heading_h2="BaconBacon Cheeseburger" card_five="five_width" card_front_img={`/BugFive.jpeg`} heading_tittle="MEALS" price="$9.00"/>
                        <Card productId="6" card_heading_h2="CrazyBeefTuna Burger" card_six="six_width" card_front_img={`/BugSix.png`} heading_tittle="CHICKEN" price="$13.00"/>
                        <Card productId="7" card_heading_h2="ShroomBacon Burger" card_seven="seven_width" card_front_img={`/BugSeven.png`} heading_tittle="BEEF" price="$10.00" />
                        <Card productId="8" card_Bg="/BugEight.jpeg" card_heading_h2="#stayhome kit: 6 mini burger + 6 Pack Kraft beer" card_eight="eight_width" heading_tittle="MEALS" price="$22.00" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Bestsellers
