"use client";
import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="container w-full flex flex-col items-center justify-center py-16 bg-gradient-to-b from-[#1B0B3A] to-[#150A2A]">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center">
        Newsletter
      </h2>
      <p className="text-[#bdb7e2] text-lg mb-8 text-center max-w-xl">
        Send your email to receive our newsletter on updates on market values
        and new coins
      </p>
      <form className="w-full flex max-2xs:flex-col gap-4 justify-center">
        <div className="flex  items-center bg-[#1B133A] rounded-xl px-4 2xs:px-6 2xs:py-2 sm:py-3 w-full 2xs:max-w-2xl shadow-lg">
          <FaEnvelope className="text-[#bdb7e2] text-lg mr-3" />
          <input
            type="email"
            placeholder="Email Address"
            className="bg-transparent max-2xs:py-3.5 flex-1 outline-none text-white placeholder-[#bdb7e2] text-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="max-2xs:hidden ml-4 px-8 py-2 sm:py-3 bg-[#7B2FF2] hover:bg-[#5800FF] text-white font-semibold rounded-lg text-lg shadow-lg border-2 border-[#fff] transition-all"
          >
            Send
          </button>
        </div>
        <button
          type="submit"
          className="2xs:hidden  px-8 py-2 2xs:py-3 bg-[#7B2FF2] hover:bg-[#5800FF] text-white font-semibold rounded-lg text-lg shadow-lg border-2 border-[#fff] transition-all"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default NewsletterSection;
