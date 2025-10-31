import { Routes, Route } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ClientsPage from "../pages/ClientsPage";
import GaleryPage from "../pages/GaleryPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout><HomePage /></AppLayout>} />
      <Route path="/empresa/nosotros" element={<AppLayout><AboutPage /></AppLayout>} />
      <Route path="/empresa/clientes" element={<AppLayout><ClientsPage /></AppLayout>} />
      <Route path="/empresa/galeria" element={<AppLayout><GaleryPage /></AppLayout>} />
    </Routes>
  );
}

export default AppRoutes;