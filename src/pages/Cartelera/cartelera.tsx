import './style-cartelera.css';
import { useState } from 'preact/hooks';
import { MovieDetail } from '../../components/detallePelis.js';
import { Gallery } from '../../components/gallery.js';

const movies = [
    {
      title: "Kimetsu no Yaiba: Castillo infinito",
      description: "Película de anime",
      src: "https://static.voyalcine.net/Uploads/i4766.jpg",
    },
    {
      title: "200% Lobo",
      description: "Película de animación",
      src: "https://static.voyalcine.net/Uploads/i4854.jpg",
    },
    {
      title: "Together: Juntos hasta la muerte",
      description: "Película de terror",
      src: "https://static.voyalcine.net/Uploads/i4853.jpg",
    },
    {
      title: "La mujer de la fila",
      description: "Película de suspenso",
      src: "https://static.voyalcine.net/Uploads/i4843.jpg",
    },
    {
      title: "El conjuro 4: últimos ritos",
      description: "Película de terror",
      src: "https://static.voyalcine.net/Uploads/i4800.jpg",
    },
    {
      title: "Mascotas al rescate",
      description: "Película de animación",
      src: "https://static.voyalcine.net/Uploads/i4821.jpg",
    },
    {
      title: "Homo Argentum",
      description: "Película de Francella",
      src: "https://static.voyalcine.net/Uploads/i4732.jpg",
    },
    {
      title: "Otro viernes de locos",
      description: "Película de Comedia",
      src: "https://static.voyalcine.net/Uploads/i4748.jpg",
    },
    {
      title: "La hora de la desaparición",
      description: "Película de Terror",
      src: "https://static.voyalcine.net/Uploads/i4733.jpg",
    },
    {
      title: "Los cuatro Fantásticos: primeros pasos",
      description: "Película de Marvel",
      src: "https://static.voyalcine.net/Uploads/i4682.jpg",
    },
    {
      title: "Los tipos malos 2",
      description: "Película de Animación",
      src: "https://static.voyalcine.net/Uploads/i4711.jpg",
    },
    {
      title: "Toy Story: 30 aniversario",
      description: "Película de Animación",
      src: "https://static.voyalcine.net/Uploads/i4850.jpg",
    },
  ];

export function Cartelera() {
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
	return (
		<div class="home">
			<h1>Cartelera de películas </h1>
				<section>
					{selectedIndex !== null ? (
          <MovieDetail
            title={movies[selectedIndex].title}
            src={movies[selectedIndex].src}
            index={selectedIndex}
            onBack={() => setSelectedIndex(null)}
          />
        ) : (
          movies.map((movie, idx) => (
            <Gallery
              key={movie.title}
              title={movie.title}
              description={movie.description}
              src={movie.src}
              onClick={() => setSelectedIndex(idx)}
            />
          ))
        )}
				</section>
		</div>
	);
};
