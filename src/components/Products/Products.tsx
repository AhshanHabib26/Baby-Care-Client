import { getAllProductData } from "@/data/ProductData";
import ProductsCard from "@/utils/ProductsCard";
import React from "react";

const AllProducts = () => {
  const products = getAllProductData();
  return (
    <div className="ml-0 lg:ml-4">
      <div className=" flex items-center justify-between mb-5">
        <p className=" text-xl font-semibold text-[#1949C9]">
          Our Collection of Products
        </p>
        <p className="text-lg font-semibold text-gray-600">
          Showing <span className="text-red-500">1-12</span> of{" "}
          <span className="text-[#1949C9]">15</span> Items
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
        {products.map((product: any) => (
          <ProductsCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
