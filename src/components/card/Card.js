import React, { useState } from "react";

import "./card.css";
import imgGreen from "../../assets/images/whiteshoe.jpg";
import imgYellow from "../../assets/images/yellowshoe.jpg";
import imgRed from "../../assets/images/redshoe.jpg";
import { GrStar } from "react-icons/gr";

const Card = () => {
  const [cardData, setcardData] = useState({
    color: null,
    quantity: 0,
    size: 0,
  });
  const [count, setCount] = useState(0);
  const [image, setImage] = useState(imgYellow);
  const [color, setColor] = useState("green");
  const [size, setSize] = useState(40);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const changeValue = (e) => {
    setCount(parseInt(e.target.value));
  };

  const changeimage = (image, color) => {
    setImage(image);
    setColor(color);
  };

  const changeSize = (e) => {
    setSize(e.target.value);
  };

  const addToCart = () => {
    setcardData({ color: color, quantity: count, size: size });
  };

  console.log(cardData);

  return (
    <>
      <div className="container">
        <div className=" card_container">
          <div className="image">
            <img src={image} alt="" />
          </div>
          <div className="card_details">
            <h1> Camper</h1>
            <div className="star_icon">
              <GrStar />
              <GrStar />
              <GrStar />
              <GrStar />
              <GrStar />
            </div>
            <p className="dollar_price">$ 280</p>
            <p className="product_details">
              Lorem ipsum dolor sit our amet consectetur adipisicing elit. Dolor
              cumque quaerat, fugiat culpa but neque vero tempore
            </p>
            <div className="counter">
              <article className="minus" onClick={handleDecrement}>
                {" "}
                -{" "}
              </article>
              <input className=" number" onChange={changeValue} value={count} />
              <article className="plus" onClick={handleIncrement}>
                {" "}
                +{" "}
              </article>
            </div>
            <label className="option">
              <p> Choose a size: </p>
              <select name="" id="" onChange={changeSize}>
                <option value="40">40</option>
                <option value="42">42</option>
                <option value="44">44</option>
                <option value="46">46</option>
                <option value="48">48</option>
              </select>
            </label>
            <div className="color">
              <p>Chooe a color:</p>
              <input
                type="radio"
                onClick={() => changeimage(imgGreen, "Green")}
                name="color"
                className="green"
              />
              <input
                type="radio"
                onClick={() => changeimage(imgYellow, "Yellow")}
                name="color"
                className="yellow"
              />
              <input
                type="radio"
                onClick={() => changeimage(imgRed, "Red")}
                name="color"
                className="red"
              />
            </div>

            <button className="btn" onClick={addToCart}>
              {" "}
              Add to Cart{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
