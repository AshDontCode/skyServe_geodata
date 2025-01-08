import axios from "axios";

const API = axios.create({ baseURL: "https://sky-serve-geodata.vercel.app/" });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = token;
  }
  return req;
});

export default API;
