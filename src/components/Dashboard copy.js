import React, { useState, useEffect } from "react";
import Highcharts from 'highcharts'; // Import Highcharts
import HighchartsReact from 'highcharts-react-official';
import highchartsMore from "highcharts/highcharts-more";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);


highchartsMore(Highcharts);

const barChartOptions = {
    chart: {
        type: 'bar',
    },
    title: {
        text: 'Bar Chart',
    },
    xAxis: {
        categories: ['Category 1', 'Category 2', 'Category 3'],
    },
    yAxis: {
        title: {
            text: 'Values',
        },
    },
    series: [
        {
            name: 'Series 1',
            data: [4, 7, 2],
        },
    ],
};


const Dashboard = () => {
    const defaultProps = {
        isDraggable: true,
        isResizable: true,
        items: 5,
        rowHeight: 30,
        preventCollision: false,
        cols: 12,
        breakpoints: { lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 },
    };

    const [layout, setLayout] = useState([
        { w: 8, h: 11, x: 0, y: 0, i: "graph1" },
        { w: 4, h: 11, x: 8, y: 0, i: "graph2" },
    ]);

    const [gridDimensions, setGridDimensions] = useState({ width: 0, height: 0 });

    const handleBreakpointChange = (newBreakpoint, newCols) => {
        console.log(`Breakpoint changed to ${newBreakpoint}`);
        console.log(`Number of columns: ${newCols}`);
    };

    useEffect(() => {
        // Calculate and set the grid dimensions when the component mounts or the layout changes
        const grid = document.querySelector(".react-grid-layout");
        if (grid) {
            const rect = grid.getBoundingClientRect();
            setGridDimensions({ width: rect.width, height: rect.height });
        }
    }, [layout]);

    return (
        <>
            <ReactGridLayout onLayoutChange={newLayout => setLayout(newLayout)} {...defaultProps} onBreakpointChange={handleBreakpointChange}>
                {layout.map(item => (
                    <div key={item.i} data-grid={item}>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={barChartOptions}
                            containerProps={{
                                style: {
                                    height: `${gridDimensions.height}px`, // Set the chart's height to match grid height
                                    width: `${gridDimensions.width}px`, // Set the chart's width to match grid width
                                },
                            }}
                        />
                    </div>
                ))}
            </ReactGridLayout>
        </>
    );
};

export default Dashboard;










// import React, { useState } from "react";
// import BarChart from "./Charts/BarChart";
// import ScaterChart from "./Charts/ScaterChart";
// import BoxWhiskerPlot from "./Charts/BoxWhiskerPlot";
// import AreaRangeChart from "./Charts/AreaRangeChart";
// import RGL, { WidthProvider } from "react-grid-layout";

// const ReactGridLayout = WidthProvider(RGL);

// const Dashboard = () => {

//     const defaultProps = {
//         isDraggable: true,
//         isResizable: true,
//         items: 5,
//         rowHeight: 30,
//         preventCollision: false,
//         cols: 12,
//         breakpoints: { lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 },
//     };

//     const [layout, setLayout] = useState([
//         { w: 8, h: 11, x: 0, y: 0, i: "graph1" },
//         { w: 4, h: 11, x: 8, y: 0, i: "graph2" },
//     ]);

//     const handleBreakpointChange = (newBreakpoint, newCols) => {
//         console.log(`Breakpoint changed to ${newBreakpoint}`);
//         console.log(`Number of columns: ${newCols}`);
//     };

//     return (
//         <>
//             <ReactGridLayout onLayoutChange={newLayout => setLayout(newLayout)} {...defaultProps}
//                 onBreakpointChange={handleBreakpointChange}
//             >
//                 {layout.map(item => (
//                     <div key={item.i} data-grid={item}>
//                         <BarChart />
//                     </div>
//                 ))}
//             </ReactGridLayout>

//             {/* <BarChart />

//             <AreaRangeChart />

//             <ScaterChart />

//             <BoxWhiskerPlot /> */}
//         </>
//     );
// };

// export default Dashboard;