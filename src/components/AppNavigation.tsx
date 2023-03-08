import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";

export const AppNavigation = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
