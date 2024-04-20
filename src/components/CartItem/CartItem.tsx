import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

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

const CartItem = () => {
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "600" }}>Action</TableCell>
              <TableCell sx={{ fontWeight: "600" }}>Product</TableCell>
              <TableCell sx={{ fontWeight: "600" }}>Price</TableCell>
              <TableCell sx={{ fontWeight: "600" }}>Quantity</TableCell>
              <TableCell sx={{ fontWeight: "600" }}>Subtotal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItem.map((item, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <CloseIcon sx={{ fontSize: 20 }} />
                </TableCell>
                <TableCell>
                  <Stack display="flex" flexDirection="row" alignItems="center">
                    <Image
                      src={item.image}
                      width={60}
                      height={60}
                      alt="Product Image"
                    />
                    <Typography fontSize={16}>{item.title}</Typography>
                  </Stack>
                </TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>
                  <Stack
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                      justifyItems: "center",
                      justifyContent: "space-evenly",
                      border: "1px solid #c1c1c1",
                      padding: "5px 0",
                      borderRadius: "5px",
                    }}
                  >
                    <Box>
                      <AddIcon sx={{ fontSize: 20, cursor: "pointer" }} />
                    </Box>
                    {item.quantity}
                    <Box>
                      <RemoveIcon sx={{ fontSize: 20, cursor: "pointer" }} />
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell>{item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack
        sx={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Stack
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <TextField
            label="Coupon Code"
            placeholder="Coupon code"
            variant="outlined"
          />
          <Button
            sx={{
              width: "150px",
              padding: "15px 0",
              marginLeft: "5px",
              backgroundColor: "#EF4444",
              "&:hover": {
                backgroundColor: "#EF4444",
              },
            }}
            variant="contained"
          >
            Apply Coupon
          </Button>
        </Stack>
        <Button
          sx={{
            width: "150px",
            padding: "15px 0",
            marginLeft: "5px",
            backgroundColor: "#0C1734",
            "&:hover": {
              backgroundColor: "#0C1734",
            },
          }}
          variant="contained"
        >
          Empty Cart
        </Button>
      </Stack>
    </Box>
  );
};

export default CartItem;
