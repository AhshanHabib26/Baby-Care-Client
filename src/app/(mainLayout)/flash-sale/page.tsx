import { IProduct } from "@/types/type.global";
import ProductsCard from "@/utils/ProductsCard";
import { Container } from "@mui/material";
import React from "react";

const FlashSalePage = async () => {
  const res = await fetch(
    "https://baby-care-server-azure.vercel.app/api/v1/products"
  );
  const data = await res.json();

  const filterData = data?.data?.filter((item: IProduct) => item.flashSale);

  return (
    <Container>
      <div className=" flex items-center justify-between my-12">
        <p className=" text-2xl lg:text-3xl font-semibold text-gray-600">
          Flash Sale
        </p>
        <p className="text-lg font-semibold text-gray-600">
          Showing <span className="text-red-500">1-12</span> of{" "}
          <span className="text-[#1949C9]">12</span> Items
        </p>
      </div>
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5 mx-auto">
        {filterData.map((product: IProduct) => (
          <ProductsCard product={product} key={product._id} />
        ))}
      </div>
    </Container>
  );
};

export default FlashSalePage;
