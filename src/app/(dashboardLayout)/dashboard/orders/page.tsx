import { getAllOrderData } from "@/data/OrderData";
import {
  Container,
  Divider,
  Typography,
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";

const OrderPage = () => {
  const order = getAllOrderData();

  return (
    <Container>
      <Typography fontSize={20} fontWeight={600} marginBottom="5px">
        Orders List
      </Typography>
      <Divider></Divider>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell>Order ID</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Payment Type</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Tracking</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {order.map((item, index) => (
                <TableRow
                  key={item.orderId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{item.product}</TableCell>
                  <TableCell>{item.orderId}</TableCell>
                  <TableCell>${item.price}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.payment}</TableCell>
                  <TableCell
                    style={{
                      color:
                        item.status === "Shipped"
                          ? "#45C560"
                          : item.status === "Delivered"
                          ? "#007bff"
                          : item.status === "Processing"
                          ? "#FF5733"
                          : "",
                    }}
                  >
                    {item.status}
                  </TableCell>

                  <TableCell>{item.tracking}</TableCell>
                  <TableCell>
                    <VisibilityIcon sx={{ fontSize: 20, color: "#363636" }} />
                    <EditIcon sx={{ fontSize: 20, color: "#007bff", mx: "5px" }} />
                    <DeleteIcon sx={{ fontSize: 20, color: "#FE4444" }} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default OrderPage;
