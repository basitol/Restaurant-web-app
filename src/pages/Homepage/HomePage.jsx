import React from "react";
import "./Homepage.css";
import bg from "../../assets/burger.png";

const HomePage = () => {
  return (
    <>
      <section className="flex home">
        <div className="w-50">
          <h1 className="heading">
            Be The Fastest In Delivering Your <span>Food</span>
          </h1>
          <p>
            We cook and deliver the tastiest food right away to your designated
            location
          </p>
        </div>
        <div className="hero w-50">
          <img src={bg} alt="burger" />
        </div>
      </section>
      
    </>
  );
};

export default HomePage;
