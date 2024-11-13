import axios from "axios"
import ENDPOINT from "@/utils/constant";

export const signup = async (formData) =>
  await axios.post(`${ENDPOINT}/api/v1/user/register`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
    withCredentials: true,
  });

export const login = async (input) => {
  return await axios.post(`${ENDPOINT}/api/v1/user/login`, input, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export const logout = async () => {
  return await axios.get(`${ENDPOINT}/api/v1/user/logout`, {
    withCredentials: true,
  });
};

export const getProfile = async(formData)=>{
    return await axios.post(`${ENDPOINT}/api/v1/user/profile/update`,formData,{
      headers: {
        "Content-Type": "multipart/form-data" },
      withCredentials: true,
    });
}
