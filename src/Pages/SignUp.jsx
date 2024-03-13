import { useState } from "react";
import {toast} from 'react-hot-toast'
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { isEmail, isValidNumber, isValidPassword } from "../Helpers/regexMatcher";
import HomeLayout from "../Layout/HomeLayout";
import { createAccount } from "../Redux/Slices/AuthSlice";

function SignUp() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState("");
  
  const [signupData, setSignupData] = useState({
    fullname: "",
    number: "",
    email: "",
    password: "",
    avatar: ""
  });

  function handleUserInput(e){
    const {name, value} = e.target;
    setSignupData({
        ...signupData,
        [name]: value
    });
  }

  function getImage(event){
    event.preventDefault();

    const UploadImage = event.target.files[0];

    if(UploadImage){
        setSignupData({
            ...signupData,
            avatar: UploadImage
        });
        const fileReader = new FileReader();
        fileReader.readAsDataURL(UploadImage);
        fileReader.addEventListener("load", function (){
            setPreviewImage(this.result);
        });
    }
  }

 async function createNewAccount(event){
    event.preventDefault();
    if(!signupData.fullname || !signupData.email || !signupData.number || !signupData.password){
        toast.error("All fields are required!");
        return;
    }

    if(!signupData.fullname){
        toast.error("Name is required!");
        return;
    }

    if(!isValidNumber(signupData.number)){
        toast.error("Number must be of 10 digits!");
        return;
    }

    if (
        !isEmail(signupData.email)) {
        toast.error("Invalid email!");
        return;
      }
    if(!isValidPassword(signupData.password)){
        toast.error("Password must be 6 - 16 character with atleast a number and special character");
        return;
    }  

    const formData = new FormData();
    formData.append("fullname",signupData.fullname);
    formData.append("number",signupData.number);
    formData.append("email",signupData.email);
    formData.append("password",signupData.password);
    formData.append("avatar",signupData.avatar);


    const response = await dispatch(createAccount(formData));
    if(response?.payload?.success)
         navigate('/login');

    setSignupData({
        fullname: "",
        number: "",
        email: "",
        password: "",
        avatar: ""
    });
    setPreviewImage("");
   
  }

  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-[100vh]">
        <form onSubmit={createNewAccount} noValidate className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
          <h1 className="text-center text-2xl font-bold text-orange-600">Register</h1>

          <label htmlFor="image_uploads" className="cursor-pointer">
            {previewImage ? (
              <img
                className="w-24 h-24 rounded-full m-auto"
                src={previewImage}
              />
            ) : (
              <BsPersonCircle className=" w-24 h-24 my-2 rounded-full m-auto" />
            )}
          </label>
          <input
            onChange={getImage}
            type="file"
            id="image_uploads"
            name="image_uploads"
            accept=".jpg, jpeg, .png, .svg"
            className="hidden"
          />

          <div className="flex flex-col gap-1">
            <label htmlFor="fullname" className="font-semibold">
              Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              required
              placeholder="Enter your name"
              className="bg-transparent px-2 py-1 border rounded"
              onChange={handleUserInput}
              value={signupData.fullname}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="number" className="font-semibold">
              Number
            </label>
            <input
              type="text"
              id="number"
              name="number"
              maxLength={10}
              required
              placeholder="Enter your number"
              className="bg-transparent px-2 py-1 border rounded"
              onChange={handleUserInput}
              value={signupData.number}
            />
          </div>

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
              value={signupData.email}
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
              placeholder="Enter your password (E.g - John@12)"
              className="bg-transparent px-2 py-1 border rounded"
              onChange={handleUserInput}
              value={signupData.password}
            />
          </div>

          <button type="submit" className=" py-2 my-3 bg-orange-600 hover:bg-rose-600 transition-all ease-in-out duration-300 rounded-sm cursor-pointer font-semibold">
            Create Account
          </button>

         <p className="text-center">
            Already have an account ? <Link to='/login' className="link text-accent cursor-pointer">Login</Link>
         </p>

        </form>
      </div>
    </HomeLayout>
  );
}
export default SignUp;
