import './stylePelis.css';
import { useState } from 'preact/hooks';

export function PelisVistas() {
  // Lista de pelis con estado "vista" = false por defecto
  const [pelis, setPelis] = useState([
    { title: "Kimetsu no Yaiba: Castillo infinito", description: "Película de anime", vista: false },
    { title: "200% Lobo", description: "Película de animación", vista: false },
    { title: "Together: Juntos hasta la muerte", description: "Película de terror", vista: false },
    { title: "La mujer de la fila", description: "Película de suspenso", vista: false },
    { title: "El conjuro 4: últimos ritos", description: "Película de terror", vista: false },
    { title: "Mascotas al rescate", description: "Película de animación", vista: false },
    { title: "Homo Argentum", description: "Película de Francella", vista: false },
    { title: "Otro viernes de locos", description: "Película de Comedia", vista: false },
    { title: "La hora de la desaparición", description: "Película de Terror", vista: false },
    { title: "Los cuatro Fantásticos: primeros pasos", description: "Película de Marvel", vista: false },
    { title: "Los tipos malos 2", description: "Película de Animación", vista: false },
    { title: "Toy Story: 30 aniversario", description: "Película de Animación", vista: false }
  ]);
// Calcular progreso: cuántas vistas / total
  const vistas = pelis.filter(p => p.vista).length;
  const progreso = (vistas / pelis.length) * 100;

  // Alternar el estado de vista al clickear
  const toggleVista = (index: number) => {
    const nuevas = [...pelis];
    nuevas[index].vista = !nuevas[index].vista;
    setPelis(nuevas);
  };

  return (
    <div class="cartelera">
      <h1>Pelis vistas</h1>

      {/* Barra de progreso dinámica */}
      <progress class ="barra" value={progreso} max="100"></progress>
      <p>{vistas} de {pelis.length} películas vistas</p>

      <section class="galeria">
        {pelis.map((peli, i) => (
          <Titulo 
            key={i} 
            title={peli.title} 
            description={peli.description} 
            vista={peli.vista}
            onClick={() => toggleVista(i)}
          />
        ))}
      </section>
    </div>
  );
}

function Titulo(props: { title: string; description: string; vista: boolean; onClick: () => void }) {
  return (
    <button 
	  class={props.vista ? 'vista' : 'novista'}
      onClick={props.onClick}
    >
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </button>
  );
}