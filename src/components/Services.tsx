import React from "react";
import { FaExchangeAlt, FaTags } from "react-icons/fa";
import { MdOutlineSwapHoriz, MdOutlineShowChart } from "react-icons/md";
import { RiRepeatLine } from "react-icons/ri";
import { TbReorder } from "react-icons/tb";

const services = [
  {
    icon: <FaExchangeAlt size={38} className="text-[#6C63FF]" />, // Buy
    title: "Buy",
    desc: "You can buy cryptocurrencies with cash or with other crypto coins",
  },
  {
    icon: <MdOutlineSwapHoriz size={38} className="text-[#6C63FF]" />, // Sell
    title: "Sell",
    desc: "You can sell your cryptocurrencies for cash to the platform or other users",
  },
  {
    icon: <RiRepeatLine size={38} className="text-[#6C63FF]" />, // Convert
    title: "Convert",
    desc: "You can trade and swap your cryptocurrencies for other coins",
  },
  {
    icon: <FaTags size={38} className="text-[#6C63FF]" />, // Presale
    title: "Presale",
    desc: "We are working tirelessly to expand Tripper coin utility so you can preorder",
  },
  {
    icon: <MdOutlineShowChart size={38} className="text-[#6C63FF]" />, // Perpetual Trading
    title: "Perpetual Trading",
    desc: "You can trade and swap Tripper Coins for cash.",
  },
  {
    icon: <TbReorder size={38} className="text-[#6C63FF]" />, // Advanced Orderbook
    title: "Advanced Orderbook",
    desc: "Access to the market value of other coins to help drive your decisions in coin trade",
  },
];

const Services = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 bg-gradient-to-b from-[#1B0B3A] to-[#150A2A]">
      <div className="container flex flex-col items-center text-center mb-12">
        <span className="text-[#A576FF] text-lg font-medium mb-2">
          Crypto & Trading
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Explore Our Services
        </h2>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-6xl">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start bg-[#1B133A] border border-[#2D2150] rounded-2xl p-8 shadow-lg min-h-[220px] transition hover:scale-[1.03] hover:shadow-2xl"
          >
            <div className="mb-6">{service.icon}</div>
            <h3 className="text-white text-xl font-bold mb-2">
              {service.title}
            </h3>
            <p className="text-[#bdb7e2] text-base font-medium">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
