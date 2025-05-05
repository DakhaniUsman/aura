"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    date: "",
    problem: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loadingToast = toast.loading("Submitting...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Submitted successfully!", { id: loadingToast });
        setFormData({
          name: "",
          number: "",
          date: "",
          problem: "",
        });
      } else {
        toast.error("Submission failed.", { id: loadingToast });
      }

      // Optionally reset form here
    } catch (err) {
      toast.error("Submission failed. Please try again.", { id: loadingToast });
    }
  };

  return (
    <div
      className="w-full min-h-[100vh] pb-[50px] flex flex-col text-center text-white gap-10 wrapper  bg-[url('/contact-mbl-bg.png')] sm:bg-[url('/contact-bg.jpg')] bg-cover bg-center"
      id="contact"
    >
      <h2 className="text-4xl text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">Contact Us</h2>
      <div className="w-full flex justify-end">
        <div className="w-full lg:w-[60%]">
          <form
            onSubmit={handleSubmit}
            className="w-[90%] md:w-[60%] rounded-2xl m-auto flex flex-col justify-start bg-white py-4"
          >
            <fieldset className="w-full flex justify-center flex-col gap-10 text-black">
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                required
                onChange={handleChange}
                className="w-[80%] m-auto py-4 bg-white rounded-[90px] px-4  shadow-xl"
                placeholder="Enter your Name*"
              />
              <input
                type="text"
                name="number"
                id="number"
                value={formData.number}
                required
                onChange={handleChange}
                className="w-[80%] m-auto py-4 bg-white rounded-[90px] px-4  shadow-xl"
                placeholder="Enter your phone number*"
              />
              <input
                type="text"
                name="date"
                id="date"
                value={formData.date}
                required
                onChange={handleChange}
                className="w-[80%] m-auto py-4 bg-white rounded-[20px] px-4 shadow-xl"
                placeholder="Appointment date* : DD-MM-YYYY"
                onFocus={(e) => {
                  e.target.type = "date";
                  setTimeout(() => {
                    e.target.showPicker?.(); // trigger date picker (modern browsers only)
                  }, 0);
                }}
                onBlur={(e) => {
                  if (!formData.date) e.target.type = "text";
                }}
              
              />

              <textarea
                name="problem"
                id="problem"
                value={formData.problem}
                required
                onChange={handleChange}
                className="w-[80%] m-auto py-4 bg-white rounded-[20px] px-4 shadow-xl"
                placeholder="What problem are you facing?"
              ></textarea>
            </fieldset>
            <button
              type="submit"
              className="w-[80%] m-auto mt-5 px-6 py-3 rounded-full font-bold border-2 border-blue-500 bg-blue-500 text-white hover:bg-transparent active:bg-transparent hover:text-blue-500 active:text-blue-500 duration-500 ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
