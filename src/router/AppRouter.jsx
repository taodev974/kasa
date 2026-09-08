import { Routes, Route, Navigate } from "react-router-dom";
import D_Home from "../pages/d_home/D_Home.jsx";
import D_About from "../pages/d_about/D_A-Propos.jsx";
import D_FicheLogement from "../pages/d_fiche_logement/D_Fiche-Logement.jsx";
import D_404 from "../pages/error/D_404.jsx";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/d_home" />} />
      <Route path="/d_home" element={<D_Home />} />
      <Route path="/d_about" element={<D_About />} />
      <Route path="/d_fiche-logement/:id" element={<D_FicheLogement />} />
      <Route path="*" element={<D_404 />} />
    </Routes>
  );
}

export default AppRouter;
