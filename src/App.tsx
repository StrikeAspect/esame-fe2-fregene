import { Route, Routes } from "react-router-dom";
import { Shell } from "./components/Shell";
import { MovieDetailPage } from "./pages/MovieDetailPage";
import { MovieListPage } from "./pages/MovieListPage";

// le due rotte richieste come figlie della Shell condivisa
export function App() {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/movies/:id" element={<MovieDetailPage />} />
      </Route>
    </Routes>
  );
}
