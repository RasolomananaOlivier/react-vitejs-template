import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home page</div>} />
    </Routes>
  );
};

export default AppRoutes;
