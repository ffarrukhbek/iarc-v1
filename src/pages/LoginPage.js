import React, {useState} from 'react';
import {Alert, Card, Col, Row} from "antd";
import { Button, Form, Input } from 'antd';
import {users} from "../static_data/users";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const [alert, setAlert] = useState(false)
    const navigate = useNavigate()

    const onFinish = (values) => {
        const  user = users.filter(e => e.login == values.username)
        if (user.length == 0 || user[0].parol != values.password) {
            setAlert(true)
        } else {
            localStorage.setItem("user", JSON.stringify(user[0]))
            navigate('/')
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            {
                alert ?
                    <Alert
                        message="Xato"
                        description="Login yoki parol noto'g'ri. Qaytadan harakat qiling!"
                        type="error"
                        showIcon
                        style={{ position: "absolute", bottom:"20px", right: "20px"}}
                    /> : ""
            }

            <Row align={"middle"} style={{height: "80vh"}}>
                <Col xs={24} md={{span: 6, offset: 9}}>
                    <div className="barcode">
                        <img src="./img/barcode.gif" alt="bar code" />
                    </div>
                    <Card>
                        <Form
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <div style={{paddingBottom: "3px"}}>Login</div>
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Iltimos berilgan loginni kiriting!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <div style={{paddingBottom: "3px"}}>Parol</div>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Iltimos berilgan parolni kiriting!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" style={{width: "100%", borderRadius: "10px"}}>
                                    Kirish
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </>
    )
};

export default LoginPage;