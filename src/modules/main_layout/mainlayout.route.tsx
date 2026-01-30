import { HomeOutlined, FileTextOutlined, ProjectOutlined, BgColorsOutlined, BookOutlined, HeartOutlined, LogoutOutlined, DownloadOutlined } from "@ant-design/icons";
import type { RouteItem } from "../../routes";
import MainPage from "./MainPage";


export const routesMainLayout: RouteItem[] = [
  {
    path: '',
    label: 'About Me',
    key: 'about-me',
    icon: <HomeOutlined />,
    image: '../../../public/assets/imgs/my picure.JPG',
    element: <MainPage />,
    isShowMenu: true,
    isPrivate: true,
  },
  {
    label: 'Experience',
    key: 'experience',
    icon: <FileTextOutlined />,
    isShowMenu: true,
    isPrivate: true,
  },
  {
    label: 'Projects',
    key: 'projects',
    icon: <ProjectOutlined />,
    isShowMenu: true,
    isPrivate: true,
  },
  {
    label: 'Skills',
    key: 'skills',
    icon: <BgColorsOutlined />,
    isShowMenu: true,
    isPrivate: true,
  },
  {
    label: 'Education',
    key: 'education',
    icon: <BookOutlined />,
    isShowMenu: true,
    isPrivate: true,
  },
  {
    label: 'Interests',
    key: 'interests',
    icon: <HeartOutlined />,
    isShowMenu: true,
    isPrivate: true,
  },
  {
    label: 'The End',
    key: 'the-end',
    icon: <LogoutOutlined />,
    isShowMenu: true,
    isPrivate: true,
  },
  {
    label: <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#FFA500' }}>Download PDF</span>,
    key: 'download-pdf',
    icon: <DownloadOutlined />,
    isShowMenu: true,
    isPrivate: true,
  },
]