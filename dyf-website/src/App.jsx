// src/App.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <p>hola!</p>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
