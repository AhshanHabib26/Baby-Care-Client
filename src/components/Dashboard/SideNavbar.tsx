import React from "react";
import logoImg from "../../assets/icons/logo.png";
import Image from "next/image";
import { Home, Warehouse } from "lucide-react";
import Link from "next/link";

const SideNavbar = () => {
  return (
    <div className=" text-white min-h-screen">
      <div className="flex items-center">
        <Image src={logoImg} width={30} height={30} alt="Website Logo" />
        <h1 className="text-lg font-semibold ml-2">Baby Care</h1>
      </div>
      <div className=" mt-5">
        <div className="flex items-center mb-2">
          <Warehouse size={20} />
          <Link className="text-md font-medium ml-2" href="/dashboard/all-products">All Products</Link>
        </div>
        <div className="flex items-center mb-2">
          <Home size={20} />
          <Link className="text-md font-medium ml-2" href="/">Home Page</Link>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
