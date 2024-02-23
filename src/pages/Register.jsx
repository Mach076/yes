import React from "react";

const Register = () => {
  const sendForm = (e) => {};
  return (
    <div className="max-w-7xl h-[90vh] mx-auto py-24">
      <div className="py-8">
        <h1 className="text-3xl font-medium">Register</h1>
      </div>
      <form onSubmit={sendForm} className="grid w-full grid-cols-2 gap-8">
        <div className="">
          <label className="text-md block" tmlFor="name">
            Title
          </label>
          <input
            type="text"
            className="px-3 mt-2 w-full py-2 rounded-md"
            placeholder="Name"
            name="name"
            id="name"
          />
        </div>

        <div className="">
          <label className="text-md block" tmlFor="name">
            Address
          </label>
          <input
            type="text"
            className="px-3 mt-2 w-full py-2 rounded-md"
            placeholder="Alia Town"
            name="name"
            id="name"
          />
        </div>
        <div className="">
          <label className="text-md block" tmlFor="name">
            Phone
          </label>
          <input
            type="tel"
            className="px-3 mt-2 w-full py-2 rounded-md"
            placeholder="+92...."
            name="name"
            id="name"
          />
        </div>

        <div className="">
          <label className="text-md block" tmlFor="name">
            Card Number
          </label>
          <input
            type="number"
            className="px-3 mt-2 w-full py-2 rounded-md"
            placeholder="1234"
            name="name"
            id="name"
          />
        </div>

        <div className="col-span-2">
          <label className="text-md block" tmlFor="name">
            Description
          </label>
          <textarea
            type="number"
            className="px-3 mt-2 min-h-[250px] w-full py-2 rounded-md"
            placeholder="This is cool"
            name="name"
            id="name"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-36 rounded-md text-white h-10 bg-indigo-700"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Register;
