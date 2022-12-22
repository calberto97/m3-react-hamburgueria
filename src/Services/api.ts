import axios from "axios";

const API = axios.create({
  baseURL: "https://hamburgueria-kenzie-v2.herokuapp.com",
  timeout: 2000, //o "bug" reclamado na correção era simplesmente porque o timeout estava em 1500, aumentei um pouco
});

export default API;
