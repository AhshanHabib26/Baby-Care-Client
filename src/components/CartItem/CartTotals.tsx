"use client";

import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

const CartTotals = () => {
  return (
    <Box
      sx={{
        border: "1px dashed #c1c1c1",
        padding: "15px",
        borderRadius: "5px",
      }}
    >
      <Typography sx={{ fontSize: "22px", fontWeight: "600" }}>
        Cart Totals
      </Typography>
      <Divider></Divider>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "10px 0",
        }}
      >
        <Typography>Subtotal</Typography>
        <Typography fontSize="18px" fontWeight={600}>
          188.55 TK
        </Typography>
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
        <Typography>Estimated Shipping</Typography>
        <Typography fontSize="18px" fontWeight={600}>
          15TK
        </Typography>
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
        <Typography>Estimated Total</Typography>
        <Typography fontSize="18px" fontWeight={600}>
          250.63 TK
        </Typography>
      </Stack>
      <Box
        component={Link}
        href="/checkout"
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
          Proceed to Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default CartTotals;
