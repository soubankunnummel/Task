"use client";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/myContext";
import Axios from "../config/axios";
import { FcOk } from "react-icons/fc";

export default function DisplyCard() {
  const [update, setUpdate] = useState(false);  
  const [data, setData] = useState([]);
  const [completed, setCompleted] = useState([]);
  const { text, status, setStatus } = useContext(AppContext);

  useEffect(() => {
    Axios.get("/get-task")
      .then((res) => {
        if (res.status === 200) {
          const completedTasks = res.data.task.filter(
            (item) => item.status === true
          );
          console.log(completedTasks)
          setCompleted(completedTasks.map((task) => task._id));
          setData(res.data.task);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [text, update]);

  useEffect(() => {
    Axios.get("/get-task")
      .then((res) => {
        if (res.status === 200) {
          const completedTasks = res.data.task.filter(
            (item) => item.status === true
          );
          console.log(completedTasks)
          setCompleted(completedTasks.map((task) => task._id));
          setData(res.data.task);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },[])

  const handleDelete = (id) => {
    Axios.delete(`/task/${id}`)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setUpdate(!update);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handeComplete = async (id) => {
    try {
      const res = await Axios.post(`/update/${id} `);
      if (res.status === 201 && res.data.status === true) {
        setStatus(true);
        setCompleted((prive) => [...prive, id]);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <>
      {data.map((item) => (
        <div
          className="w-[200px] h-[100px]  shadow-2xl rounded-lg bg-[] text-black flex flex-col justify-center p-2 "
          key={item._id}
        >
          <div className="w-[150px] h-full  flex justify-evenly  text-center  overflow-hidden  ">
            <p className="flex-1 w-[50px] "> {item.title} </p>
            {completed.includes(item._id) ? (
              <FcOk className="text-[30px]  flex-initial " />
            ) : (
              ""
            )}
          </div>

          <div className="flex gap-x-2">
            <button
              className="w-full h-10  rounded-xl p-2  border text-black border-black hover:border-[2px] "
              onClick={() => handeComplete(item._id)}
            >
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
