import { Link } from "react-router-dom";

import HomePageImage from '../assets/course2.png'
import HomeLayout from "../Layout/HomeLayout";
function HomePage(){

    return(
        <HomeLayout>
            <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
                <div className="w-1/2 space-y-6">
                    <h1 className="text-5xl font-semibold">
                        Find the best
                        <span className="text-yellow-500 font-bold">
                            Online Courses
                        </span>

                    </h1>
                    <p className="text-xl text-gray-200">
                        Best courses are avialable here with highly skilled and qualified teachers at a very afforable cost.
                    </p>

                    <div className="space-x-6">
                        <Link to="/courses">
                            <button className="bg-orange-400 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-red-600 transition-all ease-in-out duration-300">
                                Explore Courses
                            </button>

                            <button className="border border-red-300 mx-6 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-red-600 transition-all ease-in-out duration-300">
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