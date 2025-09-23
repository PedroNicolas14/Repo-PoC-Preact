import { useState } from "preact/hooks";
import { route } from "preact-router";
import { MovieDetail } from "../../components/MovieDetail";
import "./catalog.css";

interface CatalogProps {
  path?: string;
}

const movies = [
 		{ title: "Kimetsu no Yaiba: Castillo infinito", description: "Película de anime", src: "https://static.voyalcine.net/Uploads/i4766.jpg" },
		{ title: "200% Lobo", description: "Película de animación", src: "https://static.voyalcine.net/Uploads/i4854.jpg" },
		{ title: "Together: Juntos hasta la muerte", description: "Película de terror", src: "https://static.voyalcine.net/Uploads/i4853.jpg" },
		{ title: "La mujer de la fila", description: "Película de suspenso", src: "https://static.voyalcine.net/Uploads/i4843.jpg" },
		{ title: "El conjuro 4: últimos ritos", description: "Película de terror", src: "https://static.voyalcine.net/Uploads/i4800.jpg" },
		{ title: "Mascotas al rescate", description: "Película de animación", src: "https://static.voyalcine.net/Uploads/i4821.jpg" },
		{ title: "Homo Argentum", description: "Película de Francella", src: "https://static.voyalcine.net/Uploads/i4732.jpg" },
		{ title: "Otro viernes de locos", description: "Película de Comedia", src: "https://static.voyalcine.net/Uploads/i4748.jpg" },
		{ title: "La hora de la desaparición", description: "Película de Terror", src: "https://static.voyalcine.net/Uploads/i4733.jpg" },
		{ title: "Los cuatro Fantásticos: primeros pasos", description: "Película de Marvel", src: "https://static.voyalcine.net/Uploads/i4682.jpg" },
		{ title: "Los tipos malos 2", description: "Película de Animación", src: "https://static.voyalcine.net/Uploads/i4711.jpg" },
		{ title: "Toy Story: 30 aniversario", description: "Película de Animación", src: "https://static.voyalcine.net/Uploads/i4850.jpg" },
];

/**
 * Catalog.tsx
 *
 * Página del catálogo de películas.
 * Aquí se maneja:
 * - La barra de progreso
 * - Lista de películas
 * - Manejo de favoritos
 * - Vista de detalle de cada película
 */
export function Catalog(props: CatalogProps) {
  // Estado con la lista de títulos favoritos
  const [favorites, setFavorites] = useState<string[]>([]);

  // Estado que guarda cuál película está seleccionada para ver su detalle
  const [selected, setSelected] = useState<string | null>(null);

  /**
   * toggleFavorite
   * 
   * Agrega o quita una película de la lista de favoritos.
   * Si ya está en favoritos, la elimina.
   * Si no está, la agrega.
   */
  const toggleFavorite = (title: string) => {
    setFavorites((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  // Calculamos el % de progreso en base a favoritos / total de películas
  const progress = (favorites.length / movies.length) * 100;

  // Si hay una película seleccionada, obtenemos su información
  const movieDetail = movies.find((m) => m.title === selected);

  return (
    <div class="catalog">
      <h1>Catálogo de películas</h1>

      {/* Barra de progreso */}
      <div class="progress-container">
        <div class="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <p>
        Favoritos: {favorites.length} / {movies.length}
      </p>

      {/* Si hay una película seleccionada, mostramos su detalle */}
      {movieDetail ? (
        <MovieDetail
          title={movieDetail.title}
          description={movieDetail.description}
          src={movieDetail.src}
          isFavorite={favorites.includes(movieDetail.title)}
          onToggle={() => toggleFavorite(movieDetail.title)}
          onBack={() => setSelected(null)}
        />
      ) : (
        // Si no hay seleccionada, mostramos el listado de películas
        <section class="gallery-section">
          {movies.map((movie) => (
            <div
              key={movie.title}
              class="gallery"
              onClick={() => setSelected(movie.title)} // Al clickear, selecciona la película
              style={{ cursor: "pointer" }}
            >
              <img src={movie.src} alt={movie.title}/>
              <h3>{movie.title}</h3>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // evita abrir el detalle si se clickea el botón
                  toggleFavorite(movie.title);
                }}
              >
                {favorites.includes(movie.title)
                  ? "Quitar de favoritos"
                  : "Agregar a favoritos"}
              </button>
            </div>
          ))}
        </section>
      )}

      {/* Botón para volver al inicio */}
      <button onClick={() => route("/")}>
        ⬅ Volver a inicio
      </button>
    </div>
  );
}
