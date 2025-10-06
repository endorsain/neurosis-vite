import axios from "axios";

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_REST, // tu API
  withCredentials: true, // 🔑 importante para que mande las cookies httpOnly
  headers: {
    "Content-Type": "application/json",
  },
});
