import React from "react";
import Iphone from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphone-hand.png";

const Jumbotron = () => {
  const handleLearMore = () => {
    const element = document.querySelector(".sound-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title"> Nuevo </h2>
      <img className="logo" src={Iphone} alt="Iphone 14 pro" />
      <p className="text"> Grande y Inteligente </p>
      <span className="description">
        Desde $19,499. Paga a 6 meses sin intereses.
      </span>
      <ul className="links">
        <li>
          <button className="button"> Comprar </button>
        </li>
        <li>
          <a className="link" onClick={handleLearMore}>
            Mas información
          </a>
        </li>
      </ul>
      <img className="iphone-img" src={HoldingIphone} alt="Iphone" />
    </div>
  );
};

export default Jumbotron;
