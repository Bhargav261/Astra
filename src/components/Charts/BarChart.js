import React from "react";
import Highcharts from "highcharts";
import SettingMenu from "./SettingMenu";
import highchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";
import ChartTitle from "./ChartTitle";

highchartsMore(Highcharts);

const BarChart = ({ chartKey, title, type }) => {

    const barchartOptions = {
        chart: {
            type: 'bar',
        },
        title: {
            text: '-',
        },
        xAxis: {
            categories: ['Category 1', 'Category 2', 'Category 3'],
        },
        yAxis: {
            title: {
                text: 'Values',
            },
        },
        series: [
            {
                name: 'Series 1',
                data: [4, 7, 2],
            },
        ],
    }


    return (
        <>
            <ChartTitle title={title} />
            <SettingMenu title={title} chartKey={chartKey} type={type} />
            <HighchartsReact highcharts={Highcharts} options={barchartOptions}
                containerProps={{ style: { height: "100%", width: "100%" } }}
            />
        </>
    )
}

export default BarChart;