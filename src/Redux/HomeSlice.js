import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'Daynamic Dashboard',
    initialState: {
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
