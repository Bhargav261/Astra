import React from "react";
import Highcharts from "highcharts";
import SettingMenu from "./SettingMenu";
import highchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";
import ChartTitle from "./ChartTitle";

highchartsMore(Highcharts);

const BoxWhiskerPlot = ({ chartKey, title, type }) => {

    const boxchartOptions = {
        chart: {
            type: "boxplot",
        },
        title: {
            text: "-",
        },
        // subtitle: {
        //     text: "A chart displaying statistical information using box and whisker plots.",
        // },
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
    }


    return (
        <>
            <ChartTitle title={title} />
            <SettingMenu title={title} chartKey={chartKey} type={type} />
            <HighchartsReact highcharts={Highcharts} options={boxchartOptions}
                containerProps={{ style: { height: "100%", width: "100%" } }}
            />
        </>
    )
}

export default BoxWhiskerPlot;