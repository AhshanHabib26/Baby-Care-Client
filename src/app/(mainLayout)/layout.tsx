import Footer from "@/components/Footer";
import Navbar from "@/Shared/Navbar";
import React from "react";
import { Toaster } from "react-hot-toast";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div>
        <Toaster />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
