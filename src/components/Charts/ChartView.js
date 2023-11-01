import React from "react";
import BarChart from "./BarChart";
import AreaRangeChart from "./AreaRangeChart";
import ScatterChart from "./ScatterChart";
import BoxWhiskerPlot from "./BoxWhiskerPlot";

const ChartView = ({ title, type, chartKey }) => {
    return (
        <>
            {type === "bar" && (
                <BarChart title={title} type={type} chartKey={chartKey} />
            )}
            {type === "arearange" && (
                <AreaRangeChart title={title} type={type} chartKey={chartKey} />
            )}
            {type === "scatter" && (
                <ScatterChart title={title} type={type} chartKey={chartKey} />
            )}
            {type === "boxplot" && (
                <BoxWhiskerPlot title={title} type={type} chartKey={chartKey} />
            )}
        </>
    )
}
export default ChartView;