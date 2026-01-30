import React, { useEffect, useState } from 'react';
import { routes, type RouteItem } from '../routes';
import { Layout, Menu, theme, message } from 'antd';

import { useNavigate, Outlet } from "react-router";

const { Header, Sider, Content, Footer } = Layout;





import type { MenuProps } from 'antd';
import { useAppMessage } from '../stores/useAppMessage';
type MenuItem = Required<MenuProps>['items'][number];

// Chuyển đổi mảng routes sang định dạng items của Antd Menu
function mapRoutesToMenuItems(routes: RouteItem[]): MenuItem[] {
  return routes
    .filter(route => route.isShowMenu)
    .map(route => {
      const item: MenuItem = {
        label: route.label,
        key: route.key,
        icon: route.icon ?? null,
        children: route.children ? mapRoutesToMenuItems(route.children) : undefined,
      };
      return item;
    });
}

const items = mapRoutesToMenuItems(routes);

// avatar
const avatarRoute = routes.find(route => route.image);

const DefaultLayout: React.FC = () => {

  const [messageApi, contextHolder] = message.useMessage();
  const {msg, type, clearMessage} = useAppMessage();

  useEffect(()=>{
    if (msg) {
      messageApi.info({
        content: msg,
        type: type,
        duration: 3,
        onClose: ()=> clearMessage(),
      });
    }
  }, [msg,type, messageApi, clearMessage]);
  
  const navigate = useNavigate();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  // Update selectedKeys based on current location
  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath.includes('avatar')) {
      setSelectedKeys(['avatar']);
    } else if (currentPath.includes('dashboard') || currentPath === '/') {
      setSelectedKeys(['dashboard']);
    } else {
      // For other routes, extract the first path segment
      const segments = currentPath.split('/').filter(Boolean);
      if (segments.length > 0) {
        setSelectedKeys([segments[0]]);
      }
    }
  }, []);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      {contextHolder}

      {/* tùy chỉnh kích thước menu sidebar */}
      <Layout hasSider style={{ minHeight: '100vh' }}>
      <Sider 
      width={300}
      style={{
        overflow: 'visible',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        width: '300px !important'
      }}
      >
        <div className="sidebar_logo">Admin</div>
        {avatarRoute?.image && (
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            padding: '20px 10px',
            position: 'relative',
            zIndex: 10,
            overflow: 'hidden'
          }}>
            <img
              src={avatarRoute.image}
              alt="avatar"
              style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #fff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
              }}
            />
          </div>
        )}
        <Menu
          theme="dark"
          mode="inline"
          items={items}
          selectedKeys={selectedKeys}
          onClick={({ key }) => {
            setSelectedKeys([key]);
            navigate('/' + key.split('-').join('/'));
            console.log(key);
          }}
        />
      </Sider>
      <Layout style={{ marginLeft: '300px' }}>
        <Header style={{ 
          padding: 0, 
          background: colorBgContainer,
          position: 'sticky',
          top: 0,
          zIndex: 1
        }}
        className='drop-shadow-sm'
        >
        </Header>
        <Content
          style={{
            margin: '16px',
            padding: 16,
            minHeight: 280,
            background: colorBgContainer,
            overflow: 'initial'
          }}
        >
          
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
    </>
  );
};

export default DefaultLayout;