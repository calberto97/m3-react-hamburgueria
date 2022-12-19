import axios from "axios";

const API = axios.create({
  baseURL: "https://hamburgueria-kenzie-v2.herokuapp.com",
  timeout: 1500,
});

export default API;
