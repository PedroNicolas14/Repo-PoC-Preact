import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.js';
import { Cartelera } from './pages/Cartelera/cartelera.js';
import { PelisVistas } from './pages/Pelis/pelisvistas.js';
import './style.css';

export function App() {
	return (
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
}

render(<App />, document.getElementById("app")!);