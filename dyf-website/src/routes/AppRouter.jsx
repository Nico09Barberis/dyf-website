import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/mainLayout";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
    </Routes>
  );
}

export default AppRoutes;