import React from "react";
import Image from "next/image";

const Carousel1Item = ({ image }) => {
  return (
    <div className="carousel-item  w-1/3 mx-3">
      <div className="card  w-full bg-base-100 shadow-xl  ">
        <figure>
          <Image src={image} alt="NGO" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">NSS</h2>
          <p>
            The National Service Scheme is an Indian government sector public
            service program conducted by the Ministry of Youth Affairs and
            Sports of the Government of India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carousel1Item;
