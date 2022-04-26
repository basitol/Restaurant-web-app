import React from "react";
import "./Homepage.css";
import bg from "../../assets/burger.png";

const HomePage = () => {
  return (
    <>
      <section className="flex">
        <div></div>
        <div>
          <img src={bg} />
        </div>
      </section>
    </>
  );
};

export default HomePage;
