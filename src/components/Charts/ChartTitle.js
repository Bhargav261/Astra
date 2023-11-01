import React from "react";

const ChartTitle = ({ title }) => {
    return (
        <>
        <div className="dragMe chartTitle">
            {title || 'Chart Title'}
        </div>
        </>
    )
}

export default ChartTitle;