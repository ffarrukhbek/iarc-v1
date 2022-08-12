import React from 'react';
import CanvasJSReact from '../units/canvasjs.react';
let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

const BarChartComponent = () => {

    const options = {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "Integratsiya"
        },
        axisX: {
            title: "",
            reversed: true,
        },
        axisY: {
            title: "",
            includeZero: true,
            labelFormatter: (e) => {
                let suffixes = ["", "K", "M", "B"];
                let order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
                if(order > suffixes.length - 1)
                    order = suffixes.length - 1;
                let suffix = suffixes[order];
                return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
            }
        },
        data: [{
            type: "bar",
            dataPoints: [
                { y:  34, label: "Qoraqalpoq'iston" },
                { y:  54, label: "Andijon" },
                { y:  45, label: "Buxoro" },
                { y:  89, label: "Jizzax" },
                { y:  45, label: "Qashqadaryo" },
                { y:  67, label: "Navoiy" },
                { y:  45, label: "Namangan" },
                { y:  24, label: "Samarqand" },
                { y:  46, label: "Sirdaryo" },
                { y:  24, label: "Surxondaryo" },
                { y:  86, label: "Toshkent" },
                // { y:  74, label: "Farg'ona" },
                // { y:  45, label: "Xorazm" }
            ]
        }]
    }

    return (
        <div>
            <CanvasJSChart options = {options} />
        </div>
    );
};

export default BarChartComponent;