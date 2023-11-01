import { useSelector } from 'react-redux';
import ChartView from './Charts/ChartView';
import React, { useState, useEffect } from "react";
import RGL, { WidthProvider } from "react-grid-layout";

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

    const { layouts, chartList } = useSelector(state => state.home);

    const [layout, setLayout] = useState([
        { w: 8, h: 11, x: 0, y: 0, i: "barchart", key: "barchart" },
        { w: 4, h: 11, x: 8, y: 0, i: "areachart", key: "areachart" },
        { w: 4, h: 11, x: 8, y: 0, i: "scatterchart", key: "scatterchart" },
        { w: 8, h: 11, x: 0, y: 0, i: "boxchart", key: "boxchart" },
    ]);
    const [gridWidth, setGridWidth] = useState(window.innerWidth); // Initialize with window width
    const [gridHeight, setGridHeight] = useState(defaultProps.rowHeight * layout[0].h); // Initialize with the first chart's height

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

    const handleBreakpointChange = (newBreakpoint, newCols) => {
        console.log(`Breakpoint changed to ${newBreakpoint}`);
        console.log(`Number of columns: ${newCols}`);
    };

    return (
        <>
            <ReactGridLayout
                onLayoutChange={newLayout => setLayout(newLayout)} {...defaultProps} onBreakpointChange={handleBreakpointChange} width={gridWidth}
                draggableHandle=".dragMe"
            >
                {layouts.map((item) => {

                    const { i, w, key } = item || {};
                    const { type, title } = chartList[key] || {};

                    return (
                        <div className="chartBorder" key={i} data-grid={item} style={{ height: `${gridHeight}px`, width: `${(gridWidth / defaultProps.cols) * w}px` }}>
                            <ChartView title={title} type={type} chartKey={key} />
                        </div>
                    )
                })}
            </ReactGridLayout>
        </>
    );
};

export default Dashboard;