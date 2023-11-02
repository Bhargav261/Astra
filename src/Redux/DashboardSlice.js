import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'Daynamic Dashboard',
    initialState: {
        chartList: {
            barchart: {
                key: 'barchart',
                type: 'bar',
                title: 'Oil Sell Chart'
            },
            areachart: {
                key: 'areachart',
                type: "area",
                title: 'Gas Sell Chart'
            },
            boxchart: {
                key: 'boxchart',
                type: "boxplot",
                title: 'Experiment Chart'
            },
            scatterchart: {
                key: 'scatterchart',
                type: 'scatter',
                title: 'Olympics Data'
            }
        },
    },
    reducers: {
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

export const { updateTitle, updateType } = slice.actions;

export default slice.reducer;
