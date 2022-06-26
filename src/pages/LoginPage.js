import React from 'react';
import {Card, Col, Row} from "antd";
import { Button, Form, Input } from 'antd';

const LoginPage = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
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
    )
};

export default LoginPage;