import SideNavbar from "@/components/Dashboard/SideNavbar";
import TopNavbar from "@/components/Dashboard/TopNavbar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-11">
        <div className="lg:col-span-2 hidden lg:block">
          <div className="w-full bg-[#0C1734] h-screen p-4">
            <SideNavbar />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-9 ">
          <div className="w-full lg:w-12/12 ">
            <TopNavbar />
            <div className="mx-5 my-3">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
