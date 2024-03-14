
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import HomeLayout from "../../Layout/HomeLayout.jsx";


function Profile(){

    const dispatch = useDispatch();
    const userData = useSelector((state) => state?.auth?.data);


    return(
        <HomeLayout>
          <div className="min-h-[90vh] flex items-center justify-center">
            <div className="my-10 flex flex-col gap-4 rounded-lg p-4 text-white w-[40rem] shadow-[0_0_10px_black]">
            <h1 className="text-center text-2xl font-bold text-orange-600">User Profile</h1>
                 <img
                    className="w-40 m-auto rounded-full border border-black"
                    src={userData?.avatar?.secure_url} 
                 />

                 <h3 className="text-xl font-semibold text-center capitalize">
                    {userData?.fullname}
                 </h3>
                 <div className="grid grid-cols-2 px-8 italic">
                   <p>Email: </p> <p>{userData?.email}</p> 
                   <p>Number: </p> <p>{userData?.number}</p>
                   <p>Role: </p> <p>{userData?.role}</p>
                   <p>Subscription: </p> <p>{userData?.subscription?.status === "active" ? "Active" : "Inactive"}</p>
                 </div>

                 <div className="flex items-center justify-between gap-2">
                    <Link to="/changepassword" 
                    className="w-1/2 bg-orange-600 hover:bg-rose-600 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 cursor-pointer text-center">
                       <button>
                            Change Password
                       </button>
                    </Link>
                    <Link to="/user/updateprofile" 
                    className="w-1/2 bg-orange-600 hover:bg-rose-600 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 cursor-pointer text-center">
                       <button>
                            Update Profile
                       </button>
                    </Link>
                 </div>
                 {userData?.subscription?.status ==="active" &&(
                    <button className="py-2 my-1 bg-orange-600 hover:bg-rose-600 transition-all ease-in-out duration-300 rounded-sm cursor-pointer font-semibold">
                        Cancel Subscription
                    </button>
                 )}
            </div>

          </div>
         
        </HomeLayout>)
}

export default Profile;