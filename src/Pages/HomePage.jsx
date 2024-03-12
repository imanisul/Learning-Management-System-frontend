import { Link } from "react-router-dom";

import HomePageImage from '../assets/course2.png'
import HomeLayout from "../Layout/HomeLayout";
function HomePage(){

    return(
        <HomeLayout>
            <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
                <div>
                </div>
                <div className="w-1/2 space-y-6">
                 <h1 className="text-5xl font-semibold">
                                Find the best
                        
                    <div className="w-max">
                         <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
                            courses
                         </h1>
                    </div>
                    </h1>
                    <p className="text-xl text-gray-200">
                        Best courses are avialable here with highly skilled and qualified teachers at a very afforable cost.
                    </p>

                    <div className="space-x-6">
                        <Link to="/courses">
                            <button className="bg-rose-700 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-orange-500 transition-all ease-in-out duration-300">
                                Explore Courses
                            </button>

                            <button className="border border-rose-700 mx-6 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-rose-700 transition-all ease-in-out duration-300">
                                Contact Us
                            </button>
                        </Link>
                    </div>

                </div>

                <div className="w-1/2 flex items-center justify-center">
                    <img src={HomePageImage} alt="homepage image" />

                </div>

            </div>
        </HomeLayout>
    )

}

export default HomePage;