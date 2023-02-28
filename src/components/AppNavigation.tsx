import { Route, Routes, useLocation } from "react-router-dom";

export const AppNavigation = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<div>Home page</div>} />
    </Routes>
  );
};
