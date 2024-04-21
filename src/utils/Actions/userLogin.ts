"use server";

export const userLogin = async (data: any) => {
  const res = await fetch("https://baby-care-server-azure.vercel.app/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  const userInfo = await res.json();

  return userInfo;
};
