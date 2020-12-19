import axios from "./AxiosInstance";

export const chooseTemplate = (finalData) => {
  axios.post("/chooseTemplate", finalData).then((response) => {
    console.log(response);
  });
};
