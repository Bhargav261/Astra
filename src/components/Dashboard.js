import BarChart from "./Charts/BarChart";
import ScatterChart from "./Charts/ScatterChart";
import React, { useState, useEffect } from "react";
import BoxWhiskerPlot from "./Charts/BoxWhiskerPlot";
import AreaRangeChart from "./Charts/AreaRangeChart";
import RGL, { WidthProvider } from "react-grid-layout";

import { useSelector } from 'react-redux';

const ReactGridLayout = WidthProvider(RGL);

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
        { w: 8, h: 11, x: 0, y: 0, i: "barchart" },
        { w: 4, h: 11, x: 8, y: 0, i: "areachart" },
        { w: 4, h: 11, x: 8, y: 0, i: "scatterchart" },
        { w: 8, h: 11, x: 0, y: 0, i: "boxchart" },
    ]);

    const [gridWidth, setGridWidth] = useState(window.innerWidth); // Initialize with window width
    const [gridHeight, setGridHeight] = useState(defaultProps.rowHeight * layout[0].h); // Initialize with the first chart's height

    const handleBreakpointChange = (newBreakpoint, newCols) => {
        console.log(`Breakpoint changed to ${newBreakpoint}`);
        console.log(`Number of columns: ${newCols}`);
    };

    useEffect(() => {
        function handleResize() {
            setGridWidth(window.innerWidth);
            setGridHeight(defaultProps.rowHeight * layout[0].h);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [layout, defaultProps.rowHeight]);

    const { layouts, value, userData, pendingState, chartList } = useSelector(state => state.home);

    return (
        <>
            <ReactGridLayout 
            onLayoutChange={newLayout => setLayout(newLayout)} {...defaultProps} onBreakpointChange={handleBreakpointChange} width={gridWidth}
            draggableHandle=".dragMe"
            >
                {layouts.map(item => {

                    const { i, w, h, x, y, key } = item || {};
                    const { type, title } = chartList[key] || {};

                    return (
                        <div className="chartBorder" key={i} data-grid={item} style={{ height: `${gridHeight}px`, width: `${(gridWidth / defaultProps.cols) * w}px` }}>
                            {type === "bar" && (
                                <BarChart title={title} type={type} chartKey={key} />
                            )}
                            {type === "arearange" && (
                                <AreaRangeChart title={title} type={type} chartKey={key}/>
                            )}
                            {type === "scatter" && (
                                <ScatterChart title={title} type={type} chartKey={key}/>
                            )}
                            {type === "boxplot" && (
                                <BoxWhiskerPlot title={title} type={type} chartKey={key} />
                            )}
                        </div>
                    )
                })}
            </ReactGridLayout>
        </>
    );
};

export default Dashboard;