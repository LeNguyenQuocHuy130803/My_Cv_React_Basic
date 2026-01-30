import type { RouteItem } from "../../routes";
import EducationPage from "./EducationPage";

export const routesEducation: RouteItem[] = [
  {
    path: '/education',
    label: 'Education',
    key: 'education',
    element: <EducationPage />,
    isShowMenu: true,
    isPrivate: true,
  },
]
