import axios from 'axios';


const axiosInstance  = axios.create({
    baseURL:"https://reqres.in/",
}) 

axiosInstance.interceptors.response.use(
    (res) => res,
    (error) => {
        let errorMsg = "Something went wrong";
        let errorData = null;

        if (error.response) {
            errorMsg = error.response.data?.message || error.response.status;
            errorData = error.response.data; // Pura response data save kar rahe hain
        } else if (error.request) {
            errorMsg = "Network Error. Please Check your connection";
        }

        return Promise.reject({ message: errorMsg, data: errorData });
    }
);


export default axiosInstance