"use client";

import { Box, Stack, Typography, Button } from "@mui/material";
import Logo from "../../../assets/icons/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import Divider from "@mui/material/Divider";
import BCFormProvider from "@/Form/BCFormProvider";
import BCFormInput from "@/Form/BCFormInput";
import { FieldValues } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { userLogin } from "@/utils/Actions/userLogin";
import { useAppDispatch } from "@/redux/hooks";
import { tokenDecoder } from "@/utils/jwtDecode";
import { setUser } from "@/redux/features/auth/authSlice";

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await userLogin(values);
      // console.log(res);
      if (res?.token) {
        const user = tokenDecoder(res.token);
        dispatch(setUser({ user: user, token: res?.token }));
        toast.success(res?.message, { id: "authId" });
        router.push("/");
      } else if (!res?.success) {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        margin: "20px 0",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <Image src={Logo} alt="Logo" width={40} height={40} />
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: "600",
            marginLeft: "3px",
            color: "#0C1734",
          }}
        >
          Baby Care
        </Typography>
      </Box>
      <Stack
        sx={{
          border: "1px solid #c1c1c1",
          padding: "20px",
          borderRadius: "5px",
          maxWidth: 450,
          width: "100%",
        }}
      >
        <Box marginBottom="10px">
          <Typography
            color="#0C1734"
            variant="h5"
            fontWeight={600}
            textAlign="center"
          >
            Login to Your Account
          </Typography>
          <Typography textAlign="center" fontSize="16px">
            Don&apos;t have an account?
            <Box
              component={Link}
              color="#EF4444"
              fontWeight={600}
              href="/register"
            >
              Sign Up!
            </Box>
          </Typography>
        </Box>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "20px 0",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#1877F7",
              padding: "12px 40px",
              borderRadius: "3px",
            }}
          >
            <FaFacebookF color="#fff" size={18} />
          </Box>
          <Box
            sx={{
              backgroundColor: "#007EBB",
              padding: "12px 40px",
              borderRadius: "3px",
            }}
          >
            <FaLinkedinIn color="#fff" size={18} />
          </Box>
          <Box
            sx={{
              backgroundColor: "#000",
              padding: "12px 40px",
              borderRadius: "3px",
            }}
          >
            <FaGithub color="#fff" size={18} />
          </Box>
        </Stack>
        <Divider sx={{ marginBottom: "25px" }}>Or</Divider>

        <Box>
          <BCFormProvider onSubmit={handleLogin}>
            <BCFormInput
              name="email"
              label="Email"
              required
              type="email"
              fullWidth
              size="medium"
            />
            <Box marginTop={1}>
              <BCFormInput
                name="password"
                label="Password"
                required
                type="password"
                fullWidth
                size="medium"
              />
            </Box>
            <Box sx={{ margin: "2px 0", color: "#EF4444", textAlign: "right" }}>
              Forgot Password?
            </Box>
            <Button
              sx={{
                margin: "10px 0px",
                padding: "12px 0",
                backgroundColor: "#EF4444",
                "&:hover": {
                  backgroundColor: "#EF4444",
                },
              }}
              fullWidth={true}
              type="submit"
            >
              Login
            </Button>
          </BCFormProvider>
        </Box>
      </Stack>
    </Stack>
  );
};

export default LoginPage;
