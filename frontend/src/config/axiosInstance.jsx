import axios from "axios"
export const axiosInstance=axios.create({
    baseURL:"https://authtask-jbj7.onrender.com",
    withCredentials:true
})
