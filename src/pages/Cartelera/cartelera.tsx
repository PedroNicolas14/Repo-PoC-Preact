import './style-cartelera.css';

export function Cartelera() {
	return (
		<div class="home">
			<h1>Cartelera de películas </h1>
			<section>
				<Gallery 
					title="Kimetsu no Yaiba: Castillo infinito"
					description="Película de anime"
					src="https://static.voyalcine.net/Uploads/i4766.jpg"
				/>
				<Gallery
					title="200% Lobo"
					description="Película de animación"
					src="https://static.voyalcine.net/Uploads/i4854.jpg"
				/>
				<Gallery
					title="Together: Juntos hasta la muerte"
					description="Película de terror"
					src="https://static.voyalcine.net/Uploads/i4853.jpg"
				/>
				<Gallery
					title="La mujer de la fila"
					description="Película de suspenso"
					src="https://static.voyalcine.net/Uploads/i4843.jpg"
				/>
				<Gallery
					title="El conjuro 4: últimos ritos"
					description="Película de terror"
					src="https://static.voyalcine.net/Uploads/i4800.jpg"
				/>
				<Gallery
					title="Mascotas al rescate"
					description="Película de animación"
					src="https://static.voyalcine.net/Uploads/i4821.jpg"
				/>
				<Gallery
					title="Homo Argentum"
					description="Película de Francella"
					src="https://static.voyalcine.net/Uploads/i4732.jpg"
				/>
				<Gallery
					title="Otro viernes de locos"
					description="Película de Comedia"
					src="https://static.voyalcine.net/Uploads/i4748.jpg"
				/>
				<Gallery
					title="La hora de la desaparición"
					description="Película de Terror"
					src="https://static.voyalcine.net/Uploads/i4733.jpg"
				/>
				<Gallery
					title="Los cuatro Fantásticos: primeros pasos"
					description="Película de Marvel"
					src="https://static.voyalcine.net/Uploads/i4682.jpg"
				/>
				<Gallery
					title="Los tipos malos 2"
					description="Película de Animación"
					src="https://static.voyalcine.net/Uploads/i4711.jpg"
				/>
				<Gallery
					title="Toy Story: 30 aniversario"
					description="Película de Animación"
					src="https://static.voyalcine.net/Uploads/i4850.jpg"
				/>
			</section>
		</div>
	);
}

function Gallery(props) {
	return (
		<div class="gallery">
			<img src={props.src}
				alt={props.title}
				height="auto" 
				width="100%" />
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</div>
	);
}
