import { useState } from "react";
import toast from "react-hot-toast";

import axiosaInstance from "../Helpers/axiosInstance";
import { isEmail } from "../Helpers/regexMatcher.jsx";
import HomeLayout from "../Layout/HomeLayout.jsx";

function ContactUs() {

    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: "",

    });

    function handleInputChange(e){
        const {name, value} = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        })
    }

    async function onFormSubmit(e){
        e.preventDefault();
        if(!userInput.email || !userInput.name || !userInput.message){
            toast.error("All fields are required!");
            return;
        }

        if (
            !isEmail(userInput.email)) {
            toast.error("Invalid email!");
            return;
          }
        if(!userInput.message){
            toast.error("Message can't be empty!");
            return;
        }  

        try {
            const res = axiosaInstance.post('/contact', { ...userInput });
            toast.promise(res, {
              loading: "Sending your message...",
              success: "Message sended successfully",
              error: "Failed to submit the message",
            });
            const response = await res;
      
            // clearing the input fields after successfull submission of form
            if (response?.data?.success) {
              setUserInput({
                name: "",
                email: "",
                message: "",
              });
            }
          } catch (error) {
            toast.error("Operation failed...");
          }
        
    }

  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-[100vh]">
        <form onSubmit={onFormSubmit} noValidate className="flex flex-col items-center justify-center gap-2 p-5 rounded-md text-white shadow-[0_0_10px_black] w-[30rem]">
          <h1 className="text-center text-3xl font-semibold text-orange-600">
            Contact Us
          </h1>

          <div className="flex flex-col w-full gap-1">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              type="text"
              className="bg-transparent px-2 py-1 border rounded"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              onChange={handleInputChange}
              value={userInput.name}
            />
          </div>


          <div className="flex flex-col w-full gap-1">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              className="bg-transparent px-2 py-1 border rounded"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              onChange={handleInputChange}
              value={userInput.email}
            />
          </div>

          <div className="flex flex-col w-full gap-1">
            <label htmlFor="message" className="font-semibold">
              Message
            </label>
            <textarea
              className="bg-transparent px-2 py-1 border rounded resize-none h-40"
              id="message"
              name="message"
              placeholder="Enter your message"
              required
              onChange={handleInputChange}
              value={userInput.message}
            />
          </div>

          <button
            type="submit"
            className=" w-full py-2 my-3 bg-orange-600 hover:bg-rose-600 transition-all ease-in-out duration-300 rounded-sm cursor-pointer font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </HomeLayout>
  );
}

export default ContactUs;
