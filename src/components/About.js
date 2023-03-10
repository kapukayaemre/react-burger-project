import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque magnam
          totam fugiat, minima ipsam obcaecati non quam ut beatae? Natus odio
          cupiditate saepe accusamus, asperiores dolores illum, velit voluptatem
          beatae suscipit sapiente, facilis molestias aliquid fugiat vitae
          repudiandae inventore. Laboriosam facere officiis perferendis tenetur
          animi quis nisi consectetur, totam magnam.
        </p>
      </div>
    </div>
  );
}

export default About;
