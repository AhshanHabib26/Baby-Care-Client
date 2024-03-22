import SocialIcons from "@/Shared/SocialIons";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Cable, Heart, Mail, Minus, Plus } from "lucide-react";
import Link from "next/link";

const data = {
  title: "Baby Diapers Pack",
  price: "15.99",
  flashSaleOffer: "12.99",
  ratings: "4.5",
  brand: "Pampers",
  discount: "20%",
  category: "Diapers",
  description:
    "Keep your baby comfortable and dry with these high-quality diapers from Pampers. Designed with soft materials and excellent absorption, ensuring a peaceful sleep for your little one.",
};

const ProductSideInfo = () => {
  return (
    <Stack>
      <span className="text-md font-regular text-blue-500 inline-block">
        {data.brand}
      </span>
      <Box margin="10px 0">
        <h1 className=" text-2xl font-semibold">{data.title}</h1>
      </Box>
      <Box display="flex" alignItems="center">
        <p className="text-2xl font-semibold text-[#1949C9]">
          ${data.flashSaleOffer}
        </p>
        <p className=" text-xl font-medium text-gray-600 line-through ml-3">
          ${data.price}
        </p>
      </Box>
      <Box display="flex" alignItems="center" margin="10px 0">
        <p className="text-lg font-regular mr-2">Product Status:</p>
        <p className="text-md font-medium text-red-500">In stock</p>
      </Box>
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: "20px",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          sx={{
            border: "1px solid #c1c1c1",
            padding: "6px 20px",
            borderRadius: "5px",
          }}
        >
          <Minus color="#363636" size={20} />
          <h1 className="text-lg font-semibold mx-5">0</h1>
          <Plus color="#363636" size={20} />
        </Box>
        <Box>
          <Button size="large">Add to Cart </Button>
        </Box>
      </Stack>
      <hr className=" my-5 border-gray-100 border-[1px]" />
      <Stack
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center">
          <Heart size={20} color="#363636" />
          <Typography
            component={Link}
            href="/"
            sx={{
              fontSize: "15px",
              marginLeft: "5px",
              "&:hover": { color: "#1949C9" },
            }}
          >
            Add to wishlist
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Cable size={20} color="#363636" />
          <Typography
            component={Link}
            href="/"
            sx={{
              fontSize: "15px",
              marginLeft: "5px",
              "&:hover": { color: "#1949C9" },
            }}
          >
            Add to compare
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Mail size={20} color="#363636" />
          <Typography
            component={Link}
            href="/"
            sx={{
              fontSize: "15px",
              marginLeft: "5px",
              "&:hover": { color: "#1949C9" },
            }}
          >
            Ask about product
          </Typography>
        </Box>
      </Stack>
      <hr className=" my-5 border-gray-100 border-[1px]" />
      <Box>
        <Typography
          sx={{ fontSize: "18px", fontWeight: "500", color: "#363636" }}
        >
          Category: <span className="text-[#1949C9]">{data.category}</span>
        </Typography>
      </Box>
      <SocialIcons />
    </Stack>
  );
};

export default ProductSideInfo;
