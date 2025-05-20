"use client";
import React, { useState } from "react";
import { FaBitcoin, FaCheckCircle } from "react-icons/fa";
import { SiBinance, SiEthereum } from "react-icons/si";
import { MdOutlineSwapHoriz } from "react-icons/md";

const steps = [
  {
    title: "Create a Viper Exchange Account",
    desc: "Sign up on Viper Exchange if you do not have an account from Viper Exchange or log in with your Wallet ID if you already have an account",
  },
  {
    title: "Verify Your Account",
    desc: "Verify your account with 2FA using an exclusive OTP that would be sent to your email",
  },
  {
    title: "Buy Cryptocurrency",
    desc: "Buy/Sell required amount of crypto by choosing a currency pair and sending cash to the account number that will be provided alongside your unique reference number",
  },
];

const tabs = ["Buy", "Sell", "Convert"];

const BuySellSteps = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className="w-full flex flex-col items-center justify-center py-10 sm:py-20 bg-gradient-to-b from-[#150A2A] to-[#1B0B3A]">
      <div className="container flex max-lg:flex-col-reverse justify-between gap-10 lg:gap-6 w-full items-center">
        {/* Left: Card */}
        <div className="bg-[#1B133A] border border-[#2D2150] rounded-2xl p-6 sm:p-8 shadow-lg w-full lg:w-[45%] ">
          {/* Tabs */}
          <div className="flex items-center gap-6 mb-6">
            {tabs.map((tab, idx) => (
              <button
                key={tab}
                onClick={() => setActiveTab(idx)}
                className={`text-lg font-semibold pb-2 border-b-2 transition-all ${
                  activeTab === idx
                    ? "text-white border-[#7B2FF2]"
                    : "text-[#bdb7e2] border-transparent hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Value */}
          <div className="flex items-center gap-2 text-4xl font-bold text-white mb-2">
            <span className="text-2xl">₦</span>0
            <span className="ml-auto flex items-center gap-2 text-base font-semibold text-[#bdb7e2]">
              <SiBinance className="text-yellow-400 text-xl" /> BNB
            </span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs text-[#bdb7e2]">
              Eligible to earn 2.34% APY
            </span>
          </div>
          <div className="mb-6">
            <button className="bg-[#2D2150] text-xs text-white px-4 py-1 rounded-full font-semibold">
              One time purchase
            </button>
          </div>
          {/* Buy Details */}
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="bg-[#23204A] p-2 rounded-full">
                <FaBitcoin className="text-yellow-400 text-xl" />
              </span>
              <div className="flex flex-col flex-1">
                <span className="text-white font-semibold text-sm">Buy</span>
                <span className="text-xs text-[#bdb7e2]">Bitcoin | BNB</span>
              </div>
              <span className="text-white font-semibold ml-auto">
                ₦10,000.31
              </span>
              <span className="ml-2 text-[#bdb7e2]">Price</span>
              <MdOutlineSwapHoriz className="ml-2 text-[#7B2FF2] text-lg" />
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-[#23204A] p-2 rounded-full">
                <SiEthereum className="text-blue-400 text-xl" />
              </span>
              <div className="flex flex-col flex-1">
                <span className="text-white font-semibold text-sm">
                  Pay with
                </span>
                <span className="text-xs text-[#bdb7e2]">Avalanche | AVAX</span>
              </div>
              <MdOutlineSwapHoriz className="ml-auto text-[#7B2FF2] text-lg" />
            </div>
          </div>
          <button className="w-full py-3 bg-[#7B2FF2] hover:bg-[#5800FF] text-white font-semibold rounded-lg text-lg shadow-lg transition-all mt-2">
            Buy
          </button>
        </div>
        {/* Right: Steps */}
        <div className="flex flex-col items-start justify-center w-full lg:w-[45%]">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Buy/Sell <span className="text-[#7B2FF2]">Crypto</span> in Easy
            Steps
          </h2>
          <div className="flex flex-col gap-8 ">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <span className="mt-1">
                  <FaCheckCircle className="text-[#7B2FF2] text-2xl" />
                </span>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[#bdb7e2] text-sm font-medium lg:max-w-md">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuySellSteps;
