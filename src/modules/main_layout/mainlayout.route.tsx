import { HomeOutlined } from "@ant-design/icons";
import type { RouteItem } from "../../routes";
import MainLayoutPage from "./MainLayoutPage";


export const routesMainLayout: RouteItem[] = [
  {
    path: '/main_layout',
    label: 'About Me',
    key: 'main_layout',
    image: '../../../public/assets/imgs/my picure.JPG',
    element: <MainLayoutPage />,
    isShowMenu: true, // Hiển thị menu cho route này
    isPrivate: true, // Chỉ cho phép người dùng đã đăng nhập truy cập
  },
]