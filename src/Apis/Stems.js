import axios from "./AxiosInstance";

/**
 * Get the seperated stems
 * @param  {String} client_id The unique of of client
 * @param  {String} output_folder The output directory of the stems
 * @return {Promise} Response
 */
export const getStems = (client_id, output_folder) => {
    return axios.get(
        "/files/?client_id=" + client_id + "&output_folder=" + output_folder
    );
};
