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
});

export const updateCourse = createAsyncThunk(
    "/course/update",
    async (data) => {
      try {
        // creating the form data from user data
        let formData = new FormData();
        formData.append("title", data?.title);
        formData.append("description", data?.description);
        formData.append("category", data?.category);
        formData.append("createdBy", data?.createdBy);
        formData.append("thumbnail", data?.thumbnail);
        
        const res = axiosInstance.put(`/courses/${data.id}`, {
          title: data.title,
          category: data.category,
          createdBy: data.createdBy,
          description: data.description,
        });
  
        toast.promise(res, {
          loading: "Updating the course...",
          success: "Course updated successfully",
          error: "Failed to update course",
        });
  
        const response = await res;
        return response.data;
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    }
  );

export const deleteCourse = createAsyncThunk("course/delete", async (id) => {
    try {
        const res = axiosInstance.delete(`/courses/${id}`);
        toast.promise(res, {
            loading: "Deleting courses....",
            success: "Course delete successfully",
            error: "Failed to delete course"
        });

        const response = await res;
        return response.data.courses;
    } catch (error) {   
        toast.error(error?.response?.data?.message);
    }
});




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