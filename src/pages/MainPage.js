import React, {useEffect} from 'react';
import {Col, Row} from "react-bootstrap";
import PieChartComponent from "../components/PieChartComponent";
import {getDayverData} from "../requests";
import {useDispatch, useSelector} from "react-redux";
import dayverAction from "../redux/actions/dayverAction";
import aqllisuvAction from "../redux/actions/aqllisuvAction";
import axios from "axios";
import {getToday} from "../units/today";


const MainPage = () => {
    const vilID = JSON.parse(localStorage.getItem("user")).vilID
    const dispatch = useDispatch()
    useEffect(() => {
        let dayver = {
            name: "Dayver",
            total: null,
            working: null,
            nostable: null,
            noworking: null,
            status: false
        }
        const configDayver = {
            headers: { Authorization: `Bearer njHRNxCeNFrvcAaKKlWcxcQrgCwiADH7` }
        };
        axios
            .post('http://89.236.195.198:3010/data/last', {}, configDayver)
            .then(({ data: isData }) => {
                if (isData) {
                    let filterData = null
                    if (vilID != 14) {
                        filterData = isData[0].filter(item => item.region == vilID)
                    } else {
                        filterData = isData[0]
                    }
                    dayver.total = filterData.length
                    dayver.noworking = filterData.filter(item => item.data == null).length
                    dayver.working = filterData.filter(item => item.data != null).map(item => item.data).filter(item => item.created_at >= getToday()).length
                    dayver.nostable = filterData.filter(item => item.data != null).map(item => item.data).filter(item => item.created_at < getToday()).length
                    dayver.status = true
                    dispatch(dayverAction({dayver, filterData}))
                } else {
                    dayver.total = 0
                    dayver.noworking = 0
                    dayver.working = 0
                    dayver.nostable = 0
                    dayver.status = true
                    dispatch(dayverAction(dayver))
                }
            })
            .catch(error => {
                console.log(error);
            });
    }, [])

    useEffect(() => {
        let aqllisuv = {
            name: "Aqlli-suv",
            total: null,
            working: null,
            nostable: null,
            noworking: null,
            status: false
        }
        const configWater = {
            headers: { Authorization: `Bearer tMj_7E8NzYn-tDM2ciEbz9BQCr_sfd6z` }
        };
        axios
            .post('http://89.236.195.198:2010/api/all', {}, configWater)
            .then(({ data: isData }) => {
                if (isData) {
                    let filterData = null
                    if (vilID != 14) {
                        filterData = isData[0].filter(item => item.region == vilID)
                    } else {
                        filterData = isData[0]
                    }
                    aqllisuv.total = filterData.length
                    aqllisuv.noworking = filterData.filter(item => item.http == null).length
                    aqllisuv.working = filterData.filter(item => item.http != null).map(item => item.http).filter(item => item.created_at >= getToday()).length
                    aqllisuv.nostable = filterData.filter(item => item.http != null).map(item => item.http).filter(item => item.created_at < getToday()).length
                    aqllisuv.status = true
                    dispatch(aqllisuvAction({aqllisuv, filterData}))
                } else {
                    aqllisuv.total = 0
                    aqllisuv.noworking = 0
                    aqllisuv.working = 0
                    aqllisuv.nostable = 0
                    aqllisuv.status = true
                    dispatch(aqllisuvAction(aqllisuv))
                }
            })
            .catch(error => {
                console.log(error);
            });
    }, [])

    const dayverAll = useSelector(state => state.dayverReducer)
    const aqllisuvAll = useSelector(state => state.aqllisuvReducer)
    console.log(aqllisuvAll[0]?.dayver)

    return (
            <>
                <Row>
                    <Col xs={6} md={4}>
                        <PieChartComponent info={dayverAll[0]?.dayver} />
                    </Col>
                    <Col xs={6} md={4}>
                        <PieChartComponent info={dayverAll[0]?.dayver} />
                    </Col>
                    <Col xs={6} md={4}>
                        <PieChartComponent info={dayverAll[0]?.dayver} />
                    </Col>
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