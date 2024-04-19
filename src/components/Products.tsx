
import { IProduct } from "@/types/type.global";
import ProductsCard from "@/utils/ProductsCard";
import { Button, Container, Stack } from "@mui/material";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Products = async () => {
  const res = await fetch(
    "https://baby-care-server-azure.vercel.app/api/v1/products",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const data = await res.json();

  return (
    <div>
      <Container>
        <Stack
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <h1 className="text-xl lg:text-2xl font-semibold text-[#0C1734]">
            Popular Products
          </h1>
          <Button component={Link} href="/products" size="large" sx={{ fontSize: "14px"}}>
            View All <ChevronRight size={18} />
          </Button>
        </Stack>
        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5 mx-auto mt-10">
          {data?.data?.slice(0, 8).map((product: IProduct) => (
            <ProductsCard product={product} key={product._id} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Products;
