import React from 'react';
import {Card} from "antd";
import CanvasJSReact from '../units/canvasjs.react';
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PieChartComponent = ({info}) => {
    console.log(info)
    const options = {
        animationEnabled: true,
        title: {
            text: `${info.name}`
        },
        height: 250,
        subtitles: [{
            text: `Jami: ${info.total}`,
            verticalAlign: "center",
            fontSize: 20,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###'%'",
            dataPoints: [
                { name: "Umuman kelmagan", y: info.noworking },
                { name: "Uzulishi bor", y: info.nostable },
                { name: "Ishlamoqda", y: info.working },
            ]
        }]
    }
    return (
        <Card className="p-0 m-0">
            <CanvasJSChart options = {options} />
        </Card>
    );
};

export default PieChartComponent;