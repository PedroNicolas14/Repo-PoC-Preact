import { FunctionalComponent } from "preact";
import { route } from "preact-router";
import "./home.css";

/**
 * Home.tsx
 *
 * Página de inicio.
 * Muestra un mensaje de bienvenida e información básica.
 * Tiene un botón que redirige al catálogo de películas.
 */
export const Home: FunctionalComponent = () => {
  return (
    <div>
			<a href="https://www.todoshowcase.com/cartelera/rosario" target="_blank">
				<img class="home" src="https://www.todoshowcase.com/themes/default/images/common/logo-showcase.svg" alt="Shoowcase logo" height="50" width="500" />
      </a>
      <h1 className= "titulo">Bienvenido a Peliculas Preact</h1>
      <p>
        Acá vas a poder explorar películas en cartelera, marcarlas como
        favoritas y seguir tu progreso con una barra interactiva.
      </p>
      <button onClick={() => route("/catalog")}>
        Ir al catálogo de películas
      </button>
    </div>
  );
};