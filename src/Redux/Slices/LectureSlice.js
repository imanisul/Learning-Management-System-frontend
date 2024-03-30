import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosInstance";

const initialState = {
    lectures: []
}


export  const getCoursesLecture = createAsyncThunk("/courses/lecture/get", async (courseId) => {
     try {
        const res = axiosInstance.get(`/courses/${courseId}`);
        toast.promise(res, {
            loading: "Fetching lectures",
            success: "Lectures loaded succesfully",
            error: "Error to fetch lecture"
        });

        const response = await res;
        return response.data;   
     } catch (error) {
        toast.error(error?.response?.data?.message);
        
     }
});

export  const addCourseLecture = createAsyncThunk("/courses/lecture/add", async (data) => {
    try {
        const formData = new FormData();
        formData.append("lecture", data.lecture);
        formData.append("title", data.title);
        formData.append("description", data.description);
       const res = axiosInstance.post(`/courses/${data.id}`, formData);
       toast.promise(res, {
           loading: "adding lecture",
           success: "Lectures added succesfully",
           error: "Error in adding lecture"
       });

       const response = await res;
       return response.data;
    } catch (error) {
       toast.error(error?.response?.data?.message);
       
    }
});

export  const deleteCourseLecture = createAsyncThunk("/courses/lecture/delete", async (data) => {
    try {
       const response = axiosInstance.delete(`/courses?courseId=${data.courseId}&lectureId=${data.lectureId}` );
       toast.promise(response, {
           loading: "deleting course lecture",
           success: "Lectures deleted succesfully",
           error: "Error in deleting lecture"
       });
       return (await response).data;
    } catch (error) {
       toast.error(error?.response?.data?.message);
       
    }
});


const lectureSlice = createSlice(
   {
    name: 'lecture',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCoursesLecture.fulfilled, (state, action) => {
            state.lectures = action?.payload?.lectures;
        })
        .addCase(addCourseLecture.fulfilled, (state, action) => {
            state.lectures = action?.payload?.course?.lectures;
        })
    }
   } 
);

export default lectureSlice.reducer;