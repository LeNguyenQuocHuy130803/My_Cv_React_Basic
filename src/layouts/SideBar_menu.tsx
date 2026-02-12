import React, { useEffect, useState } from 'react';
import { routes, type RouteItem } from '../routes';
import { Layout, Menu, theme, message } from 'antd';
import { Outlet, useNavigate, useLocation } from "react-router";
import {  PDF_CONFIG, SECTION_IDS } from '../constants/routes';
import type { MenuProps } from 'antd';
import { useAppMessage } from '../stores/useAppMessage';

const {  Sider, Content, Footer } = Layout;
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
  const navigate = useNavigate();
  const location = useLocation();

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
  
  // Xác định menu được chọn dựa trên pathname hiện tại
  const getSelectedKeyFromPath = () => {
    const pathname = location.pathname;
    // Chuyển pathname thành key (e.g., '/experience' → 'experience')
    const key = pathname.replace('/', '') || SECTION_IDS.ABOUT_ME;
    return [key];
  };

  const [selectedKeys, setSelectedKeys] = useState<string[]>(() => getSelectedKeyFromPath());

  // Cập nhật selectedKeys khi pathname thay đổi
  useEffect(() => {
    setSelectedKeys(getSelectedKeyFromPath());
  }, [location.pathname]);  

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
                width: '200px',
                height: '200px',
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
            if (key === 'download-pdf') {
              const link = document.createElement('a');
              link.href = PDF_CONFIG.URL;
              link.download = PDF_CONFIG.FILENAME;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              return;
            }
            // Navigate dùng React Router (thay vì hash)
            navigate(`/${key}`);    // dùng để navigate đến route tương ứng ( ở đây navigate có nghĩa là chuyển hướng đến route tương ứng với key của menu item được click)
            
            // Scroll to section
            setTimeout(() => {
              const sectionId = key.split('-').join('-');
              const element = document.getElementById(sectionId);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100); // Chờ một chút để DOM update
          }}
        />
      </Sider>
      <Layout style={{ marginLeft: '300px' }}>

        <Content
          style={{
            margin: '16px',
            padding: 16,
            minHeight: 'calc(100vh - 150px)',
            background: colorBgContainer,
            overflowY: 'auto',
            overflowX: 'hidden'
          }}
        >
          
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2026 Created by LNQH</Footer>
      </Layout>
    </Layout>
    </>
  );
};

export default DefaultLayout;