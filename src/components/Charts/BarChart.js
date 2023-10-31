import React from "react";
import Highcharts from "highcharts";
import SettingMenu from "./SettingMenu";
import highchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";

highchartsMore(Highcharts);

const barChartOptions = {
    chart: {
        type: 'bar',
    },
    title: {
        text: 'Bar Chart',
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
};

const BarChart = () => {
    return (
        <>
            <SettingMenu />
            <HighchartsReact highcharts={Highcharts} options={barChartOptions}
                containerProps={{ style: { height: "100%", width: "100%" } }}
            />
        </>
    )
}

export default BarChart;