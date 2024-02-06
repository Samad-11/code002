import Image from "next/image";
import heart from "../../public/hero-donation-image.png";
import ele1 from "../../public/ele1.png";
import ele2 from "../../public/ele2.png";
import ele3 from "../../public/ele3.png";
import ele4 from "../../public/ele4.png";
import UiButton from "./UiButton";
const HeroBanner = () => {
  return (
    <div className="w-screen flex items-center justify-between">
      <div id="left-hero" className="p-4 ">
        <h1 className="text-6xl font-bold">Charity and donation</h1>
        <p className="font-semibold mt-4">
          Donation is not just about giving it is about making a change.
        </p>
      </div>
      <div id="right-hero" className="p-4 overflow-hidden">
        <figure className="absolute -top-44 -right-64 ">
          <Image src={ele1} alt="ele" className="bg-blend-screen" />
        </figure>
        <figure className="absolute -bottom-36 -right-40 ">
          <Image src={ele2} alt="ele" className="bg-blend-screen" />
        </figure>
        <figure className="absolute -bottom-36 -left-40 ">
          <Image src={ele3} alt="ele" className="bg-blend-screen" />
        </figure>
        <figure className="absolute -z-30 -top-36 -left-40 ">
          <Image src={ele4} alt="ele" className="bg-blend-screen" />
        </figure>
        <Image
          src={heart}
          alt="hero-banner-image"
          className="bg-blend-multiply"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
