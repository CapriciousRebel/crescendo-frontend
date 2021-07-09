import axios from "./AxiosInstance";

/**
 * Upload a file
 * @param  {File} file The file to be uploaded
 * @param  {ProgressEvent} onUploadProgress Progress of file being uploaded
 * @return {Promise} Response
 */
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
