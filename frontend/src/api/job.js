import axios from "axios";
import ENDPOINT from "@/utils/constant";

export const getAppliation = async (id) =>
  await axios.get(`${ENDPOINT}/api/v1/job`, {
    withCredentials: true,
  });

export const postjob = async (input) => {
  return await axios.post(`${ENDPOINT}/api/v1/job/post`, input, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export const getAlladminjob = async () => {
  return await axios.get(`${ENDPOINT}/api/v1/job/getadminjobs`, {
    withCredentials: true,
  });
};

export const getalljobs = async(searchedQuery)=>{
  return await axios.get(`${ENDPOINT}/api/v1/job/get?keyword=${searchedQuery}`, {
    withCredentials: true,
  });
}

export const getjob= async(jobId)=>{
  return await axios.get(`${ENDPOINT}/api/v1/job/${jobId}`, {
    withCredentials: true,
  });
}

