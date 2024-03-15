import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

import axiosaInstance from "../../Helpers/axiosInstance.jsx";

const initialState = {
    key: "",
    subscription_id: "",
    isPaymentVerified: false,
    allPayments: {},
    finalMonths: {},
    montlySalesRecord: []
}

export const getRazorpayid = createAsyncThunk('/razorpay/getId', async () => {
    try {
        const response = await axiosaInstance.get('/payments/razorpay-key');
        return response.data;
    } catch (error) {
        toast.error('Failed to load data!');
    }
});

export const purchaseCourseBundle = createAsyncThunk('/purchaseCourse', async () => {
    try {
        const response = await axiosaInstance.post('/payments/subscribe');
        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
});

export const verifyUserPayment = createAsyncThunk('/payments/verify', async (data) => {
    try {
        const response = await axiosaInstance.post('/payments/verify', {
            razorpay_payment_id: data.razorpay_payment_id,
            razorpay_subscription_id: data.razorpay_subscription_id,
            razorpay_signature: data.razorpay_signature
        });
        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
});

export const getPaymentRecord = createAsyncThunk('/payments/record', async () => {
    try {
        const response =  axiosaInstance.get('/payments?count=100');
        toast.promise(response, {
            loading: "Getting the payment records",
            success: (data) => {
                return data?.data?.message
            },
            error: "Failed to fetch payment records"
        })
        return (await response).data;
    } catch (error) {
        toast.error("Operation failed! Please refresh or contact support!");
    }
});

export const cancelCourseBundle = createAsyncThunk('/payments/cancel', async () => {
    try {
        const response =  axiosaInstance.post('/payments/unsubscribe');
        toast.promise(response, {
            loading: "Cancelling your subscription..",
            success: (data) => {
                return data?.data?.message
            },
            error: "Failed to fetch payment records"
        })
        return (await response).data;
    } catch (error) {
        toast.error("Failed to unsubscribe!");
    }
});

const razorpaySlice = createSlice({
     name: "razorpay",
     initialState,
     reducers: {},
     extraReducers: (builder) => {  
        builder
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
            toast.success(action?.payload?.message);
            state.isPaymentVerified = action?.payload?.success;
        })
        .addCase(getPaymentRecord.fulfilled, (state, action) => {
            state.allPayments = action?.payload?.allPayments;
            state.finalMonths = action?.payload?.finalMonths;
            state.montlySalesRecord = action?.payload?.montlySalesRecord;
        })

     }
});

export default razorpaySlice.reducer;