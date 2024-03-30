import { useEffect } from "react";
import toast from "react-hot-toast";
import {BiRupee} from 'react-icons/bi'
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'

import HomeLayout from '../../Layout/HomeLayout.jsx'
import { getRazorpayid, purchaseCourseBundle, verifyUserPayment } from "../../Redux/Slices/RazorpaySlice.js";

function Checkout(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const razorPayKey = useSelector((state) => state.razorpay.key); 
    const subscription_id = useSelector((state) => state.razorpay.subscription_id); 
    const {isPaymentVerified} = useSelector((state) => state.razorpay);
    const userData = useSelector((state) => state.auth.data);
    const paymentDetails = {
        razorpay_payment_id: "",
        razorpay_subscription_id: "",
        razorpay_signature: "",
    };

    async function handleSubscription(e){
          e.preventDefault();
          if (!razorPayKey || !subscription_id) {
            toast.error("Something went wrong!");
            return;
          }
          const options = {
            key: razorPayKey,
            subscription_id: subscription_id,
            name: "Edui Pvt. Ltd.",
            description: "Subscription",
    
            handler: async function (response){
                paymentDetails.razorpay_payment_id = response.razorpay_payment_id;
                paymentDetails.razorpay_signature = response.razorpay_signature;
                paymentDetails.razorpay_subscription_id = response.razorpay_subscription_id;

                const res = await dispatch(verifyUserPayment(paymentDetails));

                res?.payload?.success ? navigate("/checkout/success") : navigate("/checkout/failed");
            },
                
            theme:{
                color: '#F37254'
            },
            prefill: {
               email: userData.email,
               name: userData.fullname,
            },
          };

          const paymentObject = new window.Razorpay(options);   
          paymentObject.open(); 
    }

    useEffect(() => {
        (async () => {
          await dispatch(getRazorpayid());
          await dispatch(purchaseCourseBundle());
        })();
      }, []);



    return(
        <HomeLayout>
            <form 
             onSubmit={handleSubscription}      
             className="min-h-[90vh] flex items-center justify-center text-white"
            
            >
                <div className="w-80 h-[26rem] flex flex-col justify-center shadow-[0_0_10px_black] rounded-lg relative">
                     <h1 className="text-center absolute top-0 w-full py-4 text-2xl font-bold text-white bg-orange-600 rounded-t-lg">Order Details</h1>
                     <div className="px-4 py-5 text-center">
                        <p className="text-[17px]"> You can purchase course here A to Z </p> <br />
                        <p className="flex items-center justify-center gap-1 text-2xl font-bold text-rose-600">
                            <BiRupee/> <span>4999</span> only
                        </p>
                        <div>
                            <p className="text-gray-200">14 days refund policy</p>
                            <p>* Terms and conditions applied *</p>
                        </div>
                        <button type="submit" className=" py-3 text-xl absolute bottom-0 left-0 w-full bg-orange-600 hover:bg-rose-600 transition-all ease-in-out duration-300 rounded-bl-lg rounded-br-lg cursor-pointer font-semibold">
                            Buy Now
                        </button>
                     </div>
                </div>
            </form>
        </HomeLayout>
    )
}

export default Checkout;