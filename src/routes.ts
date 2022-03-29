import RouteHandler from "@pawjs/pawjs/src/router/handler";
import AuthRoutes from "./pages/auth";

export default class Routes {
  apply(routeHandler: RouteHandler) {
    const routes = [...AuthRoutes];

    routeHandler.hooks.initRoutes.tapPromise("AppRoutes", async () => {
      // Perform any async action before adding routes to the application
      routeHandler.addRoutes(routes);
    });
  }
}
