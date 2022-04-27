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
      <section>
        <div>
          <p>WHAT THEY SAY</p>
          <h1><strong>What Our Customer </strong></h1>
          <h1><strong>Say About Us</strong></h1>
        </div>
        <div>
          <img src="" alt=""/>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
          <p>Dolore odit reprehenderit culpa quisquam. Doloribus qui suscipit repellat </p>
          <p>molestiae distinctio iusto atque temporibus expedita et! Magnam laborum et cupiditate dolore harum</p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
