import React from "react";
import Highcharts from "highcharts";
import SettingMenu from "./SettingMenu";
import highchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";

highchartsMore(Highcharts);

const boxPlotOptions = {
    chart: {
        type: "boxplot",
    },
    title: {
        text: "Box and Whisker Plot Chart",
    },
    subtitle: {
        text: "A chart displaying statistical information using box and whisker plots.",
    },
    yAxis: {
        title: {
            text: "Values",
        },
    },
    xAxis: {
        title: {
            text: "Categories",
        },
        categories: ["Category 1", "Category 2", "Category 3"],
    },
    series: [
        {
            name: "Box and Whisker Plot",
            data: [
                [760, 801, 848, 895, 965],
                [733, 853, 939, 980, 1080],
                [714, 762, 817, 870, 918],
            ],
        },
    ],
};

const BoxWhiskerPlot = () => {
    return (
        <>
            <SettingMenu />
            <HighchartsReact highcharts={Highcharts} options={boxPlotOptions}
                containerProps={{ style: { height: "100%", width: "100%" } }}
            />
        </>
    )
}

export default BoxWhiskerPlot;