import React from "react";
import Highcharts from "highcharts";
import SettingMenu from "./SettingMenu";
import highchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";
import ChartTitle from "./ChartTitle";

highchartsMore(Highcharts);

const ScatterChart = ({ chartKey, title, type }) => {

    const scatterchartOptions = {
        chart: {
            type: 'scatter',
        },
        title: {
            text: '-',
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
    }

    return (
        <>
            <ChartTitle title={title} />
            <SettingMenu title={title} chartKey={chartKey} type={type} />
            <HighchartsReact highcharts={Highcharts} options={scatterchartOptions}
                containerProps={{ style: { height: "100%", width: "100%" } }}
            />
        </>
    )
}

export default ScatterChart;