import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import FlashSale from "@/components/FlashSale";
import Footer from "@/components/Footer";
import Products from "@/components/Products";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <FlashSale />
      <Categories />
      <Products />
      <Footer/>
    </div>
  );
};

export default HomePage;
