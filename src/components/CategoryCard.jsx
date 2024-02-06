import React from "react";
import Image from "next/image";
import sample from "../../public/sampleImage.jpg";
import Link from "next/link";

const CategoryCard = ({ title, image, linkTo }) => {
  return (
    <Link
      href={`donationOption/${linkTo}`}
      className="card w-96 h-56 bg-base-100 shadow-xl image-full "
    >
      <figure>
        <Image className="cardImage" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
      </div>
    </Link>
  );
};
export default CategoryCard;
