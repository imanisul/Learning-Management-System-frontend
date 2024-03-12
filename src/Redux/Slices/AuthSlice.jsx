import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from '../../Helpers/axiosInstance'

const initialState ={
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || "",
    data: localStorage.getItem('data') || {}
};

export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
    try {
       const res = axiosInstance.post("/user/register", data);
       toast.promise(res, {
        loading: "Wait! creating your account!",
        success: (data) => {
            return data?.data?.message;
        },
        error: "Failed to create your account!"
       });

       return (await res).data; 

    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})

export const login = createAsyncThunk("/auth/login", async (data) => {
    try {
       const res = axiosInstance.post("/user/login  ", data);
       toast.promise(res, {
        loading: "Wait! Redirecting to home page!",
        success: (data) => {
            return data?.data?.message;
        },
        error: "Failed to login your account!"
       });

       return (await res).data; 

    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})

export const logout = createAsyncThunk("auth/logout", async () => {
    try {
      let res = axiosInstance.post("/user/logout");
  
      await toast.promise(res, {
        loading: "Loading...",
        success: (data) => {
          return data?.data?.message;
        },
        error: "Failed to log out",
      });
  
      res = await res;
      return res.data;
    } catch (error) {
      toast.error(error.message);
    }
  });

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
         .addCase(login.fulfilled, (state, action) => {
            localStorage.setItem("data", JSON.stringify(action?.payload?.user));
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("role", action?.payload?.user?.role);
            state.isLoggedIn = true;
            state.data = action?.payload?.user;
        })
        .addCase(logout.fulfilled, (state) => {
            localStorage.clear();
            state.isLoggedIn = false;
            state.data = {};
          })
    }
});

// export const {} = authSlice.actions;
export default authSlice.reducer;