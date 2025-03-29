import axios from 'axios';


const axiosInstance  = axios.create({
    baseURL:"https://reqres.in/",
}) 

axiosInstance.interceptors.response.use(
    (res)=>res,(error)=>{
        let errorMsg = "Something went wrong";
        if(error.response){
            errorMsg = error.response.data?.message || error.response.status;
        }else if(error.request){
            errorMsg = "Network Error. Please Check your connection";
        }
        return Promise.reject(new Error(errorMsg));
    }
)

export default axiosInstance