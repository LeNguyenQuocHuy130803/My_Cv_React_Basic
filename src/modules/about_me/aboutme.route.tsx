import { HomeOutlined } from "@ant-design/icons";
import type { RouteItem } from "../../routes";
import AvatarPage from "./About_me";


export const routesAvatar: RouteItem[] = [
  {
    path: '/avatar',
    label: 'About Me',
    key: 'avatar',
    icon: <HomeOutlined />,
    image: '../../../public/assets/imgs/my picure.JPG',
    element: <AvatarPage />,
    isShowMenu: true, // Hiển thị menu cho route này
    isPrivate: true, // Chỉ cho phép người dùng đã đăng nhập truy cập
  },
]