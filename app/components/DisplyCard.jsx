"use client";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { sampleData } from "@/public/data/smaple";
import { AppContext } from "../context/myContext";

export default function DisplyCard() {
  const [update, setUpdate] = useState(false); // 更新フラグ
  const [data, setData] = useState([]);
  const { text } = useContext(AppContext);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/user/get-task")
      .then((res) => {
        console.log(res.data);
        if (200 === res.status) {
          setData(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [text, update]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/api/user/task/${id}`)
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          alert("item deleted");
          setUpdate(!update);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {data.map((item) => (
        <div className="w-[190px] h-[200px]  shadow-2xl rounded-lg bg-[] text-black flex flex-col justify-center p-4 ">
          <div className="w-[50px] h-full border flex   ">
            <p> {item.title} </p>
          </div>
          <div className="flex gap-x-2">
            <button className="w-full h-10  rounded-xl p-2  border text-black border-black hover:border-[2px] ">
              completed
            </button>
            <button
              className="w-full h-10 rounded-xl p-2 border text-black border-black hover:border-[2px] "
              onClick={() => handleDelete(item._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
