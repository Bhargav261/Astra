import React from "react";
import Highcharts from "highcharts";
import SettingMenu from "./SettingMenu";
import highchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";

highchartsMore(Highcharts);

const scatterChartOptions = {
    chart: {
        type: 'scatter',
    },
    title: {
        text: 'Scatter Chart',
    },
    xAxis: {
        title: {
            text: 'X-Axis',
        },
    },
    yAxis: {
        title: {
            text: 'Y-Axis',
        },
    },
    series: [
        {
            name: 'Data Series',
            data: [
                [1, 2],
                [2, 4],
                [3, 6],
                [4, 8],
            ],
        },
    ],
};


const ScaterChart = () => {
    return (
        <>
            <SettingMenu />
            <HighchartsReact highcharts={Highcharts} options={scatterChartOptions}
                containerProps={{ style: { height: "100%", width: "100%" } }}
            />
        </>
    )
}

export default ScaterChart;