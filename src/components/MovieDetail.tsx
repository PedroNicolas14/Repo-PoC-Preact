/**
 * MovieDetail.tsx
 *
 * Componente que muestra la información completa de una película.
 * Se usa cuando el usuario selecciona una película en el catálogo.
 */
type MovieDetailProps = {
  title: string;
  description: string;
  src: string;
  isFavorite: boolean;
  onToggle: () => void;
  onBack: () => void;
};

export function MovieDetail({
  title,
  description,
  src,
  isFavorite,
  onToggle,
  onBack,
}: MovieDetailProps) {
  return (
    <div class="movie-overlay">
      <div class="movie-detail">
        <button class="boton-volver" onClick={onBack}>⬅ Volver</button>
        <h2>{title}</h2>
        <img src={src} alt={title} width="300" />
        <p>{description}</p>
        <button class="boton-fav" onClick={onToggle}>
          {isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
        </button>
      </div>
    </div>
  );
}
