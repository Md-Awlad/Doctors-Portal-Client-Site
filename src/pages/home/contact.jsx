import React from "react";
import appointment from "../../images/assets/appointment.png";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const contact = {
      name: e.target.name,
      email: e.target.email,
      message: e.target.message,
    };

    fetch("http://localhost:8000/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <section style={{ background: `url(${appointment})` }} className="py-10">
      <div className="text-center mb-6">
        <h3 className="text-primary text-xl font-bold">Contact Us</h3>
        <h3 className="md:text-3xl text-2xl text-neutral">
          Stay connect with us
        </h3>
      </div>
      <div className="text-center">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-3 justify-items-center"
        >
          <input
            type="text"
            className="p-2 rounded-md focus:outline-none border focus:border-primary w-96"
            placeholder="Enter your Name"
            name="name"
            id="name"
          />

          <input
            type="email"
            className="p-2 rounded-md focus:outline-none border focus:border-primary w-96"
            placeholder="example@gmail.com"
            name="email"
            id="email"
          />

          <textarea
            type="text"
            className="p-2 rounded-md focus:outline-none border focus:border-primary w-96"
            placeholder="Type here...."
            name="message"
            id="message"
            rows={6}
          />

          <button
            type="submit"
            className="w-96 rounded-full text-xl btn btn-primary uppercase text-neutral font-semibold bg-gradient-to-r from-secondary to-primary"
          >
            submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
