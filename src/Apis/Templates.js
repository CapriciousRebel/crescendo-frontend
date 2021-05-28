import axios from "./AxiosInstance";

export const chooseTemplate = (finalData) => {
  return axios.post("/chooseTemplate", finalData);
};
