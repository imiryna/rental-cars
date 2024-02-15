import { Route, Routes } from "react-router-dom";
import Catalog from "./pages/CatalogPage";
import Favorites from "./pages/FavoritesPage";
import Home from "./pages/HomePage";
import NotFound from "components/NoFound/NoFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
