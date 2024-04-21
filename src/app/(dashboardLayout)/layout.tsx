"use client";

import DashboardMenu from "@/components/Dashboard/DashboardMenu";
import { useCureentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = useAppSelector(useCureentToken);
  const router = useRouter();
  if (!token) {
    return router.push("/login");
  }

  return <DashboardMenu>{children}</DashboardMenu>;
}
