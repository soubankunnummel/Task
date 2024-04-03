"use client";
import axios from "axios";
import cookie from 'js-cookie'

const Axios = axios.create({
  baseURL: "http://localhost:8080/api/user",
  headers: {
    "Content-Type": "application/json",
    Authorization: cookie.get("token"),
  },
});   

export default Axios;
