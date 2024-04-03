"use client";
import React from "react";
import Link from "next/link";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const handleRegister = async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/user/reginster`,
        data
      );
      if (response.status === 201) {
        router.push("/Login");
      }
    } catch (error) {
      // alert(error.response.data.message)
      console.log(error);
    }
  };
  return (
    <div className=" w-full h-screen border flex justify-center items-center">
      <div className="w-[350px] h-[350px] rounded-lg bg-[#EBC49F] flex flex-col justify-evenly items-center">
        <h3 className="text-[25px] text-black font-bold text-center ">
          Register
        </h3>

        <div className="flex w-full border flex-col  items-center justify-between p-10">
          <form
            action=""
            className="w-full h-full flex  flex-col gap-y-5"
            onSubmit={handleSubmit(handleRegister)}
          >
            <input
              type="text"
              name=""
              id=""
              placeholder="Username"
              className=" w-full h-10 rounded-2xl p-5"
              {...register("name", { required: true })}
            />
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
              value={"Register"}
              className=" w-full h-10 border  rounded-2xl hover:border-black"
            />
          </form>

          <p className="text-[13px] mt-3 ">
            Already have an account ?{" "}
            <Link href={"/Login"}>
              <span className=" hover:underline  ">Login</span>
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
