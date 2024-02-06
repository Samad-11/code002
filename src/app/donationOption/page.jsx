import CategoryCard from "@/components/CategoryCard";
import React from "react";
import img1 from "../../../public/sampleImage.jpg";
import img2 from "../../../public/bloodCategory.jpg";
import img3 from "../../../public/clothCategory.jpg";
import img4 from "../../../public/foodCategory.png";
import img5 from "../../../public/otherCategory.jpg";
import img6 from "../../../public/toyCategory.png";
import DynamicBallBG from "@/components/DynamicBallBG";

const donationPage = () => {
  return (
    <section>
      {/* <DynamicBallBG /> */}
      <div className="grid grid-cols-3 p-5">
        <div className="py-2">
          <CategoryCard title={"Food"} linkTo={"donateFood"} image={img4} />
        </div>
        <div className="py-2">
          <CategoryCard title={"Cloth"} linkTo={"donateCloth"} image={img3} />
        </div>
        <div className="py-2">
          <CategoryCard title={"Toys"} linkTo={"donateToy"} image={img6} />
        </div>
        <div className="py-2">
          <CategoryCard title={"Blood"} linkTo={"donateBlood"} image={img2} />
        </div>
        <div className="py-2">
          <CategoryCard title={"Other"} linkTo={"donateOther"} image={img5} />
        </div>
      </div>
    </section>
  );
};

export default donationPage;
