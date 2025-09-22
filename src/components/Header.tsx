import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<a href="/" class={url == '/' && 'active'}>
					Cartelera
				</a>
				<a href="/pelis-vistas" class={url == '/pelis-vistas' && 'active'}>
					Pelis vistas
				</a>
			</nav>
		</header>
	);
}
