import axios from "./AxiosInstance";


/**
 * Get the final output video file
 * @param  {String} client_id The unique of of client
 * @param  {String} output_folder The output directory of the video
 * @return {Promise} Response
 */
export const getOutputFile = (client_id, output_folder) => {
  return axios.get(
    "/output/?client_id=" + client_id + "&output_folder=" + output_folder
  );
};
