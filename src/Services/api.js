import axios from "axios";

const API = axios.create({
  baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com/",
  timeout: "5000",
});

export default API;
