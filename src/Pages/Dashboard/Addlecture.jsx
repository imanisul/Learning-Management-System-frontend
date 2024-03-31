import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { PiUploadSimpleBold } from "react-icons/pi";
import { useDispatch } from "react-redux";
import {  useLocation, useNavigate } from "react-router-dom";

import HomeLayout from "../../Layout/HomeLayout.jsx";
import { addCourseLecture } from "../../Redux/Slices/LectureSlice";

function Addlecture(){
 
    const courseDetails = useLocation().state;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userInput, setUserInput] = useState({
        id: courseDetails?._id,
        lecture: undefined,
        description: "",
        title: "",
        videoSrc: ""
    });

    function handleInputChange(e){
        const {name, value} = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        })
    }

    function handleVideo(e){
        const video = e.target.files[0];
        const source = window.URL.createObjectURL(video);
        setUserInput({
           ...userInput,
           lecture: video,
            videoSrc: source
        })
    }

   async function onFormSubmit(e){
        e.preventDefault();   
        if(!userInput.lecture || !userInput.title || !userInput.description) {
            toast.error("All fields are required!")
            return;
        }
        const response = await dispatch(addCourseLecture(userInput));
        if(response?.payload?.success){
            navigate(-1);
            setUserInput({
                id: courseDetails._id,
                lecture: undefined,
                title: "",
                description: "",
                videoSrc: ""
            })
        }
    }
    
    useEffect(() => {
        if(!courseDetails) navigate("/courses");
    }, [])



    

    return(
       <HomeLayout>
           <div className="min-h-[90vh] text-white flex flex-col items-center justify-center gap-10 mx-16">
            <div className="flex flex-col gap-5 p-2 shadow-[0_0_10px_black] w-96 rounded-lg">
                <header className="flex items-center justify-center relative">
                    <button className="absolute left-2 text-xl text-green-500" onClick={() => navigate(-1)}>

                        <AiOutlineArrowLeft/>

                    </button>

                    <h1 className="text-xl text-orange-600 font-semibold">
                        Add Course Lecture
                    </h1>

                </header>

                <form 
                  onSubmit={onFormSubmit} 
                  className="flex flex-col gap-3"
                >
                  <input type="text"
                     name="title"
                     placeholder="Enter the lecture title"
                     onChange={handleInputChange}
                     className="bg-transparent px-3 py-1 border"
                     value={userInput.title}
                  />

                  <textarea type="text"
                     name="description"
                     placeholder="Enter the lecture description"
                     onChange={handleInputChange}
                     className="bg-transparent px-3 py-1 border resize-none overflow-y-scroll h-36"
                     value={userInput.description}
                  />

                  {userInput.videoSrc ? (
                     <video
                       muted
                       src={userInput.videoSrc}
                       controls
                       controlsList="nodownload nofullscreen"
                       disablePictureInPicture
                       className="object-fill rounded-tl-lg rounded-tr-lg w-full"
                     >

                     </video>
                  ): (
                      <div className="h-48 border flex items-center justify-center cursor-pointer">
                        <label className="font-semibold text-cl cursor-pointer" htmlFor="lecture"> <PiUploadSimpleBold className="w-8 h-8"/> </label>
                        <input type="file" className="hidden"  id="lecture" name="lecture" onChange={handleVideo} accept="video/mp4 video/x-mp4 video/*"/>
                      </div>
                  )}

                 <button type="submit" className="py-2 my-3 bg-orange-600 hover:bg-rose-600 transition-all ease-in-out duration-300 rounded-sm cursor-pointer font-semibold">
                      Add new lecture
                  </button>  

                </form>

            </div>

           </div>
       </HomeLayout>
    )
}

export default Addlecture;