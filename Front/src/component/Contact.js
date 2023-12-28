import React from "react";

const Contact = () => {
  return (
    <div className="mx-64 my-10 p-5 bg-orange-300 flex flex-col items-center justify-center rounded-3xl">
      <h1 className="font-bold text-2xl mb-4">Contact Us</h1>
      <form className="flex flex-col font-bold ">
        <label htmlFor="name">NAME</label>
        <input className="border-2  bg-white opacity-80 rounded-2xl px-4 py-1" type="text" placeholder="Jiara Martins"/>

        <label htmlFor="email">EMAIL</label>
        <input className="border-2  bg-white opacity-80 rounded-2xl px-4 py-1"
          type="text"
          id="email"
          name="email"
          placeholder="hello@reallygreatsite.com"
        />
        <label  htmlFor="message">MESSAGE</label>
        <textarea className="border-2  bg-white opacity-80 px-4 py-1" id="message" name="message" 
          placeholder="Write your message here"
        />
        <button className="rounded bg-pink-800 mt-4 px-4 py-2 text-sm text-white font-bold">
          Send the message{" "}
        </button>
      </form>
      
    </div>
  );
};

export default Contact;
