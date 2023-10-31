import React, { useState } from "react";
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
        { w: 8, h: 2, x: 0, y: 0, i: "graph1" },
        { w: 4, h: 2, x: 8, y: 0, i: "graph2" },
    ]);


    const handleBreakpointChange = (newBreakpoint, newCols) => {
        console.log(`Breakpoint changed to ${newBreakpoint}`);
        console.log(`Number of columns: ${newCols}`);
    };

    return (
        <>
            <ReactGridLayout onLayoutChange={newLayout => setLayout(newLayout)} {...defaultProps}
                onBreakpointChange={handleBreakpointChange}
            >
                {layout.map(item => (
                    <div key={item.i} data-grid={item}>
                        <span>{item.i}</span>
                    </div>
                ))}
            </ReactGridLayout>
        </>
    );
};

export default Dashboard;