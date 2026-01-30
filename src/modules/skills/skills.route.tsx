import type { RouteItem } from "../../routes";
import SkillPage from "./SkillPage";

export const routesSkills: RouteItem[] = [
  {
    path: '/skills',
    label: 'Skills',
    key: 'skills',
    element: <SkillPage />,
    isShowMenu: true,
    isPrivate: true,
  },
]
