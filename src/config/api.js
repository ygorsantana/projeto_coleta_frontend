import OpenAPIClientAxios from 'openapi-client-axios';


const API_URL = "http://192.168.15.18:8000";
let api = new OpenAPIClientAxios(
    {
        definition: `${API_URL}/swagger.json`,
        axiosConfigDefaults: {
            baseURL: `${API_URL}/`,
            headers: {
                'Authorization': ``
            }
        }
    }
);

export default api;