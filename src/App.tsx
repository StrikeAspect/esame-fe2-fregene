import { Route, Routes } from "react-router-dom";
import { Shell } from "./components/Shell";
import { MovieListPage } from "./pages/MovieListPage";

// Configuro esattamente le due rotte richieste come figlie della Shell condivisa
export function App() {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route path="/" element={<MovieListPage />} />
        <Route
          path="/movies/:id"
          element={<p className="page-sub">Dettaglio movie (in arrivo allo Step 7).</p>}
        />
      </Route>
    </Routes>
  );
}
