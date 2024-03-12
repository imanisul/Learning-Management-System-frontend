import { useState } from "react";
import {toast} from 'react-hot-toast'
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import HomeLayout from "../Layout/HomeLayout";
import { login } from "../Redux/Slices/AuthSlice";

function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  function handleUserInput(e){
    const {name, value} = e.target;
    setLoginData({
        ...loginData,
        [name]: value
    });
  }


 async function onLogin(event){
    event.preventDefault();
    if(!loginData.email || !loginData.password){
        toast.error("All fields are required!");
        return;
    }



    const response = await dispatch(login(loginData));
    if(response?.payload?.success)
         navigate('/');

    setLoginData({
        email: "",
        password: ""
    });
  
   
  }

  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-[100vh]">
        <form onSubmit={onLogin} noValidate className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
          <h1 className="text-center text-2xl font-bold text-orange-600">Sign In</h1>


          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="bg-transparent px-2 py-1 border rounded"
              onChange={handleUserInput}
              value={loginData.email}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter your password"
              className="bg-transparent px-2 py-1 border rounded"
              onChange={handleUserInput}
              value={loginData.password}
            />
          </div>

          <button type="submit" className=" py-2 my-3 bg-orange-600 hover:bg-rose-600 transition-all ease-in-out duration-300 rounded-sm cursor-pointer font-semibold">
            Login
          </button>

         <p className="text-center">
            Create an account ? <Link to='/signup' className="link text-accent cursor-pointer">SignUp</Link>
         </p>

        </form>
      </div>
    </HomeLayout>
  );
}
export default Login;
