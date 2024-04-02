import React from "react";

export default function SignIn() {
  return (
    <div className=" w-full h-screen border flex justify-center items-center">
      <div className="w-[350px] h-[350px] rounded-lg bg-[#EBC49F] flex flex-col justify-evenly items-center">
        <h3 className="text-[25px] text-black font-bold text-center ">
          Register
        </h3>

        <div className="flex w-full border  items-center justify-between p-10">
          <form action="" className="w-full h-full flex  flex-col gap-y-5">
            <input
              type="text"
              name=""
              id=""
              placeholder="Username"
              className=" w-full h-10 rounded-2xl p-5"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Email"
              className=" w-full h-10 rounded-2xl p-5"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Password"
              className=" w-full h-10 rounded-2xl p-5"
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
          
        </div>
      </div>
    </div>
  );
}
