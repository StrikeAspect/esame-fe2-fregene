import { Route, Routes } from "react-router-dom";
import { Shell } from "./components/Shell";

// Configurazione dele due rotte richieste
export function App() {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route
          path="/"
          element={<p className="page-sub">Elenco movies (in arrivo allo Step 6).</p>}
        />
        <Route
          path="/movies/:id"
          element={<p className="page-sub">Dettaglio movie (in arrivo allo Step 7).</p>}
        />
      </Route>
    </Routes>
  );
}
