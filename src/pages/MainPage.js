import React, {useEffect} from 'react';
import {Col, Row, Table} from "react-bootstrap";
import PieChartComponent from "../components/PieChartComponent";
import {Card} from "antd";
import BarChartComponent from "../components/BarChartComponent";
import axios from "axios";
import {getDayverData} from "../requests";


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

    useEffect(() => getDayverData(), [])

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

                {/*<Row>*/}
                {/*    <Col xs={6} md={9}>*/}
                {/*        <Card className="p-0 m-0 mt-3" >*/}
                {/*            <h5 style={{maxWidth: "1100px", marginLeft: "auto", marginRight: "auto"}} className="text-center py-3">Suv xo`jaligi obyektlariga o`rnatilgan raqamli qurilmalarning vazirlik serverlari bilan integratsiyasi bo`yicha ma`lumot. (Pudratchi tashkilotlar kesimida) 18.07.2022 </h5>*/}
                {/*            <div className="table-responsive">*/}
                {/*                <Table striped bordered hover size="sm">*/}
                {/*                    <thead className="text-center" style={{verticalAlign: "middle"}}>*/}
                {/*                    <tr>*/}
                {/*                        <th rowSpan="2">#</th>*/}
                {/*                        <th rowSpan="2" style={{width: "20%"}}>Pudratchi tashkilotlar</th>*/}
                {/*                        <th colSpan="3">Aqlli suv qurilmalari</th>*/}
                {/*                        <th colSpan="3">Dayver qurilmalari</th>*/}
                {/*                        <th colSpan="3">Nasos stansiyalarida  suv miqdorlari monitoringini yuritish qurilmalari</th>*/}
                {/*                    </tr>*/}
                {/*                    <tr>*/}
                {/*                        <th>Jami o'rnatilgan qurilmalar (dona)</th>*/}
                {/*                        <th>Ma`lumot yubormayotgan qurilmalar (dona)</th>*/}
                {/*                        <th>Umuman ma`lumot yubormagan qurilmalar (dona)</th>*/}
                {/*                        <th>Jami o'rnatilgan qurilmalar (dona)</th>*/}
                {/*                        <th>Ma`lumot yubormayotgan qurilmalar (dona)</th>*/}
                {/*                        <th>Umuman ma`lumot yubormagan qurilmalar (dona)</th>*/}
                {/*                        <th>Jami o'rnatilgan qurilmalar (dona)</th>*/}
                {/*                        <th>Ma`lumot yubormayotgan qurilmalar (dona)</th>*/}
                {/*                        <th>Umuman ma`lumot yubormagan qurilmalar (dona)</th>*/}
                {/*                    </tr>*/}
                {/*                    </thead>*/}
                {/*                    <tbody>*/}
                {/*                    <tr>*/}
                {/*                        <td>1</td>*/}
                {/*                        <th>OOO BLUE STAR GROUP</th>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                    </tr>*/}
                {/*                    <tr>*/}
                {/*                        <td>1</td>*/}
                {/*                        <th>As-sar smart sistem MCHJ</th>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                    </tr>*/}
                {/*                    <tr>*/}
                {/*                        <td>1</td>*/}
                {/*                        <th>MAX BARAKA GRAND-BIZNES</th>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                    </tr>*/}
                {/*                    <tr>*/}
                {/*                        <td>1</td>*/}
                {/*                        <th>UNIVERSAL TRADE TECHNO MARKET KHOREZM MChJ</th>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                    </tr>*/}
                {/*                    <tr>*/}
                {/*                        <td>1</td>*/}
                {/*                        <th>SMART SOLUTION SYSTEM</th>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                    </tr>*/}
                {/*                    <tr>*/}
                {/*                        <td>1</td>*/}
                {/*                        <th>SMART SOLUTION SYSTEM</th>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                    </tr>*/}
                {/*                    <tr>*/}
                {/*                        <td>1</td>*/}
                {/*                        <th>SMART SOLUTION SYSTEM</th>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                        <td>000</td>*/}
                {/*                    </tr>*/}
                {/*                    </tbody>*/}
                {/*                </Table>*/}
                {/*            </div>*/}
                {/*        </Card>*/}
                {/*    </Col>*/}
                {/*    <Col xs={6} md={3}>*/}
                {/*        <Card className="p-0 m-0 mt-3">*/}
                {/*            <BarChartComponent />*/}
                {/*        </Card>*/}
                {/*        <Card className="p-0 m-0 mt-3">*/}
                {/*            <h5 style={{maxWidth: "1100px", marginLeft: "auto", marginRight: "auto", fontWeight: "bold"}} className="text-center py-3 mb-1">Integratsiyalar soni</h5>*/}
                {/*            <div className="table-responsive">*/}
                {/*                <Table striped bordered hover size="sm">*/}
                {/*                    <thead className="text-center" style={{verticalAlign: "middle"}}>*/}
                {/*                    <tr>*/}
                {/*                        <th>#</th>*/}
                {/*                        <th>Viloyat nomi</th>*/}
                {/*                        <th>Aqlli-suv</th>*/}
                {/*                        <th>Nasos</th>*/}
                {/*                        <th>Dayver</th>*/}
                {/*                    </tr>*/}
                {/*                    </thead>*/}
                {/*                    <tbody>*/}
                {/*                    <tr>*/}
                {/*                        <td>1</td>*/}
                {/*                        <th>Andijon</th>*/}
                {/*                        <td>1</td>*/}
                {/*                        <td>2</td>*/}
                {/*                        <td>3</td>*/}
                {/*                    </tr>*/}
                {/*                    <tr>*/}
                {/*                        <td>2</td>*/}
                {/*                        <th>Buxoro</th>*/}
                {/*                        <td>1</td>*/}
                {/*                        <td>2</td>*/}
                {/*                        <td>3</td>*/}
                {/*                    </tr>*/}
                {/*                    </tbody>*/}
                {/*                </Table>*/}
                {/*            </div>*/}
                {/*        </Card>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
            </>
    );
};

export default MainPage;