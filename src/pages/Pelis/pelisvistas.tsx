import './style.css';

export function PelisVistas() {
	return (
		<div class="home">
			<h1>Pelis vistas</h1>
			<progress value="70" max="100"></progress>
			<section>
				<Titulo 
					title="Kimetsu no Yaiba: Castillo infinito" 	
					description="Película de anime"
					/>
				<Titulo 	
					title="200% Lobo" 
					description="Película de animación" 
					/>
				<Titulo 
					title="Together: Juntos hasta la muerte" 
					description="Película de terror" 
					/>
				<Titulo 
					title="La mujer de la fila" 
					description="Película de suspenso" 
					/>
				<Titulo 
					title="El conjuro 4: últimos ritos" 
					description="Película de terror" 
					/>
				<Titulo 
					title="Mascotas al rescate" 
					description="Película de animación" 
					/>
				<Titulo 
					title="Homo Argentum" 
					description="Película de Francella" 
					/>
				<Titulo 
					title="Otro viernes de locos" 
					description="Película de Comedia"
					/>
				<Titulo 
					title="La hora de la desaparición" 
					description="Película de Terror"
					/>
				<Titulo 
					title="Los cuatro Fantásticos: primeros pasos" 
					description="Película de Marvel"
					/>
				<Titulo 
					title="Los tipos malos 2" 
					description="Película de Animación"
					/>
				<Titulo
					title="Toy Story: 30 aniversario" 
					description="Película de Animación"
					/>
			</section>
		</div>
	);
}

function Titulo(props) {
	return (
		<button class="">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</button>
	);


}