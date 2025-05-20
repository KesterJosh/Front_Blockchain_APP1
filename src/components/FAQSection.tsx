"use client";
import React, { useState } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";

const faqs = [
  {
    question: "What is a crypto exchange?",
    answer: (
      <>
        <p>
          A Cryptocurrency platform is one designed for trading
          cryptocurrencies. On a crypto exchange platform, people can buy, sell
          and convert cryptocurrencies.
        </p>
        <p className="mt-2">
          A Cryptocurrency platform is one designed for trading
          cryptocurrencies. On a crypto exchange platform, people can buy, sell
          and convert cryptocurrencies.
        </p>
      </>
    ),
  },
  {
    question: "How to trade on Viper exchange?",
    answer: (
      <>
        <p>
          To trade on Viper exchange, create an account, verify your identity,
          deposit funds, and use the trading interface to buy or sell
          cryptocurrencies.
        </p>
      </>
    ),
  },
  {
    question: "How to order a token?",
    answer: (
      <>
        <p>
          To order a token, search for the token on the Viper exchange, select
          the trading pair, enter the amount, and place your order.
        </p>
      </>
    ),
  },
  {
    question: "How to track prices and market value?",
    answer: (
      <>
        <p>
          Track prices and market value using the Viper exchange dashboard,
          which provides real-time data and analytics for all supported
          cryptocurrencies.
        </p>
      </>
    ),
  },
];

const FAQSection = () => {
  const [selected, setSelected] = useState(0);
  const [search, setSearch] = useState("");

  return (
    <section className="w-full flex flex-col items-center justify-center py-20 bg-gradient-to-b from-[#150A2A] to-[#1B0B3A]">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-[#bdb7e2] text-lg mb-10 max-w-2xl mx-auto text-center">
          Provides concise and informative answers to a wide range of questions
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-12 2xl:gap-16 items-stretch">
          {/* Left: Search and Accordion */}
          <div>
            <div className="flex items-center bg-[#1B133A] border border-[#2D2150] rounded-xl px-4 py-2 mb-6 w-full ">
              <FaSearch className="text-[#bdb7e2] mr-2" />
              <input
                type="text"
                placeholder="Ask a Question"
                className="bg-transparent flex-1 outline-none text-white placeholder-[#bdb7e2]"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="ml-2 px-6 py-2 bg-[#7B2FF2] hover:bg-[#5800FF] text-white font-semibold rounded-lg text-base shadow-lg transition-all">
                Send
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {faqs.map((faq, idx) => (
                <div key={idx}>
                  <button
                    className={`w-full text-left px-4 py-4 rounded-lg font-semibold text-white bg-[#23104B] border border-[#2D2150] flex items-center justify-between transition focus:outline-none ${
                      selected === idx ? "bg-[#2D2150]" : ""
                    }`}
                    onClick={() => setSelected(idx)}
                  >
                    {faq.question}
                    <FaChevronDown
                      className={`ml-2 transition-transform ${
                        selected === idx ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* Right: Answer */}
          <div className="bg-[#23104B] border border-[#2D2150] rounded-2xl p-8 shadow-lg min-h-[260px] h-full flex flex-col">
            <h3 className="text-white text-xl font-bold mb-4">
              {faqs[selected].question}
            </h3>
            <div className="text-[#bdb7e2] text-base font-medium">
              {faqs[selected].answer}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
