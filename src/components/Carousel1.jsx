import React from "react";
import Image from "next/image";
import sample from "../../public/NGO1.jpeg";
import Carousel1Item from "./Carousel1Item";

const Carousel1 = () => {
  return (
    <div className="carousel carousel-end rounded-box w-full">
      <Carousel1Item image={sample} />
      <Carousel1Item image={sample} />
      <Carousel1Item image={sample} />
      <Carousel1Item image={sample} />
      <Carousel1Item image={sample} />
    </div>
  );
};

export default Carousel1;
