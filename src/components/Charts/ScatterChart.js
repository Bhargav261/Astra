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
              text: 'Height',
            },
            labels: {
              format: '{value} m',
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true,
          },
          yAxis: {
            title: {
              text: 'Weight',
            },
            labels: {
              format: '{value} kg',
            },
          },
          legend: {
            enabled: true,
          },
          plotOptions: {
            scatter: {
              marker: {
                radius: 2.5,
                symbol: 'circle',
                states: {
                  hover: {
                    enabled: true,
                    lineColor: 'rgb(100,100,100)',
                  },
                },
              },
              states: {
                hover: {
                  marker: {
                    enabled: false,
                  },
                },
              },
              jitter: {
                x: 0.005,
              },
            },
          },
          tooltip: {
            pointFormat: 'Height: {point.x} m <br/> Weight: {point.y} kg',
          },
          series: [
            { name: 'Basketball', id: 'basketball', data: [[2.05, 100], [2.01, 95], [2.10, 110], [2.02, 97]] },
            { name: 'Triathlon', id: 'triathlon', data: [[1.80, 70], [1.75, 68], [1.85, 72], [1.78, 69]] },
            { name: 'Volleyball', id: 'volleyball', data: [[1.90, 80], [1.88, 78], [1.92, 85], [1.89, 82]] },
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