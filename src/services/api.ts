import axios from "axios";

const token = localStorage.getItem("@MYTOKEN");

export const Api = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
