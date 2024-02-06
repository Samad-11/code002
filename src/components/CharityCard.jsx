import React from "react";

const CharityCard = ({ image, title, cat, isVerified, dist }) => {
  let date = new Date();

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="h-72">
        <img src={`https://source.unsplash.com/${image}`} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {cat}
          <div className="badge badge-secondary">
            {date.getDate()}-{date.getMonth()}-{date.getFullYear()}
          </div>
        </h2>
        <p>{title}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{dist}</div>
          <div className="badge badge-outline">
            {isVerified ? "Verified" : "Not Verified"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharityCard;
