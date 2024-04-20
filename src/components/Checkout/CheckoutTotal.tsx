"use client";
import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  Radio,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
const cartItem = [
  {
    title: "Baby Diapers Pack",
    price: "15.99",
    ratings: "4.5",
    brand: "Pampers",
    category: "Diapers",
    image: "https://i.ibb.co/BjzHLNs/Daipers-One.jpg",
    description:
      "Keep your baby comfortable and dry with these high-quality diapers from Pampers. Designed with soft materials and excellent absorption, ensuring a peaceful sleep for your little one.",
    flashSale: true,
    flashSaleOffer: "12.99",
    discount: "20%",
    quantity: "1",
  },
  {
    title: "Baby Bottle Set",
    price: "19.99",
    ratings: "4.7",
    brand: "Philips Avent",
    category: "Accessories",
    image: "https://i.ibb.co/JtKHZ10/Bootle-Set.jpg",
    description:
      "This set includes everything you need for feeding your baby. Made with BPA-free materials and an anti-colic system, these bottles are gentle on your baby's delicate tummy.",
    flashSale: false,
    quantity: "2",
  },
  {
    title: "Baby Bottle Set",
    price: "19.99",
    ratings: "4.7",
    brand: "Philips Avent",
    category: "Accessories",
    image: "https://i.ibb.co/JtKHZ10/Bootle-Set.jpg",
    description:
      "This set includes everything you need for feeding your baby. Made with BPA-free materials and an anti-colic system, these bottles are gentle on your baby's delicate tummy.",
    flashSale: false,
    quantity: "2",
  },
];

const CheckoutTotal = () => {
  return (
    <Box
      sx={{
        border: "1px dashed #c1c1c1",
        padding: "15px",
        borderRadius: "5px",
      }}
    >
      <Typography sx={{ fontSize: "22px", fontWeight: "600" }}>
        Your Order
      </Typography>

      <Stack
        marginTop="10px"
        marginBottom="5px"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Typography fontWeight={600}>Product</Typography>
        <Typography fontWeight={600}>Subtotal</Typography>
      </Stack>
      <Divider></Divider>
      <Box>
        {cartItem.map((item, index) => (
          <Stack
            key={index}
            sx={{
              borderBottom: "1px dashed #c1c1c1",
              margin: "10px 0",
            }}
          >
            <Box
              marginBottom={1}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography fontSize={15}>{item.title}</Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: "10px",
                  }}
                >
                  <ClearIcon sx={{ fontSize: 15, cursor: "pointer" }} />
                  <Typography fontSize={15} fontWeight={600} marginLeft="5px">
                    {item.quantity}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography fontWeight={600}>{item.price}</Typography>
              </Box>
            </Box>
          </Stack>
        ))}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography fontWeight={600}>Subtotal</Typography>
          <Typography fontWeight={600}>350.89 TK</Typography>
        </Box>
      </Box>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "10px 0",
        }}
      >
        <Typography>Estimated Shipping</Typography>
        <Typography fontWeight={600}>15TK</Typography>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "10px 0",
        }}
      >
        <Typography>Total</Typography>
        <Typography fontWeight={600}>365.89 TK</Typography>
      </Stack>
      <Box>
        <Tooltip title="Pay with cash upon delivery." arrow placement="top-end">
          <FormControlLabel
            value="end"
            control={<Radio size="small" color="warning" checked />}
            label="Cash on delivery"
          />
        </Tooltip>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Button
          fullWidth
          sx={{
            padding: "12px 0",
            backgroundColor: "#EF4444",
            "&:hover": {
              backgroundColor: "#EF4444",
            },
          }}
          variant="contained"
        >
          Place Order
        </Button>
      </Box>
    </Box>
  );
};

export default CheckoutTotal;
