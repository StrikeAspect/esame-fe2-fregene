import { Outlet } from "react-router-dom";
import { Header } from "./Header";

// shell condivisa con l'intestazione fissa e il contenuto centrale delle rotte
export function Shell() {
  return (
    <div className="shell">
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
