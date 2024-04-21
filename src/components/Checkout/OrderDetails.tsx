import { Box, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import CloseIcon from "@mui/icons-material/Close";

const cart = {
    items: [
      { title: "Baby Diapers Pack", price: "15.99", quantity: "1" },
      { title: "Baby Bottle Set", price: "19.99", quantity: "2" },
      { title: "Baby Bottle Set", price: "19.99", quantity: "2" },
    ],
    summary: {
      subtotal: "266.86",
      shipping: "15.00",
      total: "281.86",
      paymentMethod: "Cash on delivery",
    },
  };


const OrderDetails = () => {
    return (
        <Stack>
        <Typography fontSize={25} fontWeight={600} margin="20px 0">
          Order details
        </Typography>
        <Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 450 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.items.map((item, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        {" "}
                        <Typography>{item.title}</Typography>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginLeft: "10px",
                          }}
                        >
                          <CloseIcon sx={{ fontSize: 15 }} />
                          <Typography fontWeight={600}>
                            {item.quantity}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ fontWeight: "600" }}>
                      {item.price} TK
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Typography fontWeight={600}>Subtotal:</Typography>
                  </TableCell>
                  <TableCell sx={{ fontWeight: "600" }}>
                    {cart.summary.subtotal} TK
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Typography fontWeight={600}>Shipping:</Typography>
                  </TableCell>
                  <TableCell sx={{ fontWeight: "600" }}>
                    {cart.summary.shipping}
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Typography fontWeight={600}>Payment Method:</Typography>
                  </TableCell>
                  <TableCell sx={{ fontWeight: "600" }}>
                    {cart.summary.paymentMethod}
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Typography fontWeight={600}>Total:</Typography>
                  </TableCell>
                  <TableCell sx={{ fontWeight: "600" }}>
                    {cart.summary.total} TK
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Stack>
    );
};

export default OrderDetails;