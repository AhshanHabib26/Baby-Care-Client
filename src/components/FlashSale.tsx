import { getAllFlashProductData } from "@/data/FlashProductData";
import { IProduct } from "@/types/type.global";
import ProductsCard from "@/utils/ProductsCard";
import { Button, Container, Stack, Typography } from "@mui/material";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const FlashSale = async () => {
  const res = await fetch(
    "https://baby-care-server-azure.vercel.app/api/v1/products",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const data = await res.json();

  const filterData = data?.data?.filter((item: IProduct) => item.flashSale);

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
        <Typography
          sx={{ fontSize: "22px", fontWeight: "bold", color: "#0C1734" }}
        >
          Flash Sale
        </Typography>
        <Button component={Link} href="/flash-sale">
          View All <ChevronRight size={20} />{" "}
        </Button>
      </Stack>
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5 mx-auto">
        {filterData.slice(0, 4).map((product: IProduct) => (
          <ProductsCard product={product} key={product._id} />
        ))}
      </div>
    </Container>
  );
};

export default FlashSale;
