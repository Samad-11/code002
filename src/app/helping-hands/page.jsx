import Carousel1 from "@/components/Carousel1";
import React from "react";

const page = () => {
  return (
    <section className="flex justify-center items-center flex-col">
      <div className="title my-10 text-center">
        <h2 className="text-3xl font-thin underline">Our Helping Hands</h2>
      </div>
      <div className="content text-2xl font-light p-10 px-52 text-justify">
        <p>
          Welcome to <span className="text-error">Donation Dwar</span>, where
          the spirit of giving extends beyond individual efforts. We are
          thrilled to share details about our diverse network of partners,
          including NGOs, hospitals, and individuals, all united in our mission
          to make a positive impact.
        </p>
      </div>
      <div className="ngo w-2/3 shadow-2xl p-5 m-3 rounded-md shadow-black">
        <Carousel1 />
      </div>
    </section>
  );
};

export default page;
