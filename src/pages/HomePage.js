import React, {useState } from 'react';
import {Card, Carousel, Col, Radio, Row, Table} from 'antd';
import {NavLink} from "react-router-dom";
import {CameraOutlined, EyeOutlined} from "@ant-design/icons";
import CanvasJSReact from '../units/canvasjs.react';
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

const HomePage = () => {
    const options = {
        animationEnabled: true,
        title: {
            text: "Aqlli-suv"
        },
        subtitles: [{
            text: "Jami: 456",
            verticalAlign: "center",
            fontSize: 24,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###'%'",
            dataPoints: [
                { name: "Umuman kelmagan", y: 29 },
                { name: "Uzulishi bor", y: 31 },
                { name: "Ishlamoqda", y: 40 },
            ]
        }]
    }

    return (
        <>
            <Carousel dotPosition={"top"}>
                <div>
                    <Row>
                        <Col lg={{span: 8}}>
                            <Card size="small" style={{padding: "10px"}}  extra={
                                <><NavLink to="test"><EyeOutlined className="icon-card" /></NavLink> <CameraOutlined className="icon-card" /></>
                            } >
                                <CanvasJSChart options = {options} />
                            </Card>
                        </Col>
                        <Col lg={{span: 8}}>
                            <Card size="small"  extra={
                                <><NavLink to="test"><EyeOutlined className="icon-card" /></NavLink> <CameraOutlined className="icon-card" /></>
                            } >
                                <CanvasJSChart options = {options} />
                            </Card>
                        </Col>
                        <Col lg={{span: 8}}>
                            <Card size="small"  extra={
                                <><NavLink to="test"><EyeOutlined className="icon-card" /></NavLink> <CameraOutlined className="icon-card" /></>
                            } >
                                <CanvasJSChart options = {options} />
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col lg={{span: 8}}>
                            <Card size="small" title="Small size card" extra={<a href="#">More</a>} >
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </Col>
                        <Col lg={{span: 8}}>
                            <Card size="small" title="Small size card" extra={<a href="#">More</a>} >
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </Col>
                        <Col lg={{span: 8}}>
                            <Card size="small" title="Small size card" extra={<a href="#">More</a>} >
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Carousel>
        </>
    );
};

export default HomePage;