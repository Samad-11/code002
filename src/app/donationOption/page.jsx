import CategoryCard from "@/components/CategoryCard";
import React from "react";
import Image from "next/image";
import img1 from "../../../public/sampleImage.jpg";
import img2 from "../../../public/bloodCategory.jpg";
import img3 from "../../../public/clothCategory.jpg";
import img4 from "../../../public/foodCategory.png";
import img5 from "../../../public/otherCategory.jpg";
import img6 from "../../../public/toyCategory.png";
import DynamicBallBG from "@/components/DynamicBallBG";
import ele1 from "../../../public/ele2.png";

const donationPage = () => {
  return (
    <section className="relative">
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
      <figure className="absolute -bottom-40 -right-32">
        <Image src={ele1} alt="ele" />
      </figure>
    </section>
  );
};

export default donationPage;
