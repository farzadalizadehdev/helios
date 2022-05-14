import React, { useEffect, useState } from "react";
import { Avatar, Layout, Menu, Dropdown, Space } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  AppstoreAddOutlined,
  UserOutlined,
  DownOutlined,
  FileDoneOutlined,
  FileAddOutlined,
} from "@ant-design/icons";
import { Logo } from "../logo/Logo";
import "./layout.css";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Routes from "../../Routes";

const SiderDemo = (props) => {
  const { Header, Sider, Content } = Layout;
  const navigate = useNavigate();
  const location = useLocation();

  const [state, setState] = useState({
    collapsed: false,
  });

  const toggle = () => {
    setState({
      collapsed: !state.collapsed,
    });
  };

  const navigationHandler = (item) => {
    navigate(`/${item.key}`);
  };

  const menu = (
    <Menu
      items={[
        {
          label: <Link to="/requests">درخواست های من</Link>,
          key: "0",
        },
        {
          type: "divider",
        },
        {
          label: <Link to="/login">خروج</Link>,
          key: "1",
        },
      ]}
    />
  );

  // useEffect(()=>{
  //   console.log(location);
  // },[])

  return (
    <Layout className="h-screen">
      <Sider trigger={null} collapsible collapsed={state.collapsed}>
        <div className="logo">
          <Logo collapsed={state.collapsed} />
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={[
            `${
              location.pathname !== "/"
                ? location.pathname.slice(1)
                : "dashboard"
            }`,
          ]}
          onClick={navigationHandler}
          items={[
            {
              key: "dashboard",
              icon: <AppstoreAddOutlined />,
              label: "داشبورد",
            },
            {
              key: "requests",
              icon: <FileDoneOutlined />,
              label: "درخواست های من",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="flex items-center justify-between site-layout-background"
          style={{ padding: 0 }}
        >
          {React.createElement(
            state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
          <div className="ml-4">
            <Avatar size="" icon={<UserOutlined />} />
            <Dropdown className="mx-2" overlay={menu} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  نام کاربری
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            // padding: 24,
            minHeight: 280,
          }}
        >
          <Routes />
        </Content>
      </Layout>
    </Layout>
  );
};

export default SiderDemo;
