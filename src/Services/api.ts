import axios from "axios";

export const CustomerApi = axios.create({
  baseURL: "http://localhost:3333",
});

export const MarketApi = axios.create({
  baseURL: "http://localhost:3535",
});

export const DEVELOPMENT_URL = "http://localhost:3535";
