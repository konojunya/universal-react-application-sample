import { matchRoutes } from "react-router-config";
import { routes } from "../../router";

export const loadMatchPathData = (location: string) => {
  const branch = matchRoutes(routes, location);
  const promises = branch.map(({ route, match }) =>
    route.loadData ? route.loadData(match) : Promise.resolve(null)
  );
  return Promise.all(promises);
};
