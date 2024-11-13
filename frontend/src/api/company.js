import axios from "axios";
import ENDPOINT from "@/utils/constant";

export const createCompany = async(companyName)=>{
    return await axios.post(`${ENDPOINT}/api/v1/company/register`, {companyName}, {
        headers:{
            'Content-Type':'application/json'
        },
        withCredentials:true
    });

}
export const getCompany = async () =>{
 return await axios.get(`${ENDPOINT}/api/v1/company/get`, {
    withCredentials: true,
  })};

export const getaCompany = async(companyId)=>{
    console.log(companyId);
    return await axios.get(`${ENDPOINT}/api/v1/company/get/${companyId}`, {
        withCredentials:true
    });
}  

export const companysetup = async(formData,paramsId)=>{
   return await axios.post(`${ENDPOINT}/api/v1/company/update/${paramsId}`, formData, {
        withCredentials:true,
        headers:{
            'Content-Type':'multipart/form-data'
        }
    });
}