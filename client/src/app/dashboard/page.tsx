/** @format */
"use client";

import {
  CheckCircle,
  Package,
  Tags,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import CardExpenseSummary from "./CardExpenseSummary";
import CardPopularProduct from "./CardPopularProduct";
import CardPurchasedSummary from "./CardPurchasedSummary";
import CardSaleSummary from "./CardSaleSummary";
import StatCard from "./StatCard";

const Dashborad = () => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows`}>
      <CardPopularProduct />
      <CardSaleSummary />
      <CardPurchasedSummary />
      <CardExpenseSummary />
      <StatCard
        title='Customer & Expenses'
        primaryIcon={<Package className='text-blue-500 w-6 h-6' />}
        dateRange='22 - 29 October 2023'
        details={[
          {
            title: "Customer Growth",
            amount: "180.00",
            changePercentage: 131,
            IconComponent: TrendingUp,
          },
          {
            title: "Expenses",
            amount: "11.00",
            changePercentage: -54,
            IconComponent: TrendingDown,
          },
        ]}
      />
      <StatCard
        title='Dues & Pending Orders'
        primaryIcon={<CheckCircle className='text-blue-500 w-6 h-6' />}
        dateRange='22 - 29 October 2023'
        details={[
          {
            title: "Dues",
            amount: "280.00",
            changePercentage: 131,
            IconComponent: TrendingUp,
          },
          {
            title: "Pending Orders",
            amount: "115",
            changePercentage: -14,
            IconComponent: TrendingDown,
          },
        ]}
      />
      <StatCard
        title='Sales & Discount'
        primaryIcon={<Tags className='text-blue-500 w-6 h-6' />}
        dateRange='22 - 29 October 2023'
        details={[
          {
            title: "Sales",
            amount: "1800.00",
            changePercentage: 20,
            IconComponent: TrendingUp,
          },
          {
            title: "Discount",
            amount: "210.00",
            changePercentage: -8,
            IconComponent: TrendingDown,
          },
        ]}
      />
    </div>
  );
};

export default Dashborad;
