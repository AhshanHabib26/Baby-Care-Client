import { Box, Stack, Typography } from "@mui/material";
import { CirclePlus } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProductsCard = ({ product }: any) => {
  return (
    <Stack
      sx={{
        padding: "10px",
        boxShadow:
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
        borderRadius: "10px",
      }}
    >
      <Box position="relative">
        <Image
          className="w-full h-[250px] object-cover mx-auto p-3 relative"
          src={product.image}
          width={200}
          height={200}
          alt="Product Image"
        />
        <p className={`${ product.discount ? "absolute top-0 right-0 p-1  text-[14px] text-center text-white bg-red-500  w-[40px] h-[30px] rounded-lg" : ""}`}>
          {`${product.discount ? product.discount : ""}`}
        </p>
      </Box>
      <Box>
        <Typography
          sx={{ fontSize: "16px", fontWeight: "bold", color: "#363636" }}
        >
          {product.title}
        </Typography>
        <Stack
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box display="flex" alignItems="center">
            <p className="text-md font-semibold text-[#1949C9]">
              ${product.flashSaleOffer}
            </p>
            <p className="text-md font-semibold line-through ml-2 text-gray-600">
              ${product.price}
            </p>
          </Box>
          <Box>
            <CirclePlus size={18} />
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default ProductsCard;
