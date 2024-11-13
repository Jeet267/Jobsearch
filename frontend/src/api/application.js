import axios from "axios";
import ENDPOINT from "@/utils/constant";

export const getAppliation = async (id) =>{
  return await axios.get(`${ENDPOINT}/api/v1/application/${id}/applicants`, {
    withCredentials: true,
  })};

export const getAppliedjob = async () => {
  return await axios.get(`${ENDPOINT}/api/v1/application/get`, {
    withCredentials: true,
  });
};

export const applyForJob = async (jobId) => {
  return await axios.get(`${ENDPOINT}/api/v1/application/apply/${jobId}`, {
    withCredentials: true,
  });
};

export const updateApplicationTable = async(status,id)=>{
  return await axios.post(`${ENDPOINT}/api/v1/application/status/${id}/update`, { status });
}