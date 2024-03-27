import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import HomeLayout from "../../Layout/HomeLayout.jsx";
import { getUserData,UpdateProfile } from "../../Redux/Slices/AuthSlice.js";

function EditProfile(){

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [data, setData] = useState({
        previewImage: "",
        fullname: "",
        avatar: undefined,
        userId: useSelector((state) => state?.auth?.data?._id)
    });

    function handleImageUpload(e){
       e.preventDefault();
       const uploadedImage = e.target.files[0];
       if(uploadedImage){
        const filReader = new FileReader();
        filReader.readAsDataURL(uploadedImage);
        filReader.addEventListener("load", function (){
            setData({
                ...data,
                previewImage: this.result,
                avatar: uploadedImage
            })
        })
       }
    } 

    function handleInputChange(e){
        const {name, value} = e.target;
        setData({
            ...data,
            [name] : value
        })
    }

   async function onFormSubmit(e){
        e.preventDefault();
        if(!data.fullname || !data.avatar){
            toast.error("All fields required!");
        }

        const formData = new FormData();
        formData.append("fullname", data.fullname);
        formData.append("avatar", data.avatar);

        await dispatch(UpdateProfile([data.userId, formData]));

        await dispatch(getUserData());

        navigate('/user/profile')
    }

    return (
        <HomeLayout>
            <div className="flex items-center justify-center h-[96vh]">
               <form 
                  noValidate
                  onSubmit={onFormSubmit}
                  className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-[40rem] min-h-[26rem] shadow-[0_0_10px_black]"
               >
                <h1 className="text-center text-2xl font-semibold text-orange-600 ">

                    Update Profile
                </h1>

                <label htmlFor="image_uploads" className="cursor-pointer">
                    {data.previewImage ? (
                        <img
                           className="w-28 h-28 rounded-full m-auto"
                           src={data.previewImage}
                        />
                    ) : (
                         <BsPersonCircle className="w-28 h-28 rounded-full m-auto" />
                    )}
                </label>
                <input onChange={handleImageUpload} className="hidden" type="file" id="image_uploads" name="image_uploads" accept=".jpg, .jpeg, .png, .svg" />

                <div className="flex flex-col gap-1">
                    <label htmlFor="fullname" className="text-lg font-semibold">Name</label>
                    <input type="text" required name="fullname"  id="fullname" placeholder="Enter your name" 
                      className="bg-transparent px-2 py-1 border"
                      value={data.fullname}
                      onChange={handleInputChange}
                    />

                </div>
                <button type="submit" className=" py-2 my-3 w-full bg-orange-600 hover:bg-rose-600 transition-all ease-in-out duration-300 rounded-sm cursor-pointer font-semibold">
                    Update Profile
                </button>
                <Link to="/user/profile">
                    <p className="link text-accent cursor-pointer flex items-center justify-center w-full">
                     <AiOutlineArrowLeft/>    Go back to profile
                    </p>
                </Link>
               </form>
            </div>
        </HomeLayout>
    )

}

export default EditProfile;