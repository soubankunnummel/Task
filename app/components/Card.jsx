"use client";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../context/myContext";

export default function Card() {
  // const [text, setText] = useState("");
  const { setText } = useContext(AppContext);
  const { register, handleSubmit, reset } = useForm();
  const addTask = async (data) => {
    try {
      const respons = await axios.post(
        "http://localhost:8080/api/user/add-task",
        data
      );
      if (respons.status === 201) {
        alert("taks creted");
        setText(data);
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="mt-10">
        <h3 className="text-[30px] font-bold text-white ">Add Your Task</h3>
      </div>
      <form action="" className="w-full " onSubmit={handleSubmit(addTask)}>
        <input
          type="text"
          name=""
          id=""
          className="rounded-md w-full h-full text-start p-5 my-3"
          {...register("task", { required: true })}
        />
        <input
          type="submit"
          name=""
          value={"Submit"}
          id=""
          className="w-full h-[30px] border  rounded-lg  "
        />
      </form>
    </>
  );
}
