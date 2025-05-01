import React from "react";

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto text-center p-8">
      <h1 className="font-bold text-3xl mb-6">Contact Us</h1>
      <form className="flex flex-col items-center gap-6">
        <div className="flex gap-4 w-full justify-center">
          <input
            type="text"
            placeholder="Name"
            className="flex-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="flex-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <textarea
          placeholder="Message"
          className="w-full border border-gray-300 rounded-md p-3 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-8 py-3 font-semibold transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;