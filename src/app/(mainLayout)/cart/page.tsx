"use client";

import CartItem from "@/components/CartItem/CartItem";
import CartTotals from "@/components/CartItem/CartTotals";
import { useCureentCartData } from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import { Box,  Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import Link from "next/link";

const CartPage = () => {
  const cartData = useAppSelector(useCureentCartData);

  return (
    <Container>
      <Box marginTop={5}>
        {cartData.length > 0 ? (
          <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={8}>
              <CartItem />
            </Grid>
            <Grid item xs={4}>
              <CartTotals />
            </Grid>
          </Grid>
        ) : (
          <Stack
            display="flex"
            alignItems="center"
            justifyItems="center"
            margin="120px 0"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyItems="center"
              flexDirection="column"
            >
              <RemoveShoppingCartIcon sx={{ fontSize: 80, color: "#0C1734" }} />
              <Typography sx={{ fontSize: "22px" }}>
                Your cart is currently empty.{" "}
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#0C1734",
                padding: "12px 22px",
                color: "#fff",
                cursor: "pointer",
                borderRadius: "5px",
                fontSize: "18px",
                marginTop: "10px"
              }}
              component={Link}
              href="/products"
            >
              Return to Shop
            </Box>
          </Stack>
        )}
      </Box>
    </Container>
  );
};

export default CartPage;
