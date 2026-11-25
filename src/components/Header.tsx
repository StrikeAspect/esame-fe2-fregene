import { Link } from "react-router-dom";

// la fascia superiore fissa con il brand e il link alla home
export function Header() {
  return (
    <header className="header">
      <div>
        <div className="header__brand">Movie App</div>
      </div>
      <nav className="header__nav">
        <Link to="/">Home / Elenco</Link>
      </nav>
    </header>
  );
}
