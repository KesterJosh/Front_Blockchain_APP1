import React from "react";
import Exchange from "./Exchange";
import TradingStats from "./TradingStat";
import BillManagementCard from "./BillManagementCard";

const Cards = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <Exchange />
      <TradingStats />
      <BillManagementCard />
    </div>
  );
};

export default Cards;
