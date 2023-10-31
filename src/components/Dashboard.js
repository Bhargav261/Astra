import BarChart from "./Charts/BarChart";
import ScaterChart from "./Charts/ScaterChart";
import React, { useState, useEffect } from "react";
import BoxWhiskerPlot from "./Charts/BoxWhiskerPlot";
import AreaRangeChart from "./Charts/AreaRangeChart";
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

    const [layout, setLayout] = useState([
        { w: 8, h: 11, x: 0, y: 0, i: "barchart" },
        { w: 4, h: 11, x: 8, y: 0, i: "areachart" },
        { w: 4, h: 11, x: 8, y: 0, i: "scaterchart" },
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

    return (
        <>
            <ReactGridLayout onLayoutChange={newLayout => setLayout(newLayout)} {...defaultProps} onBreakpointChange={handleBreakpointChange} width={gridWidth}>
                {layout.map(item => (
                    <div key={item.i} data-grid={item} style={{ height: `${gridHeight}px`, width: `${(gridWidth / defaultProps.cols) * item.w}px` }}>
                        {item.i === "barchart" && (
                            <BarChart />
                        )}
                        {item.i === "areachart" && (
                            <AreaRangeChart />
                        )}
                        {item.i === "scaterchart" && (
                            <ScaterChart />
                        )}
                        {item.i === "boxchart" && (
                            <BoxWhiskerPlot />
                        )}
                    </div>
                ))}
            </ReactGridLayout>
        </>
    );
};

export default Dashboard;