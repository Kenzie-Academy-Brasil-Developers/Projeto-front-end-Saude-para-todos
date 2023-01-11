import axios from "axios";

export const Api = axios.create({
  baseURL: " https://saude-para-todos.onrender.com/",
  timeout: 30000,
});
