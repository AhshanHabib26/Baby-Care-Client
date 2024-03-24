import { getAllProductData } from "@/data/ProductData";
import ProductsCard from "@/utils/ProductsCard";
import { Button, Container, Stack } from "@mui/material";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Products = () => {
  const products = getAllProductData();

  return (
    <div>
      <Container>
        <Stack
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <h1 className="text-2xl font-semibold text-[#0C1734]">
            Most Popular Products
          </h1>
          <Button component={Link} href="/products" size="large">
            View All <ChevronRight size={20} />
          </Button>
        </Stack>
        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5 mx-auto mt-10">
          {products.slice(0, 8).map((product: any) => (
            <ProductsCard product={product} key={product.id} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Products;
