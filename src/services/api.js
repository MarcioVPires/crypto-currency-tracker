import axios from "axios";

const api = axios.create({
  baseURL: "https://api-crypto-currency-tracker.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
