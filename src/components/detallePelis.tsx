export const sinopsisPelis = [
{sinopsis:"Nos presentan la batalla final entre los Pilares y las Lunas Superiores, así como la confrontación definitiva contra Muzan Kibutsuji."},
{sinopsis:"Un heroico caniche lucha por mantener el respeto de su manada de hombres lobo. Cuando un deseo caprichoso lo transforma en hombre lobo y despoja a un hada traviesa de la Tierra."},
{sinopsis:"Una pareja con problemas en su relación se muda al campo, donde descubren una cueva con una fuerza sobrenatural. Al beber agua de la cueva, comienzan a experimentar transformaciones físicas y emocionales que reflejan su codependencia."},
{sinopsis:"La película cuenta la historia de Andrea, una mujer de clase media de la Ciudad de Buenos Aires cuya vida se ve sacudida por la detención inesperada de su hijo."},
{sinopsis:"Los investigadores de lo paranormal Ed y Lorraine Warren se enfrentan a un último caso aterrador en el que están implicadas entidades misteriosas a las que deben enfrentarse."},
{sinopsis:"Un imprevisto surge cuando en un tren suena una alarma, las mascotas tendran que ver como detener el tren."},
{sinopsis:"Película compuesta por 16 historias cortas que exploran con humor y autocrítica las particularidades de la cultura argentina."},
{sinopsis:"Secuela de 'Ponte en mi lugar' (2003. La historia se desarrolla años después de que Tess (Curtis) y Anna (Lohan) sufrieran una crisis de identidad."},
{sinopsis:"Cuando todos los alumnos de una misma clase, salvo uno, desaparecen misteriosamente la misma noche y exactamente a la misma hora, la pequeña ciudad donde viven se pregunta quién o qué está detrás de su desaparición."},
{sinopsis:"Ambientada en el vibrante telón de fondo de un mundo retro-futurista inspirado en los años 60, presenta a la Primera Familia de Marvel mientras se enfrentan a su desafío más terrorífico hasta la fecha."},
{sinopsis:"Un genial equipo de animales que no respetan la ley, los ahora muy reformados Tipos Malos, se esfuerzan (mucho, muchísimo) en ser buenos."},
{sinopsis:"Una celebracion de los 30 años que pasaron de una pelicula que marco muchas infancias."}
]

type MovieDetailProps = {
  title: string;
  index: number;
  src: string;
  onBack: () => void;
};

export function MovieDetail({title, index, src, onBack}: MovieDetailProps) {
  return (
    <div class="movie-overlay">
      <div class="movie-detail">
        <button class="boton-volver" onClick={onBack}>Volver</button>
        <h2>{title}</h2>
        <img src={src} alt={title} width="300" />
        <p>{sinopsisPelis[index].sinopsis}</p>
      </div>
    </div>
  );
}
