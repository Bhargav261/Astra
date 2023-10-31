import React from "react";
import Highcharts from "highcharts";
import SettingMenu from "./SettingMenu";
import highchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";

highchartsMore(Highcharts);

const areaRangeChartOptions = {
    chart: {
        type: "arearange",
    },
    title: {
        text: "Area Range Chart",
    },
    subtitle: {
        text: "A range chart that displays a range between a lower and higher value for each point.",
    },
    yAxis: {
        title: {
            text: "Values",
        },
    },
    xAxis: {
        title: {
            text: "Time",
        },
    },
    series: [
        {
            name: "Range",
            data: [
                [1, 2],
                [3, 4],
                [5, 6],
                [7, 8],
            ],
        },
    ],
};

const AreaRangeChart = () => {
    return (
        <>
            <SettingMenu />
            <HighchartsReact highcharts={Highcharts} options={areaRangeChartOptions}
                containerProps={{ style: { height: "100%", width: "100%" } }}
            />
        </>
    )
}

export default AreaRangeChart;