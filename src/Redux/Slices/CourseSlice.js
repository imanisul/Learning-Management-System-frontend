import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosInstance";

const initialState = {
    courseData : []
}

export const getAllCourses = createAsyncThunk("course/get", async () => {
    try {
        const res = axiosInstance.get("/courses");
        toast.promise(res, {
            loading: "Loading courses....",
            success: "Courses loaded successfully",
            error: "Failed to load courses.."
        });

        const response = await res;
        return response.data.courses;
    } catch (error) {   
        toast.error(error?.response?.data?.message);
    }
});

export const CreateNewCourse = createAsyncThunk("/course/create", async (data) => {
    try {
        let formData = new FormData();
        formData.append("title", data?.title);
        formData.append("description", data?.description);
        formData.append("category", data?.category);
        formData.append("createdBy", data?.createdBy);
        formData.append("thumbnail", data?.thumbnail);

        const res = axiosInstance.post('/courses', formData);
        toast.promise(res, {
            loading:"Creating new Course...",
            success: "Course created successfully!",
            error: "Failed to create course!"
        });
        const response = await res;
        return response.data.courses;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})


const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCourses.fulfilled, (state, action) => {
            if(action.payload){
                state.courseData = [...action.payload];
            }
        });

    },  
});

export default courseSlice.reducer;