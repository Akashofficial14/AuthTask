import { axiosInstance } from "../config/axiosInstance";

export let getProfileData = async () => {
  try {
    let res = await axiosInstance.get("/api/profile");
    console.log("your response is,", res);
    if (res) {
      return res.data.loggedInUserData;
    }
  } catch (error) {
     if (error.response && error.response.status === 401) {
      localStorage.removeItem("userData");
      window.location.href = "/"; // login page pe redirect
    }
    console.log("error while getting login data");
  }
};

export let updateProfileData = async (formData) => {
    let res = await axiosInstance.put("/api/profile/update", formData);
    console.log("your response of updateProfileData is,", res.data);
    return res.data;
};

export let updatePassword = async (formData) => {
    // We remove the try/catch so the error "bubbles up" to useMutation
    const res = await axiosInstance.put("/api/profile/update-password", formData);
    
    // axiosInstance returns the data property usually, 
    // but if you want the whole response:
    console.log("your response of updatePassword is,", res.data);
    return res.data; 
};
