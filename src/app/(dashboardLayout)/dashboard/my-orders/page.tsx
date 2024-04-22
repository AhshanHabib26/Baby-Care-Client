
import {
  Container,
  Divider,
  Typography,
  Box,
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
import { getMyOrderData } from "@/data/UserOrderData";
import EditOffIcon from "@mui/icons-material/EditOff";

const MyOrderPage = () => {

  const order = getMyOrderData();

  return (
    <Container>
      <Typography fontSize={20} fontWeight={600} marginBottom="5px">
        All Orders List
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
            </TableRow>
          </TableHead>
          <TableBody>
            {order.map((item) => (
              <TableRow
                key={item.orderId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{item.product}</TableCell>
                <TableCell>{item.orderId}</TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell
                  style={{
                    color:
                      item.status === "Pending"
                        ? "#45C560"
                        : item.status === "Delivered"
                        ? "#007bff"
                        : "",
                  }}
                >
                  {item.status}
                </TableCell>

                {item.status === "Delivered" ? (
                  <TableCell>
                    <VisibilityIcon sx={{ fontSize: 20, color: "#363636" }} />
                    <EditOffIcon
                      sx={{ fontSize: 20, color: "#007bff", mx: "5px" }}
                    />
                  </TableCell>
                ) : (
                  <TableCell>
                    <VisibilityIcon sx={{ fontSize: 20, color: "#363636" }} />
                    <EditIcon
                      sx={{ fontSize: 20, color: "#007bff", mx: "5px" }}
                    />
                    <DeleteIcon sx={{ fontSize: 20, color: "#FE4444" }} />
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
    </Container>
  );
};

export default MyOrderPage;
