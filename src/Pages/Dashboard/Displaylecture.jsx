import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import HomeLayout from "../../Layout/HomeLayout.jsx";
import { deleteCourseLecture, getCourseLectures } from "../../Redux/Slices/LectureSlice.js";

function Displaylecture(){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const courseDetails = useLocation().state;
    const {lectures} = useSelector((state) => state.lecture);
    const {role} = useSelector((state) => state.auth);

    const [currentVideo, setCurrentVideo] = useState(0);

    const handleLectureDelete = async (courseId, lectureId) => {
      const data = { courseId, lectureId };
      await dispatch(deleteCourseLecture(data));
      await dispatch(getCourseLectures(courseDetails._id));
    };

    useEffect(() => {
      (async () => {
        await dispatch(getCourseLectures(courseDetails._id));
      })();
    }, []);


  return (
    <HomeLayout>
       <div className="flex flex-col gap-10 items-center justify-center min-h-[90vh] py-10 text-white mx-10">
        <div className="text-center text-2xl font-semibold text-orange-600">
          Course Name : {courseDetails?.title}
        </div>
       {lectures && lectures.length > 0 && <div className="flex justify-center gap-10 w-full">
          <div className="space-y-5 w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black]">
            <video src={lectures && lectures[currentVideo]?.lecture?.secure_url}
              className="object-fill rounded-tl-lg rounded-tr-lg w-full"
              controls
              disablePictureInPicture
              loop
              muted
              controlsList="nodownload"


            >

            </video>
            <div>
              <h1>
                <span className="text-rose-600">  Title: {" "}
                  
                </span>
                {lectures && lectures[currentVideo]?.title}
              </h1>
              <p>
                <span className="text-rose-600 line-clamp-4">
                  Description: {" "}
                </span>
                {lectures && lectures[currentVideo]?.description}
              </p>
            </div>
          </div>

          <ul className="w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black] space-y-4">
            <li className="font-semibold text-xl text-rose-600 flex items-center justify-between">
              <p>Upcoming Lectures</p>
              {role === "ADMIN" && (
                <button onClick={() => navigate("/course/addlecture", {state: {...courseDetails}})} className="py-2 px-3 text-white text-sm bg-orange-600 hover:bg-rose-600 transition-all ease-in-out duration-300 rounded-sm cursor-pointer font-semibold">
                  Add lecture
                </button>
              )}
            </li>
            {lectures && 
                 lectures.map((lecture, idx) => {
                  return (
                    <li className="space-y-2" key={lecture._id}>
                      <p className="cursor-pointer" onClick={() => setCurrentVideo(idx)}>
                        <span>
                          {" "} Lecture {idx +1} : {" "}
                        </span>
                        {lecture?.title}
                      </p>
                      {role === "ADMIN" && (
                <button onClick={() => handleLectureDelete(courseDetails?._id, lecture?._id)} className="py-2 px-3 text-white text-sm bg-gray-600 hover:bg-rose-600 transition-all ease-in-out duration-300 rounded-sm cursor-pointer font-semibold">
                  Delete lecture
                </button>
              )}
                    </li> 
                  )
                 })
                 }
          </ul>

        </div>}
       </div>
    </HomeLayout>
  )
}

export default Displaylecture;