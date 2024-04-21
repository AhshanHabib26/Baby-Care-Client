"use server";

export const userRegister = async (data: any) => {
  const res = await fetch("https://baby-care-server-azure.vercel.app/api/v1/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  const userInfo = await res.json();
  console.log(userInfo)
  return userInfo;
};
