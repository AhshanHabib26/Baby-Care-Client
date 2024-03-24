import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import FlashSale from "@/components/FlashSale";
import Products from "@/components/Products";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <FlashSale />
      <Categories />
      <Products />
    </div>
  );
};

export default HomePage;
