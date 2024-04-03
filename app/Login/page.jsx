"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter, usePathname } from "next/navigation";
import cookie from "js-cookie";
import Link from "next/link";
import Axios from "../config/axios";

export default function Login() {
  const router = useRouter();
  const [err, setErr] = useState(false);

  const { register, handleSubmit } = useForm();
  const handleLogin = async (data) => {
    try {
      const response = await Axios.post(`/login`, data);
      if (response.status === 200) {
        cookie.set("token", response.data.token);
        alert("Login success");
        router.push("/");
      }
    } catch (error) {
      setErr(!err);
      console.log(error);
    }
  };
  return (
    <div className=" w-full h-screen border flex justify-center items-center">
      <div className="w-[350px] h-[350px] rounded-lg bg-[#EBC49F] flex flex-col justify-evenly items-center">
        <h3 className="text-[25px] text-black font-bold text-center ">Login</h3>

        <div className="flex w-full border  flex-col  items-center justify-between p-10">
          <form
            action=""
            className="w-full h-full flex  flex-col gap-y-5"
            onSubmit={handleSubmit(handleLogin)}
          >
            <input
              type="text"
              name=""
              id=""
              placeholder="Email"
              className=" w-full h-10 rounded-2xl p-5"
              {...register("email", { required: true })}
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              className=" w-full h-10 rounded-2xl p-5"
              {...register("password", { required: true })}
            />

            <input
              type="submit"
              name=""
              id=""
              placeholder="Password"
              value={"Login"}
              className=" w-full h-10 border  rounded-2xl hover:border-black"
            />
          </form>
          {err && (
            <p className="text-red-600 text-[12px] mt-2">
              Incorrect email or password?
            </p>
          )}
          <p className="text-[13px] mt-3 ">
            Don&apos;t have an account ?
            <Link href={"/register"}>
              <span className="hover:underline">Register</span>
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
