import React from "react";

const FormContact = () => {
  return (
    <div className="form p-4">
      <h1 className="text-2xl font-semibold text-secondary  text-center mb-5">
        Contact Us
      </h1>
      <form action="">
        <input
          type="text"
          name="Subject"
          id=""
          placeholder="Query's Subject"
          className=" border-green-600 border-2 w-full rounded-full p-3 placeholder:text-center text-2xl mb-2"
        />
        <input
          type="text"
          name="message"
          id=""
          placeholder="Please Elaborate your query "
          className=" border-green-600 border-2 w-full rounded-full p-3 placeholder:text-center text-2xl mb-2"
        />
        <button
          type="submit"
          className="btn w-full rounded-full hover:border-green-600 hover:border text-2xl hover:bg-white bg-none border-2 "
        >
          Send Query
        </button>
      </form>
    </div>
  );
};

export default FormContact;
