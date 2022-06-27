import React, { useState } from 'react';
import {Outlet} from 'react-router-dom';
import {Dropdown, Layout, Menu, Space} from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    LikeOutlined,
    DownOutlined,
    LogoutOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const menu = (
    <Menu
        items={[
            {
                key: '4',
                danger: true,
                label: 'chiqish',
                icon: <LogoutOutlined />,
            },
        ]}
    />
);

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(true);
    return (
        <>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo">IARC <span style={{marginLeft: "8px", color: "yellow", fontWeight: "bold"}}><LikeOutlined /></span></div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined />,
                                label: 'Dashboard',
                            },
                            {
                                key: '2',
                                icon: <VideoCameraOutlined />,
                                label: 'Tahlil',
                            },
                            {
                                key: '3',
                                icon: <UploadOutlined />,
                                label: 'nav 3',
                            },
                        ]}
                    />
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background header"
                        style={{
                            paddingLeft: 20,
                        }}
                    >
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })}
                        <Dropdown overlay={menu}>
                            <a onClick={(e) => e.preventDefault()} style={{position: "absolute", right: "15px"}}>
                                <Space>
                                    Respublika
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};

export default MainLayout;