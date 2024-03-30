import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

import axiosInstance from "../../Helpers/axiosInstance.jsx";

const initialState = {
  key: "",
  subscription_id: "",
  isPaymentVerified: false,
  allPayments: {},
  finalMonths: {},
  monthlySalesRecord: [],
}

export const getRazorpayid = createAsyncThunk('razorpay/getId', async () => {
  try {
    const response = await axiosInstance.get('/payments/razorpay-key');
    return response.data;
  } catch (error) {
    toast.error('Failed to get Razorpay id');
    throw error;
  }
});

export const purchaseCourseBundle = createAsyncThunk('razorpay/purchaseCourse', async () => {
  try {
    const response = await axiosInstance.post('/payments/subscribe');
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || 'Failed to purchase course bundle');
    throw error;
  }
});

export const verifyUserPayment = createAsyncThunk('razorpay/verifyPayment', async (paymentDetail) => {
  try {
    const response = await axiosInstance.post('/payments/verify', {
      razorpay_payment_id: paymentDetail.razorpay_payment_id,
      razorpay_subscription_id: paymentDetail.razorpay_subscription_id,
      razorpay_signature: paymentDetail.razorpay_signature
    });
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || 'Failed to verify payment');
    throw error;
  }
});



const razorpaySlice = createSlice({
  name: "razorpay",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRazorpayid.fulfilled, (state, action) => {
        state.key = action.payload.key;
      })
      .addCase(purchaseCourseBundle.fulfilled, (state, action) => {
        state.subscription_id = action.payload.subscription_id;
      })
      .addCase(verifyUserPayment.fulfilled, (state, action) => {
        state.isPaymentVerified = action.payload.success;
        toast.success(action.payload.message);
      })
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          toast.error(action.error.message);
        }
      );
  },
});

export default razorpaySlice.reducer;