import CharityCard from "@/components/CharityCard";
import React from "react";

const page = () => {
  return (
    <div className="">
      <h1 className="text-secondary font-extrabold text-4xl text-center">
        All Listing
      </h1>
      <div className="flex flex-wrap gap-3 my-6 ml-44">
        <CharityCard
          image={"pizza-on-chopping-board-MqT0asuoIcU"}
          cat={"Food"}
          title={"We want to donate a slice of pizza"}
          dist={"3km"}
          isVerified={true}
        />
        <CharityCard
          image={"closeup-of-hanged-shirts-on-rack-tvG4WvjgsEY"}
          cat={"Cloth"}
          title={"Anyone want my old cloths"}
          dist={"7km"}
          isVerified={false}
        />
        <CharityCard
          image={"green-and-brown-robot-toy-NHIP7M3EB9w"}
          cat={"Toy"}
          title={"Not playing with him anymore"}
          dist={"2km"}
          isVerified={true}
        />
        <CharityCard
          image={"white-and-yellow-rabbit-plush-toy-aUkYaG12Dgs"}
          cat={"Toy"}
          title={"My childhood best friend"}
          dist={"1km"}
          isVerified={true}
        />

        <CharityCard
          image={"three-assorted-color-denim-bottoms-m1m2EZOZVwA"}
          cat={"Cloth"}
          title={"They are now tight for me"}
          dist={"250m"}
          isVerified={true}
        />
      </div>
    </div>
  );
};

export default page;
