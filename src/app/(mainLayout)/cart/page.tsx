import CartItem from "@/components/CartItem/CartItem";
import CartTotals from "@/components/CartItem/CartTotals";
import { Box, Container, Grid } from "@mui/material";
import React from "react";

const CartPage =  () => {
  

  return (
    <Container>
      <Box marginTop={5}>
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={8}>
            <CartItem />
          </Grid>
          <Grid item xs={4}>
            <CartTotals />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CartPage;
