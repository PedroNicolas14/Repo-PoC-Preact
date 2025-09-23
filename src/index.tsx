import { render } from "preact";
import { Router } from "preact-router";
import { Home } from "./pages/home/home";
import { Catalog } from "./pages/catalog/catalog";
import "./style.css";

/**
 * App.tsx
 * 
 * Componente principal de la app.
 * Se encarga de manejar las rutas entre las diferentes "páginas":
 * - "/" (Home)
 * - "/catalog" (Catálogo de películas)
 */
export function App() {
  return (
    <Router>
      <Home path="/" />
      <Catalog path="/catalog" />
    </Router>
  );
}

render(<App />, document.getElementById("app")!);