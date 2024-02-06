import FormContact from "@/components/FormContact";
import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";

const contactUsPage = () => {
  return (
    <section className="w-screen flex flex-col justify-center items-center mt-12">
      <div className="grid grid-cols-2 p-5">
        <FormContact />
        <div className="contactInfo bg-stone-400 p-5 rounded-lg">
          <h1 className="text-2xl font-bold text-tertiary font-mono">
            You can also connect with us through all of these
          </h1>
          <ul className="my-5 flex justify-around">
            <li>
              <h1 className="text-2xl font-white underline font-thin text-center">
                Phone No.
              </h1>
              <h1 className="text-3xl font-bold font-mono" text-center>
                9999 999 999
              </h1>
              <div className="location">
                <p>Location : New Delhi</p>
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13997.146697219247!2d77.09797330075243!3d28.710977529610105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d014e7953d073%3A0xa1df99c8551f3812!2sJagan%20Institute%20of%20Management%20Studies%20Technical%20Campus-%20JIMS%20Rohini!5e0!3m2!1sen!2sin!4v1707188530112!5m2!1sen!2sin"
                    width="200"
                    height="300"
                    style={{ border: "0" }}
                    allowfullscreen="false"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </li>
            <li>
              <h1 className="text-2xl font-white underline font-thin text-center">
                Mail Id
              </h1>
              <h1 className="text-3xl font-bold font-mono" text-center>
                donationdwar@donate.org
              </h1>
              <div className="socialLinks text-right flex mt-48">
                <FaInstagram size={70} className="hover:text-stone-300" />
                <FaFacebook size={70} className="hover:text-stone-300" />
                <FaXTwitter size={70} className="hover:text-stone-300" />
                <FaGithub size={70} className="hover:text-stone-300" />
              </div>
            </li>
          </ul>
          {/* <ul>
            <li className="flex justify-around items-center">
              Instagram
            </li>
          </ul> */}
        </div>
      </div>
    </section>
  );
};

export default contactUsPage;
