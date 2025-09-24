import "./style-home.css";
import { FunctionalComponent } from "preact";
import { route } from "preact-router";

export function Home() {
  return (
    <div>
      <h1 className= "titulo">Bienvenido a Peliculas Preact</h1>
      <img src="/preact-icon.png" alt="Preact Logo" width="150" height="150"/>
    
      <p class="parrafo">
        Acá vas a poder explorar películas en cartelera, marcarlas como
        vistas y seguir tu progreso con una barra interactiva.
      </p>
    </div>
  );
};