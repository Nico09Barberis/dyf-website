import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AppLayout from "../layout/AppLayout";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout><Home /></AppLayout>} />
    </Routes>
  );
}

export default AppRoutes;