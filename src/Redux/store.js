import {configureStore} from '@reduxjs/toolkit';

import AuthSliceReducer from './Slices/AuthSlice.js';  
import CourseSliceReducer from './Slices/CourseSlice.js';
import LectureSliceReducer from './Slices/LectureSlice'
import RazorpaySliceReducer from './Slices/RazorpaySlice.js';

const store = configureStore({
    reducer: {
        auth: AuthSliceReducer,
        course: CourseSliceReducer,
        razorpay: RazorpaySliceReducer,
        lecture: LectureSliceReducer,
    },
    devTools: true
});

export default store;