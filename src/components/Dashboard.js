import { useSelector } from 'react-redux';
import ChartView from './Charts/ChartView';
import { findBreakPoint } from './Service';
import React, { useState, useEffect } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import { layoutConfig } from './layoutConfig';

const ReactGridLayout = WidthProvider(RGL);

const Dashboard = () => {

    const defaultProps = {
        isDraggable: true,
        isRearrangeable: true,
        isResizable: true,
        items: 5,
        rowHeight: 30,
        preventCollision: false,
        // cols: 12,
        draggableHandle: ".grid-item__title",
        breakpoints: { lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 },
    };
    const { chartList } = useSelector(state => state.dashboard);

    const [layout, setLayout] = useState([
        { w: 8, h: 11, x: 0, y: 0, i: "barchart" },
        { w: 4, h: 11, x: 8, y: 0, i: "areachart" },
        { w: 4, h: 11, x: 8, y: 0, i: "scatterchart" },
        { w: 8, h: 11, x: 0, y: 0, i: "boxchart" },
    ]);
    const [gridWidth, setGridWidth] = useState(window.innerWidth);
    const [gridHeight, setGridHeight] = useState(defaultProps.rowHeight * layout[0].h);
    const [currentBreakpoint, setCurrentBreakpoint] = useState(null);

    useEffect(() => {
        handleResize();
    }, [])

    useEffect(() => {
        if (currentBreakpoint) {
            setLayout(layoutConfig[currentBreakpoint])
        }
    }, [currentBreakpoint])

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [layout, defaultProps.rowHeight]);

    const handleResize = () => {
        setGridWidth(window.innerWidth);
        setGridHeight(defaultProps.rowHeight * layout[0].h);

        const windowWidth = window.innerWidth;
        const breakpoint = findBreakPoint({ windowWidth, breakpoints: defaultProps.breakpoints });

        setCurrentBreakpoint(breakpoint);

    }

    return (
        <>
            <div className='chartDispaly'>
                <ReactGridLayout
                    onLayoutChange={newLayout => setLayout(newLayout)}
                    {...defaultProps}
                    width={gridWidth}
                    draggableHandle=".dragMe"
                >
                    {layout?.length && layout.map((item) => {
                        const { i: key, w } = item || {};
                        const { type, title } = chartList[key] || {};

                        return (
                            <div className="chartBorder" key={key} data-grid={item} style={{ height: `${gridHeight}px`, width: `${(gridWidth / defaultProps.cols) * w}px` }}>
                                <ChartView title={title} type={type} chartKey={key} />
                            </div>
                        )
                    })}
                </ReactGridLayout>
            </div>
        </>
    );
};

export default Dashboard;