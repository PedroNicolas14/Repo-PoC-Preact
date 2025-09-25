<<<<<<< HEAD
import { render } from "preact";
import { Router } from "preact-router";
import { Home } from "./pages/home/home";
import { Catalog } from "./pages/catalog/catalog";
import "./style.css";
=======
import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.js';
import { Cartelera } from './pages/Cartelera/cartelera.js';
import { PelisVistas } from './pages/Pelis/pelisvistas.js';
import './style.css';
>>>>>>> nuevoMain

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
<<<<<<< HEAD
    <Router>
      <Home path="/" />
      <Catalog path="/catalog" />
    </Router>
  );
=======
		<LocationProvider>
			<Header />
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route path="/cartelera" component={Cartelera} />
					<Route path="/pelis-vistas" component={PelisVistas} />
				</Router>
			</main>
		</LocationProvider>
	);
>>>>>>> nuevoMain
}

render(<App />, document.getElementById("app")!);