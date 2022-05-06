import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DiffOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";
import { Logo } from "../logo/Logo";
import "./layout.css";
import { useParams, useNavigate, useLocation } from "react-router-dom";
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

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={state.collapsed}>
        <div className="logo">
          <Logo collapsed={state.collapsed} />
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={[`${location.pathname.slice(1)}`]}
          onClick={navigationHandler}
          items={[
            {
              key: "dashboard",
              icon: <AppstoreAddOutlined />,
              label: "داشبورد",
            },
            {
              key: "requests",
              icon: <DiffOutlined />,
              label: "درخواست های من",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
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
