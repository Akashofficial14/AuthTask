import axios from "axios"
export const axiosInstance=axios.create({
    baseURL:"https://authtask-1.onrender.com",
    withCredentials:true
})
