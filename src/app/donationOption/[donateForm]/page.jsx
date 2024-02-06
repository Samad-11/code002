import React from "react";

const donateForm = ({ params }) => {
  console.log("====================================");
  console.log(params.donateForm);
  console.log("====================================");
  let category = params.donateForm.slice(6);
  return (
    <section
      className="w-screen bgImage flex flex-col justify-around items-center"
      style={{
        minHeight: "100vh",
      }}
    >
      <h1 className="text-3xl font-thin font-mono text-warning">
        Litte More Info...
      </h1>
      <form className="">
        <input
          type="text"
          placeholder={category}
          className="input input-bordered w-full my-2"
          disabled
        />
        <input
          type="text"
          placeholder={
            category == "Blood" ? "Your Blood Group" : "What you want to Donate"
          }
          className="input input-bordered input-warning w-full my-2"
        />
        {category != "Blood" && (
          <input
            type="file"
            className="file-input file-input-bordered file-input-warning w-full my-2 "
          />
        )}
        <button className="btn btn-warning w-full">
          Donate{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </form>
    </section>
  );
};

export default donateForm;
