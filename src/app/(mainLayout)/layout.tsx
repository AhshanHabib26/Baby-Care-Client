import Footer from "@/components/Footer";
import Navbar from "@/Shared/Navbar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className=" min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
