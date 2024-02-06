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
      <div id="left-hero" className="p-4 mt-16">
        <p className="text-bold font-mono text-black text-4xl m-5">
          Welcome to{" "}
          <span className="text-6xl font-extrabold"> Donation द्वार</span>
        </p>
        <h1 className="text-9xl font-bold">Charity and Donation</h1>
        <p className="font-semibold mt-4 text-4xl">
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
        <figure className="absolute -z-10 -bottom-36 -left-40 ">
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
