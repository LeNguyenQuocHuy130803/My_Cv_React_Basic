import type { ReactNode } from 'react';
import { routesDashboard } from '../modules/dashboard/dashboard.route';
import { routesAuth } from '../modules/auth/auth.route';
import { routesProduct } from '../modules/product/product.route';
import { routesAdministrator } from '../modules/administrator/administrator.route';
import { routesAvatar } from '../modules/about_me/aboutme.route';
import { routesExperiences } from '../modules/experence/experence.route';

export type RouteItem = {
  path?: string;
  label: string;
  key: string;
  icon?: ReactNode;
  image?: string;
  element?: React.ReactNode | null;
  children?: RouteItem[];
  isShowMenu: boolean; // Thêm thuộc tính này để xác định có hiển thị menu hay không
  isPrivate: boolean; // Thêm thuộc tính này để xác định có phải là route riêng tư hay không
};

export const routes: RouteItem[] = [
  ...routesAvatar,
  ...routesExperiences,
  ...routesDashboard, //đăng ký route dashboard
  ...routesAuth,
  ...routesProduct,
  ...routesAdministrator,
  
];
