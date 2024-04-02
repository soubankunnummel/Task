"use client";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {useRouter} from 'next/navigation'

export default function Login() {
  const { register, handleSubmit } = useForm();
  const router = useRouter()
  const handleLogin = async (data) => {
    try {
      const response = await axios.post(`http://localhost:8080/api/user/login`,data);
      if(response.status === 200){
        localStorage.setItem("token",response.data.token)
        alert('Login success')
        router.push("/")
      }
    } catch (error) {
        console.log(error)
    }
  };
  return (
    <div className=" w-full h-screen border flex justify-center items-center">
      <div className="w-[350px] h-[350px] rounded-lg bg-[#EBC49F] flex flex-col justify-evenly items-center">
        <h3 className="text-[25px] text-black font-bold text-center ">Login</h3>

        <div className="flex w-full border  items-center justify-between p-10">
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
        </div>
      </div>
    </div>
  );
}
