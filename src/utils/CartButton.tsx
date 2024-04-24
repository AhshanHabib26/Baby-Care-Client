"use client";
import { Box } from "@mui/material";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cart/cartSlice";
const CartButton = ({ product }: any) => {
  const dispatch = useAppDispatch();

  return (
    <Box component="button" onClick={() => dispatch(addToCart(product))}>
      <AddShoppingCartIcon
        sx={{ fontSize: 25, marginRight: "5px", color: "#EF4444" }}
      />
    </Box>
  );
};

export default CartButton;
