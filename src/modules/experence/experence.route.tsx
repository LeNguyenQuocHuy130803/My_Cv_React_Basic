import type { RouteItem } from "../../routes";
import ExperiencePage from "./ExperiencePage";


export const routesExperiences: RouteItem[] = [
  {
    path: '/experience',
    label: 'Experiences',
    key: 'experience',
    element: <ExperiencePage/>,
    isShowMenu: true,
    isPrivate: true,
  },
]
