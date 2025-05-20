import React from "react";
import Cards from "./cards/Cards";

const Heroarea = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-12  bg-gradient-to-b from-[#150A2A] to-[#1B0B3A]">
      {/* Hero Text */}
      <div className="w-full container flex flex-col items-center justify-center text-center gap-4 mb-12">
        <span className="text-[#A576FF] text-base font-medium mb-2">
          Unified Product, Simplified Trading
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-2">
          Trade Crypto on <span className="text-[#7B2FF2]">Viper Exchange</span>
          <br className="hidden md:block" />
          Worldwide
        </h1>
        <button className="mt-4 px-8 py-3 bg-[#7B2FF2] hover:bg-[#5800FF] text-white font-semibold rounded-lg text-lg shadow-lg transition-all">
          Get Started
        </button>
      </div>
      <Cards />
    </section>
  );
};

export default Heroarea;
