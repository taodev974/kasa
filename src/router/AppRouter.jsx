import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import About from "../pages/about/About.jsx";
import HousingDetails from "../pages/housingDetails/HousingDetails.jsx";
import NotFound from "../pages/notFound/NotFound.jsx";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/housingDetails/:id" element={<HousingDetails />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
