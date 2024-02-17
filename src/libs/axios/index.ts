import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://15.164.38.42:8080/",
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Credentials": "true",
  },
});
