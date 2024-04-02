"use client";
import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:8080/api/user",
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  },
});   

export default Axios;
