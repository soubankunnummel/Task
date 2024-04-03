"use client";
import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import cookie from "js-cookie";

export default function CheckRoute() {
  const router = useRouter();
  useEffect(() => {
    const token = cookie.get("token");
    if (!token && router.pathname !== "/Login") {
      router.push("/Login");
    }
  }); 
  return <div></div>;
}
