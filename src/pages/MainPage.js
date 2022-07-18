import React from 'react';
import {Col, Row} from "react-bootstrap";
import {Card} from "antd";
import PieChartComponent from "../components/PieChartComponent";


const MainPage = () => {
    const datas = [
        {
            name: "Aqlli-suv",
            total: "456",
            working: "40",
            noworking: "29",
            nostable: "31"
        },
        {
            name: "Dayver",
            total: "302",
            working: "25",
            noworking: "25",
            nostable: "50"
        },
        {
            name: "Nasos",
            total: "890",
            working: "35",
            noworking: "45",
            nostable: "20"
        }
    ]

    return (
            <>
                <Row>
                    {
                        datas.map((item, index) => {
                            return(
                                <Col key={index} xs={6} md={4}>
                                    <PieChartComponent info={item} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </>
    );
};

export default MainPage;