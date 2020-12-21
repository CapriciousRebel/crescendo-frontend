import axios from "axios";

export default axios.create({
  baseURL: "http://23.101.172.131:6900",
  headers: {
    "Content-type": "application/json",
  },
});
