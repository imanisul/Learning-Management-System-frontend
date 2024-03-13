import {configureStore} from '@reduxjs/toolkit';

import authSliceReducer from './Slices/AuthSlice.jsx';  
import courseSliceReducer from './Slices/CourseSlice.jsx';

const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        course: courseSliceReducer
    },
    devTools: true
});

export default store;