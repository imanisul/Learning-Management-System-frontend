import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

import axiosInstance from "../../Helpers/axiosInstance.jsx";

const initialState = {
  key: "",
  subscription_id: "",
  isPaymentVerified: false,
  allPayments: {},
  finalMonths: {},
  monthlySalesRecord: []
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

export const getPaymentRecord = createAsyncThunk("paymentrecord", async () => {
  try {
    const res = axiosInstance.get("/payments?count=100");
    toast.promise(res, {
      loading: "Getting the payments record...",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to get payment records",
    });

    const response = await res;
    return response.data;
  } catch (error) {
    toast.error("Operation failed");
  }
});

export const cancelCourseBundle = createAsyncThunk("/cancelCourse",async () => {
  try {
    const res = axiosInstance.post("/payments/unsubscribe");
    toast.promise(res, {
      loading: "Unsubscribing the bundle...",
      success: "Bundle unsubscibed successfully",
      error: "Failed to unsubscibe the bundle",
    });
    const response = await res;
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}
);



const razorpaySlice = createSlice({
  name: "razorpay",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRazorpayid.rejected, () => {
        toast.error("Failed to get razor pay id");
      })
      .addCase(getRazorpayid.fulfilled, (state, action) => {
        state.key = action?.payload?.key;
      })
      .addCase(purchaseCourseBundle.fulfilled, (state, action) => {
        state.subscription_id = action?.payload?.subscription_id;
      })
      .addCase(verifyUserPayment.fulfilled, (state, action) => {
        toast.success(action?.payload?.message);
        state.isPaymentVerified = action?.payload?.success;
      })
      .addCase(verifyUserPayment.rejected, (state, action) => {
        toast.error(action?.payload?.message);
        state.isPaymentVerified = action?.payload?.success;
      })
      .addCase(getPaymentRecord.fulfilled, (state, action) => {
        state.allPayments = action?.payload?.allPayments;
        state.finalMonths = action?.payload?.finalMonths;
        state.monthlySalesRecord = action?.payload?.monthlySalesRecord;
      });
  },
});

export default razorpaySlice.reducer;