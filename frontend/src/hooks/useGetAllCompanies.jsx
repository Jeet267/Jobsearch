import { setCompanies} from '@/redux/companySlice'


import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCompany } from '@/api/company'
const useGetAllCompanies = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchCompanies = async () => {
            try {
                const res = await getCompany()
                
                if(res.data.success){
                    dispatch(setCompanies(res.data.companies));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchCompanies();
    },[])
}

export default useGetAllCompanies