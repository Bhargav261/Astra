import React from "react";
import Highcharts from "highcharts";
import SettingMenu from "./SettingMenu";
import highchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";
import ChartTitle from "./ChartTitle";

highchartsMore(Highcharts);

const AreaRangeChart = ({ chartKey, title, type }) => {

    const areachartOptions = {
        chart: {
            type: "area",
        },
        title: {
            text: "-",
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

    }
    
    return (
        <>
            <ChartTitle title={title} />
            <SettingMenu title={title} chartKey={chartKey} type={type} />
            <HighchartsReact highcharts={Highcharts} options={areachartOptions}
                containerProps={{ style: { height: "100%", width: "100%" } }}
            />
        </>
    )
}

export default AreaRangeChart;