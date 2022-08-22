import React, {useEffect, useState} from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import {Dropdown, Layout, Menu, Space} from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    // UploadOutlined,
    // UserOutlined,
    DashboardOutlined,
    // VideoCameraOutlined,
    ApartmentOutlined,
    WalletOutlined,
    DeploymentUnitOutlined,
    ExclamationCircleOutlined,
    LikeOutlined,
    DownOutlined,
    LogoutOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const logout = () => {
    localStorage.removeItem("user")
}
const menu = (
    <Menu
        items={[
            {
                key: '4',
                danger: true,
                label: <NavLink style={{textDecoration: "none"}} onClick={logout} to="login">Chiqish</NavLink>,
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
                    <div className="logo">IARC <span style={{marginLeft: "8px", marginTop: "-9px", color: "yellow", fontWeight: "bold"}}><LikeOutlined /></span></div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <DashboardOutlined />,
                                label: <NavLink to="/">Dashboard</NavLink>,
                            },
                            {
                                key: '2',
                                icon: <ApartmentOutlined />,
                                label: <NavLink to="pump">Nasos</NavLink>,
                            },
                            {
                                key: '3',
                                icon: <WalletOutlined />,
                                label: <NavLink to="well">Dayver</NavLink>,
                            },
                            {
                                key: '4',
                                icon: <DeploymentUnitOutlined />,
                                label: <NavLink to="smartwater">Aqlli suv</NavLink>,
                            },
                            {
                                key: '5',
                                icon: <ExclamationCircleOutlined />,
                                label: <NavLink to="comment">Eslatma</NavLink>,
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
                            <a onClick={(e) => e.preventDefault()} style={{textDecoration: "none",  position: "absolute", right: "15px"}}>
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