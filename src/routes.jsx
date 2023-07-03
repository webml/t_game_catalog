import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/";
import { Game } from "./pages/Game/";
import { NotFound } from "./pages/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:provider/:game" element={<Game />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
