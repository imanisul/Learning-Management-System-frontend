import {ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title,Tooltip} from "chart.js";
import { useEffect } from "react";
import {Bar, Pie} from "react-chartjs-2"
import { FaUsers } from "react-icons/fa";
import {FcSalesPerformance} from "react-icons/fc"
import { GiMoneyStack } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import HomeLayout from "../../Layout/HomeLayout"
import { deleteCourse, getAllCourses } from "../../Redux/Slices/CourseSlice";
import { getPaymentRecord } from "../../Redux/Slices/RazorpaySlice";
import { getStatsData } from "../../Redux/Slices/StatSlice";

ChartJS.register(ArcElement, BarElement, CategoryScale, Legend, LinearScale, Title, Tooltip);

function AdminDashboard() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {allUsersCount, subscribedCount} = useSelector((state) => state.stat);

    const {allPayments, finalMonths, monthlySalesRecord} = useSelector((state) => state.razorpay);

    const userData = {
        labels: ["Register User", "Enrolled User"],
        datasets: [
            {
                label: "User Details",
                data: [allUsersCount, subscribedCount],
                backgroundColor: ["#4287f5", "#f542e3"],
                borderWidth: 1,
                borderColor: ["#4287f5", "#f542e3"]
            }
        ]
    };

    const salesData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        fontColor: "white",
        datasets: [
            {
                label: "Sales / Month",
                data: monthlySalesRecord,
                backgroundColor: ["rgb(255, 99, 132)"],
                borderColor: ["white"],
                borderWidth: 2
            }

        ]
    }

    const myCourses = useSelector((state) => state?.course?.courseData);

    async function onCourseDelete(id){
        if(window.confirm("Are you sure to delete the course ?")){
            const res = await dispatch(deleteCourse(id));
            if(res?.payload?.success){
                await dispatch(getAllCourses());
            }
        }
    }


    useEffect(() => {
        (
            async() => {
                await dispatch(getAllCourses());
                await dispatch(getStatsData());
                await dispatch(getPaymentRecord())
            }
        )()

    }, [])


return (
    <HomeLayout>
        <div className="min-h-[90vh] py-12 flex flex-col flex-wrap gap-10 text-white">
            <h1 className="text-center text-4xl font-semibold text-orange-600">
                Admin Dashboard
            </h1>

            <div className="grid grid-cols-2 gap-5 m-auto mx-10">
              <div className="flex flex-col items-center gap-10 p-5 shadow-lg rounded-md">
                <div className="w-80 h-80">
                  <Pie data={userData}/>
                </div>

                <div className="grid grid-cols-2 gap-5">
                    <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md">
                        <div className="flex flex-col items-center">
                            <p className="font-semibold ">Registered Users </p>
                            <h3 className="text-4xl font-bold">{allUsersCount}</h3> 
                        </div>
                        <FaUsers className="text-orange-600 text-5xl"/>
                    </div>

                    <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md">
                        <div className="flex flex-col items-center">
                            <p className="font-semibold ">Enrolled Users </p>
                            <h3 className="text-4xl font-bold">{subscribedCount}</h3> 
                        </div>
                        <FaUsers className="text-green-600 text-5xl"/>
                    </div>

                </div>

              </div>

              <div className="flex flex-col items-center gap-10 p-5 shadow-lg rounded-md">
                <div className="h-80 w-full relative">
                  <Bar className="absolute bottom-0 h-80 w-full" data={salesData}/>
                </div>
                <div className="grid grid-cols-2 gap-5 ">
                <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md">
                        <div className="flex flex-col items-center">
                            <p className="font-semibold ">Subscription Count </p>
                            <h3 className="text-4xl font-bold">{allPayments?.count}</h3> 
                        </div>
                        <FcSalesPerformance className="text-orange-600 text-5xl"/>
                </div>

                <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md">
                        <div className="flex flex-col items-center">
                            <p className="font-semibold ">Total Revenue </p>
                            <h3 className="text-4xl font-bold">{allPayments?.count * 4999}</h3> 
                        </div>
                        <GiMoneyStack className="text-green-600 text-5xl"/>
                </div>

                </div>
              </div>
            </div>

           <div className="mx-[10%] w-[80%]">

           </div>
        </div>
    </HomeLayout>
)


    
  
}

export default AdminDashboard