import { Route, Routes as RouteContainer } from "react-router-dom";

const Routes = () => {
  return (
    <RouteContainer>
      <Route path="/" element={<div>Home page</div>} />
    </RouteContainer>
  );
};

export default Routes;
