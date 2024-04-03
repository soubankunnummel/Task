"use client";
import axios from "axios";
import cookie from 'js-cookie'

const Axios = axios.create({
  // baseURL: "http://localhost:8080/api/user",
  baseURL: "https://task-server-571w.onrender.com/api/user",
  headers: {
    "Content-Type": "application/json",
    Authorization: cookie.get("token"),
  },
});   

export default Axios;
