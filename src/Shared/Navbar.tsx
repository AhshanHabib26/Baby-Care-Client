"use client";

import {
  Badge,
  Box,
  Container,
  Divider,
  Drawer,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import logoImg from "../assets/icons/logo.png";
import Image from "next/image";
import Link from "next/link";
import {
  AlignJustify,
  BaggageClaim,
  Headset,
  Heart,
  Home,
  LayoutDashboard,
  ShoppingBasket,
  ShoppingCart,
  User,
  UserRound,
} from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="bg-[#0C1734] text-white">
      <Container>
        <Stack
          display="flex"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          padding="15px 5px"
        >
          <Box component={Link} href="/" display="flex" alignItems="center">
            <Image src={logoImg} width={30} height={30} alt="Website Logo" />
            <Typography variant="h6" component="h2" marginLeft="3px">
              Baby Care
            </Typography>
          </Box>
          <Stack>
            <Box>
              <div className=" hidden lg:block">
                <div className=" flex gap-4">
                  <Typography component={Link} href="/">
                    Home
                  </Typography>
                  <Typography component={Link} href="/products">
                    Products
                  </Typography>
                  <Typography component={Link} href="/flash-sale">
                    Flash Sale
                  </Typography>
                  <Typography component={Link} href="/about-us">
                    About Us
                  </Typography>
                  <Typography component={Link} href="/contact-us">
                    Contact Us
                  </Typography>
                  <Typography component={Link} href="/dashboard/all-products">
                    Dashboard
                  </Typography>
                  <Divider
                    orientation="vertical"
                    variant="fullWidth"
                    flexItem
                    sx={{ borderColor: "#fff", opacity: 0.5 }}
                  />
                  <Stack
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    gap={2}
                  >
                    <UserRound className=" cursor-pointer" size={25} />
                    <Badge badgeContent={0} color="primary" showZero>
                      <Heart className=" cursor-pointer " size={25} />
                    </Badge>
                    <Badge badgeContent={0} color="primary" showZero>
                      <ShoppingCart className=" cursor-pointer" size={25} />
                    </Badge>
                  </Stack>
                </div>
              </div>
              <div className=" block lg:hidden">
                <AlignJustify
                  onClick={toggleDrawer(true)}
                  className=" cursor-pointer"
                />
                <div>
                  <Drawer
                    open={open}
                    onClose={toggleDrawer(false)}
                    PaperProps={{
                      style: {
                        width: "220px",
                        padding: "10px",
                      },
                    }}
                  >
                    <Box display="flex" flexDirection="column" gap={1}>
                      <Box display="flex">
                        <Home size={20} className="mr-1" />
                        <Typography component={Link} href="/">
                          Home
                        </Typography>
                      </Box>
                      <Box display="flex">
                        <ShoppingBasket size={20} className="mr-1" />
                        <Typography component={Link} href="/products">
                          Products
                        </Typography>
                      </Box>
                      <Box display="flex">
                        <BaggageClaim size={20} className="mr-1" />
                        <Typography component={Link} href="/flash-sale">
                          Flash Sale
                        </Typography>
                      </Box>
                      <Box display="flex">
                        <User size={20} className="mr-1" />
                        <Typography component={Link} href="/about-us">
                          About Us
                        </Typography>
                      </Box>
                      <Box display="flex">
                        <Headset size={20} className="mr-1" />
                        <Typography component={Link} href="/contact-us">
                          Contact Us
                        </Typography>
                      </Box>
                      <Box display="flex">
                        <LayoutDashboard size={20} className="mr-1" />
                        <Typography
                          component={Link}
                          href="/dashboard/all-products"
                        >
                          Dashboard
                        </Typography>
                      </Box>
                    </Box>
                    <Divider
                      orientation="horizontal"
                      variant="fullWidth"
                      flexItem
                      sx={{
                        borderColor: "#363636",
                        opacity: 0.2,
                        margin: "15px 0px",
                      }}
                    />
                    <Stack
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      gap={2}
                    >
                      <UserRound className=" cursor-pointer" size={25} />
                      <Badge badgeContent={0} color="info" showZero>
                        <Heart className=" cursor-pointer " size={25} />
                      </Badge>
                      <Badge badgeContent={0} color="info" showZero>
                        <ShoppingCart className=" cursor-pointer" size={25} />
                      </Badge>
                    </Stack>
                  </Drawer>
                </div>
              </div>
            </Box>
          </Stack>
        </Stack>
      </Container>
      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(2px)",
            zIndex: 999,
          }}
          onClick={toggleDrawer(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
