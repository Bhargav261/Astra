import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const changeTitle = (data) => {
    return data;
}

export const slice = createSlice({
    name: 'Home Page Counter',
    initialState: {
        value: 10,
        userData: [],
        pendingState: false,
        chartList: {
            barchart: {
                key: 'barchart',
                type: 'bar',
                title: 'Chart 1'
            },
            areachart: {
                key: 'areachart',
                type: "arearange",
                title: 'Chart 2'
            },
            boxchart: {
                key: 'boxchart',
                type: "boxplot",
                title: 'Chart 3'
            },
            scatterchart: {
                key: 'scatterchart',
                type: 'scatter',
                title: 'Chart 4'
            }
        },
        layouts: [
            { w: 8, h: 11, x: 0, y: 0, i: "barchart", key: "barchart" },
            { w: 4, h: 11, x: 8, y: 0, i: "areachart", key: "areachart" },
            { w: 4, h: 11, x: 8, y: 0, i: "scatterchart", key: "scatterchart" },
            { w: 8, h: 11, x: 0, y: 0, i: "boxchart", key: "boxchart" },
        ],
    },
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        updateTitle: (state, action) => {
            const { title, chart } = action.payload;
            state.chartList[chart].title = title
        },
        updateType: (state, action) => {
            const { type, chart } = action.payload;
            state.chartList[chart].type = type;
        }
    },
    extraReducers: {}
});

export const { increment, decrement, updateTitle, updateType } = slice.actions;

export default slice.reducer;
