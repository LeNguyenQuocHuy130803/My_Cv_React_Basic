import type { ReactNode } from 'react';
import { routesDashboard } from '../modules/dashboard/dashboard.route';
import { routesAuth } from '../modules/auth/auth.route';
import {  routesMainLayout } from '../modules/main_layout/mainlayout.route';

export type RouteItem = {
  path?: string;
  label: string | React.ReactNode;
  key: string;
  icon?: ReactNode;
  image?: string;
  element?: React.ReactNode | null;
  children?: RouteItem[];
  isShowMenu: boolean; // Thêm thuộc tính này để xác định có hiển thị menu hay không
  isPrivate: boolean; // Thêm thuộc tính này để xác định có phải là route riêng tư hay không
};

export const routes: RouteItem[] = [
  ...routesMainLayout,
  ...routesDashboard, //đăng ký route dashboard
  ...routesAuth,
];
