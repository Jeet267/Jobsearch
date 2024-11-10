import React from "react";
import Navbar from "../shared/Navbar";
import { Input } from "../ui/input.jsx";
import { Label } from "../ui/label.jsx";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";


import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

import { USER_API_END_POINT } from "../../utils/constant";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { setLoading, setUser } from "@/redux/authSlice";
import { setLoading,setUser } from "../../redux/authSlice";
import { Loader2 } from "lucide-react";
const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const {loading} = useSelector(store => store.auth)
  const navigate = useNavigate()
  const dispatch =useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault()
    try{
        dispatch(setLoading(true))
        const res = await axios.post(`${USER_API_END_POINT}/login`,input,{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true,
        })
        if (res.data.success){
            dispatch(setUser(res.data.user))
            navigate("/")
            toast.success(res.data.message);
        }
    }catch(error){
        const errorMessage = error.response?.data?.message || "An unexpected error occurred";
        toast.error(errorMessage);
    }finally{
        dispatch(setLoading(false))
    }
  };
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="ajtkr200@mail.com"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
            />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="text"
              placeholder="xyz..."
              name="password"
              value={input.password}
              onChange={changeEventHandler}
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-2">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          {
            loading ? <Button className="w-full my-4">
                <Loader2 className="mr-2 h-4 w-4 animate-spin"/> Please wait
            </Button> :  <Button
            type="submit"
            className="w-full my-4 bg-black text-white hover:bg-black"
          >
            Login
          </Button>
          }
          <span className="text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600">
              Signup
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};
export default Login;