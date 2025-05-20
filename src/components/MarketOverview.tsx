import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { SiDecentraland } from "react-icons/si";
import { GiTwoCoins } from "react-icons/gi";
import { FaCircle } from "react-icons/fa";

const hotList = [
  {
    icon: <SiDecentraland className="text-pink-400 text-2xl" />,
    name: "MANA",
    desc: "Decentralized",
    price: "$0.4032",
    change: "+0.27",
    changeColor: "text-green-400",
  },
  {
    icon: <GiTwoCoins className="text-purple-400 text-2xl" />,
    name: "IMX",
    desc: "Immutable X",
    price: "$0.0104",
    change: "-0.44%",
    changeColor: "text-red-400",
  },
];

const newCoins = [
  {
    icon: <FaCircle className="text-purple-400 text-2xl" />,
    name: "ZKJ",
    desc: "Flyhedra",
    price: "$1.11",
    change: "+0.27",
    changeColor: "text-green-400",
  },
  {
    icon: <FaCircle className="text-blue-400 text-2xl" />,
    name: "ULTI",
    desc: "Ultiverse",
    price: "$0.01044583",
    change: "-0.44",
    changeColor: "text-red-400",
  },
];

const gainers = [
  {
    icon: (
      <span className="bg-green-400 text-white px-3 py-1 rounded-full text-xs font-bold">
        USDT
      </span>
    ),
    value: "$100",
  },
  {
    icon: (
      <span className="bg-blue-400 text-white px-3 py-1 rounded-full text-xs font-bold">
        MKR
      </span>
    ),
    value: "$100",
  },
  {
    icon: (
      <span className="bg-yellow-400 text-white px-3 py-1 rounded-full text-xs font-bold">
        BNB
      </span>
    ),
    value: "$100",
  },
  {
    icon: (
      <span className="bg-yellow-200 text-gray-800 px-3 py-1 rounded-full text-xs font-bold">
        USD
      </span>
    ),
    value: "$100",
  },
  {
    icon: (
      <span className="bg-blue-300 text-white px-3 py-1 rounded-full text-xs font-bold">
        ETH
      </span>
    ),
    value: "$100",
  },
  {
    icon: (
      <span className="bg-blue-200 text-white px-3 py-1 rounded-full text-xs font-bold">
        LTC
      </span>
    ),
    value: "$100",
  },
  {
    icon: (
      <span className="bg-pink-400 text-white px-3 py-1 rounded-full text-xs font-bold">
        DOT
      </span>
    ),
    value: "$100",
  },
];

const MarketOverview = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 bg-gradient-to-b from-[#1B0B3A] to-[#150A2A]">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Today&apos;s Crypto <span className="text-[#7B2FF2]">Market</span>
        </h2>
        <p className="text-[#bdb7e2] text-lg mb-10 max-w-2xl">
          Today&apos;s crypto market is highly dynamic, with fluctuating prices
          and investor&apos;s sentiment
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Hot List & New Coins */}
          <div className="flex flex-col gap-6">
            {/* Hot List */}
            <div className="bg-[#1B133A] border border-[#2D2150] rounded-2xl p-4 xs:p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-[#2D2150] text-white px-3 py-1 rounded-lg text-sm font-semibold">
                  Hot List
                </span>
                <FaChevronDown className="text-[#bdb7e2] text-xs" />
              </div>
              {hotList.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-3 border-b border-[#2D2150] last:border-b-0"
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <div>
                      <div className="text-white font-semibold text-base">
                        {item.name}
                      </div>
                      <div className="text-xs text-[#bdb7e2]">{item.desc}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-white font-semibold text-base">
                      {item.price}
                    </span>
                    <span className={`text-xs ${item.changeColor}`}>
                      {item.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {/* New Coins */}
            <div className="bg-[#1B133A] border border-[#2D2150] rounded-2xl p-4 xs:p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-[#2D2150] text-white px-3 py-1 rounded-lg text-sm font-semibold">
                  New Coins
                </span>
                <FaChevronDown className="text-[#bdb7e2] text-xs" />
              </div>
              {newCoins.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-3 border-b border-[#2D2150] last:border-b-0"
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <div>
                      <div className="text-white font-semibold text-base">
                        {item.name}
                      </div>
                      <div className="text-xs text-[#bdb7e2]">{item.desc}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-white font-semibold text-base">
                      {item.price}
                    </span>
                    <span className={`text-xs ${item.changeColor}`}>
                      {item.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right: Top Gainers */}
          <div className="bg-[#1B133A] border border-[#2D2150] rounded-2xl p-4 xs:p-6 shadow-lg flex flex-col gap-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#2D2150] text-white px-3 py-1 rounded-lg text-sm font-semibold">
                Top Gainers
              </span>
              <FaChevronDown className="text-[#bdb7e2] text-xs" />
            </div>
            {/* Crypto Chips Row */}
            <div className="flex flex-wrap gap-3 justify-center items-center mb-6 relative">
              {gainers.map((g, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  {g.icon}
                  <span className="text-xs text-[#bdb7e2] mt-1">{g.value}</span>
                </div>
              ))}
              {/* Central Logo */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="rounded-full bg-[#23104B] border-4 border-[#7B2FF2] shadow-xl flex items-center justify-center w-20 h-20">
                  <SiDecentraland className="text-5xl text-[#7B2FF2]" />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-[#7B2FF2] opacity-30 animate-pulse"></div>
              </div>
            </div>
            {/* Gainers List */}
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
              {[...hotList, ...hotList].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between bg-[#23104B] rounded-xl px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <div>
                      <div className="text-white font-semibold text-base">
                        {item.name}
                      </div>
                      <div className="text-xs text-[#bdb7e2]">{item.desc}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-white font-semibold text-base">
                      {item.price}
                    </span>
                    <span className={`text-xs ${item.changeColor}`}>
                      {item.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOverview;
