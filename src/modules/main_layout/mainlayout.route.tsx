import { HomeOutlined, FileTextOutlined, ProjectOutlined, BgColorsOutlined, BookOutlined, HeartOutlined, LogoutOutlined, DownloadOutlined } from "@ant-design/icons";
import type { RouteItem } from "../../routes";
import MainPage from "./MainPage";
import { ROUTE_PATHS, SECTION_IDS, ROUTE_LABELS, IMAGE_PATHS, UI_STYLES } from "../../constants/routes";


export const routesMainLayout: RouteItem[] = [
  {
    path: ROUTE_PATHS.ABOUT_ME,
    label: ROUTE_LABELS.ABOUT_ME,
    key: SECTION_IDS.ABOUT_ME,
    icon: <HomeOutlined />,
    image: IMAGE_PATHS.AVATAR,
    element: <MainPage />,
    isShowMenu: true,
    isPrivate: true,
  },
  {
    path: ROUTE_PATHS.EXPERIENCE,
    label: ROUTE_LABELS.EXPERIENCE,
    key: SECTION_IDS.EXPERIENCE,
    icon: <FileTextOutlined />,
    element: <MainPage />,
    isShowMenu: true,
    isPrivate: true,
  },
  {
    path: ROUTE_PATHS.PROJECTS,
    label: ROUTE_LABELS.PROJECTS,
    key: SECTION_IDS.PROJECTS,
    icon: <ProjectOutlined />,
    element: <MainPage />,
    isShowMenu: true,
    isPrivate: true,
  },
  {
    path: ROUTE_PATHS.SKILLS,
    label: ROUTE_LABELS.SKILLS,
    key: SECTION_IDS.SKILLS,
    icon: <BgColorsOutlined />,
    element: <MainPage />,
    isShowMenu: true,
    isPrivate: true,
  },
  {
    path: ROUTE_PATHS.EDUCATION,
    label: ROUTE_LABELS.EDUCATION,
    key: SECTION_IDS.EDUCATION,
    icon: <BookOutlined />,
    element: <MainPage />,
    isShowMenu: true,
    isPrivate: true,
  },
  {
    path: ROUTE_PATHS.INTERESTS,
    label: ROUTE_LABELS.INTERESTS,
    key: SECTION_IDS.INTERESTS,
    icon: <HeartOutlined />,
    element: <MainPage />,
    isShowMenu: true,
    isPrivate: true,
  },
  {
    path: ROUTE_PATHS.THE_END,
    label: ROUTE_LABELS.THE_END,
    key: SECTION_IDS.THE_END,
    icon: <LogoutOutlined />,
    element: <MainPage />,
    isShowMenu: true,
    isPrivate: true,
  },
  {
    label: <span style={UI_STYLES.PDF_BUTTON}>Download PDF</span>,
    key: 'download-pdf',
    icon: <DownloadOutlined />,
    isShowMenu: true,
    isPrivate: true,
  },
]