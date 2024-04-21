import { Box, Container, Typography } from "@mui/material";
import React from "react";

import OrderInfo from "@/components/Checkout/OrderInfo";
import OrderDetails from "@/components/Checkout/OrderDetails";
import BillingAddress from "@/components/Checkout/BillingAddress";

const OrderRecievedPage = () => {
  return (
    <Container>
      <Box marginTop={4}>
        <Typography>Thank you. Your order has been received.</Typography>
        <OrderInfo />
        <OrderDetails />
        <BillingAddress />
      </Box>
    </Container>
  );
};

export default OrderRecievedPage;
