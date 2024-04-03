"use client";
import React from "react";
import Cookies from "js-cookie";

export default function Logout() {
  return (
    <button
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
      onClick={() => Cookies.remove("token")}
    >
      Log out
    </button>
  );
}
