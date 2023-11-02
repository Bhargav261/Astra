import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from '../Redux/DashboardSlice';

export default configureStore({
    reducer: {
        dashboard: dashboardReducer,
    },
});

