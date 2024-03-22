import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/libs/providers/Providers";
import Navbar from "@/Shared/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baby Care by Ahshan Habib",
  description: "Provides an Best Baby Care Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </body>
      </html>
    </Providers>
  );
}
