// import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import Catalog from "./pages/CatalogPage";
// import Favorites from "./pages/FavoritesPage";
// import Home from "./pages/HomePage";
import { Layout } from "./components/Layout/Layout";

import React from "react";

// const Home = lazy(() => import("pages/HomePage"));
// const Catalog = lazy(() => import("pages/CatalogPage"));
// const Favorites = lazy(() => import("pages/FavoritesPage"));

function App() {
  return (
    // <Suspense>
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Home />} />
           <Route path="/catalog" element={<Catalog />} />
           <Route path="/favorites" element={<Favorites />} />
           <Route path="*" element={<Navigate to="/" />} />*/}
      </Route>
    </Routes>
    // </Suspense>
  );
}

export default App;
