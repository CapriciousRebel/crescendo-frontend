import axios from "./AxiosInstance";


export const getOutputFile = (client_id, output_folder) => {
    return axios.get(
        "/output/?client_id=" + client_id + "&output_folder=" + output_folder
    );
};
