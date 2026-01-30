
import type { RouteItem } from "../../routes";
import TheEndPage from "./TheEndPage";

export const routesTheEnd: RouteItem[] = [
  {
    path: '/theend',
    label: 'TheEnd',
    key: 'theend',
    element: <TheEndPage />,
    isShowMenu: true,
    isPrivate: true,
  }
]
