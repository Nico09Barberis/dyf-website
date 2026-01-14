import { Routes, Route } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ClientsPage from "../pages/ClientsPage";
import GaleryPage from "../pages/GaleryPage";
import ContactPage from "../pages/ContactPage";
import TablewarePage from "../pages/servicesPage/TablewarePage";
import FurniturePage from "../pages/servicesPage/FurniturePage";
import DecorationPage from "../pages/servicesPage/DecorationPage";
import FullEventsPage from "../pages/servicesPage/FullEventsPage";
import ServicesPage from "../pages/ServicesPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout><HomePage /></AppLayout>} />
      <Route path="/empresa/nosotros" element={<AppLayout><AboutPage /></AppLayout>} />
      <Route path="/empresa/clientes" element={<AppLayout><ClientsPage /></AppLayout>} />
      <Route path="/galeria" element={<AppLayout><GaleryPage /></AppLayout>} />
      <Route path="/contacto" element={<AppLayout><ContactPage /></AppLayout>} />

      {/*Services page*/}
      <Route path="/servicios" element={<AppLayout><ServicesPage /></AppLayout>} />
      <Route path="/servicios/alquiler-vajilla" element={<AppLayout><TablewarePage /></AppLayout>} />
      <Route path="/servicios/alquiler-mobiliario" element={<AppLayout><FurniturePage /></AppLayout>} />
      <Route path="/servicios/ambientacion-decoracion" element={<AppLayout><DecorationPage /></AppLayout>} />
      <Route path="/servicios/organizacion-integral" element={<AppLayout><FullEventsPage /></AppLayout>} />
    </Routes>
  );
}

export default AppRoutes;