import axios from "axios";

export default axios.create({
  baseURL: "https://reactshop-api.netlify.app/api",
});
