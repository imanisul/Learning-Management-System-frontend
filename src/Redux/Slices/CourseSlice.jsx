import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosaInstance from "../../Helpers/axiosInstance";

const initialState = {
    courseData : []
}

export const getAllCourses = createAsyncThunk("course/get", async () => {
    try {
        const response = axiosaInstance.get("/courses");
        toast.promise(response, {
            loading: "Loading courses....",
            success: "Courses loaded successfully",
            error: "Failed to load courses.."
        });

        return (await response).data.courses;
    } catch (error) {   
        toast.error(error?.response?.data?.message);
    }
})

const courseSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
});

export default courseSlice.reducer;