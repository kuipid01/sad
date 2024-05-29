import axios from "axios";
import { BASE_URL } from "./index.ts";
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
