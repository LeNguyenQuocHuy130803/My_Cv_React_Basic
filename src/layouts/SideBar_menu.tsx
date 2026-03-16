import React, { useEffect, useState } from 'react';
import { routes, type RouteItem } from '../routes';
import { Layout, Menu, theme, message, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
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
  
  // Responsive state
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [siderCollapsed, setSiderCollapsed] = useState(window.innerWidth < 768);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();
  const {msg, type, clearMessage} = useAppMessage();

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      const isMobileNow = window.innerWidth < 768;
      setIsMobile(isMobileNow);
      if (isMobileNow) {
        setSiderCollapsed(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // Sidebar content component
  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="sidebar_logo text-center py-4 text-xl font-bold">Admin</div>
      {avatarRoute?.image && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          padding: isMobile ? '15px 10px' : '20px 10px',
          position: 'relative',
          zIndex: 10,
          overflow: 'hidden'
        }}>
          <img
            src={avatarRoute.image}
            alt="avatar"
            style={{
              width: isMobile ? '120px' : '200px',
              height: isMobile ? '120px' : '200px',
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
            setDrawerOpen(false);
            return;
          }
          navigate(`/${key}`);
          setDrawerOpen(false);
          setTimeout(() => {
            const sectionId = key.split('-').join('-');
            const element = document.getElementById(sectionId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }}
      />
    </div>
  );

  return (
    <>
      {contextHolder}

      {/* Mobile Drawer Menu */}
      {isMobile && (
        <Drawer
          title="Menu"
          placement="left"
          onClose={() => setDrawerOpen(false)}
          open={drawerOpen}
          bodyStyle={{ padding: 0 }}
        >
          <SidebarContent />
        </Drawer>
      )}

      {/* Desktop/Tablet Layout */}
      <Layout hasSider style={{ minHeight: '100vh' }}>
        {!isMobile && (
          <Sider
            width={300}
            collapsible
            collapsed={siderCollapsed}
            onCollapse={setSiderCollapsed}
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
              top: 0,
              bottom: 0,
              width: siderCollapsed ? '80px !important' : '300px !important'
            }}
          >
            <SidebarContent />
          </Sider>
        )}

        <Layout style={{
          marginLeft: isMobile ? 0 : siderCollapsed ? '80px' : '300px',
          transition: 'margin-left 0.2s'
        }}>
          <Content
            style={{
              margin: isMobile ? '8px' : '16px',
              padding: isMobile ? '12px' : 16,
              minHeight: 'calc(100vh - 150px)',
              background: colorBgContainer,
              overflowY: 'auto',
              overflowX: 'hidden',
              transition: 'margin 0.2s'
            }}
          >
            {isMobile && (
              <Button
                type="primary"
                icon={<MenuOutlined />}
                onClick={() => setDrawerOpen(true)}
                size="large"
                style={{
                  position: 'fixed',
                  left: '16px',
                  top: '16px',
                  zIndex: 100,
                  borderRadius: '4px'
                }}
              >
                Menu
              </Button>
            )}
            <div style={{ marginTop: isMobile ? '60px' : '0' }}>
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center', padding: isMobile ? '12px' : '16px' }}>
            Ant Design ©2026 Created by LNQH
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default DefaultLayout;