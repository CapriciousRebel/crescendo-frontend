import axios from "./AxiosInstance";

export const uploadFile = (file, onUploadProgress) => {
  let formData = new FormData();
  formData.append("file", file);

  return axios.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/formdata",
    },
    onUploadProgress,
  });
};

export const getFiles = () => {
  return axios.get("/files");
};
