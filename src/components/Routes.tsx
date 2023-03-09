import ROUTES from "@/constants/routesData";
import { Route, Routes as RouteContainer } from "react-router-dom";

const Routes = () => {
  return (
    <RouteContainer>
      {ROUTES.map(({ element, path, title }) => (
        <Route key={title} path={path} element={element} />
      ))}
    </RouteContainer>
  );
};

export default Routes;
