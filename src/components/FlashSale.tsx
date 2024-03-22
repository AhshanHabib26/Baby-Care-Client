import { getAllProductData } from "@/data/ProductData";
import ProductsCard from "@/utils/ProductsCard";
import { Button, Container, Stack, Typography } from "@mui/material";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const FlashSale = () => {
  const products = getAllProductData();

  return (
    <Container>
      <Stack
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        marginTop="60px"
        marginBottom="40px"
      >
        <Typography sx={{ fontSize: "22px", fontWeight: "bold" }}>
          Flash Sale
        </Typography>
        <Button component={Link} href="/flash-sale">
          View All <ChevronRight size={20} />{" "}
        </Button>
      </Stack>
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5 mx-auto">
        {products.slice(0, 4).map((product: any) => (
          <ProductsCard product={product} key={product.id} />
        ))}
      </div>
    </Container>
  );
};

export default FlashSale;
