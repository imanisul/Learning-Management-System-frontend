import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";

import axiosaInstance from "../../Helpers/axiosInstance";

const initialState = {
    lectures: []
}


export  const getCoursesLecture = createAsyncThunk("/courses/lecture/get", async (cid) => {
     try {
        const response = axiosaInstance.get(`/courses/${cid}`);
        toast.promise(response, {
            loading: "Fetching lectures",
            success: "Lectures loaded succesfully",
            error: "Error to fetch lecture"
        });
        return (await response).data;
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
       const response = axiosaInstance.post(`/courses/${data.id}`, formData);
       toast.promise(response, {
           loading: "adding lecture",
           success: "Lectures added succesfully",
           error: "Error in adding lecture"
       });
       return (await response).data;
    } catch (error) {
       toast.error(error?.response?.data?.message);
       
    }
});

export  const deleteCourseLecture = createAsyncThunk("/courses/lecture/delete", async (data) => {
    try {
       const response = axiosaInstance.delete(`/courses?courseId=${data.courseId}&lectureId=${data.lectureId}` );
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