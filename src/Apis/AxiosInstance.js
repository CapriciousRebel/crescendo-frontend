import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:6900",
  headers: {
    "Content-type": "application/json",
  },
});
