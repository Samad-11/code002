import React from "react";

const AboutPage = () => {
  return (
    <section className="w-screen ">
      <div className="heading w-screen">
        <h3 className="font-thin text-3xl text-center py-10 underline">
          About Us
        </h3>
      </div>
      <div className="container w-screen p-10 px-32 text-2xl ">
        <p>
          Welcome to Donation Dwar, where generosity meets purpose! We believe
          in the power of giving and connecting communities through the simple
          act of sharing. Our platform serves as a bridge between those with
          excess items and those in need, creating a positive impact on both
          individuals and the environment.
        </p>
      </div>
      <div className="flex justify-around">
        <div className="left flex flex-col items-center justify-center">
          <div className="text-lg font-bold  py-3 ">
            <h1 className="bg-secondary rounded-full p-4 text-center">
              Our Mission
            </h1>
          </div>
          <p className="px-52 text-justify text-lg mt-20">
            At Donation Dwar, our mission is to foster a culture of generosity
            and reduce waste by providing a platform where individuals can
            easily donate their excess items to those who can benefit from them.
            We aim to build a community that values the spirit of giving,
            creating a ripple effect of kindness and compassion.
          </p>
        </div>
        <div className="right flex flex-col items-center justify-center">
          <div className="text-lg font-bold  py-3 ">
            <h1 className="bg-secondary rounded-full p-4 text-center">
              How It Works
            </h1>
          </div>
          <ol className="list-decimal text-justify px-20 text-justify text-lg">
            <li className="mb-3">
              List Your Excess Items: Whether it's clothing, household items,
              furniture, or more, simply create a listing on our platform
              detailing the items you want to donate. You have the power to make
              a difference!
            </li>
            <li className="mb-3">
              Connect with Those in Need: Our platform connects you with
              individuals or organizations seeking the items you have to offer.
              It's a seamless way to make a positive impact on someone's life.
            </li>
            <li className="mb-3">
              Arrange Pick-Up or Drop-Off: Coordinate with the recipient to
              arrange the logistics of getting the items to them. Whether it's a
              local pick-up or drop-off point, we make it easy for you to share
              your generosity.
            </li>
          </ol>
        </div>
      </div>
      <div className="yChooseUs">
        <h1 className="text-3xl text-tertiary  font-thin text-center">
          Why Choose Donation Dwar?
        </h1>
        <div className="points grid grid-cols-3 gap-1 p-5">
          <div className="box border border-black rounded p-4  ">
            <p className="text-center font-mono text-2xl font-extralight">
              Easy and Convenient
            </p>
            <p>
              Our user-friendly platform makes it simple for you to list your
              excess items and connect with those who need them.
            </p>
          </div>
          <div className="box border border-black rounded p-4 ">
            <p className="text-center font-mono text-2xl font-extralight">
              Easy and Convenient
            </p>
            <p>
              Our user-friendly platform makes it simple for you to list your
              excess items and connect with those who need them.
            </p>
          </div>
          <div className="box border border-black   p-4 rounded">
            <p className="text-center font-mono text-2xl font-extralight">
              Easy and Convenient
            </p>
            <p>
              Our user-friendly platform makes it simple for you to list your
              excess items and connect with those who need them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
