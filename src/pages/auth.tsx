import { Route } from "@pawjs/pawjs/src/@types/route";
import LoginImage from "../resources/img/seo/login.png";

const AuthRoutes: Route[] = [
  {
    path: "/",
    exact: true,
    component: () => import("../components/login"),
  },
  {
    path: "/sofa",
    exact: true,
    component: () => import("../components/sofa"),
    seo: {
      title: "Sofa",
    },
  },
  {
    path: "/bed",
    exact: true,
    component: () => import("../components/bed"),
    seo: {
      title: "Giường",
    },
  },
  {
    path: "/recliner",
    exact: true,
    component: () => import("../components/recliner"),
    seo: {
      title: "Thư giãn - Xem phim",
    },
  },
  {
    path: "/logout",
    exact: true,
    component: () => import("../components/logout"),
    seo: {
      title: "Logging out...",
    },
  },
];

export default AuthRoutes;
