type galleryProps = {
  src: string;
  title: string;
  description: string;
	onClick: () => void;
};

export function Gallery(props: galleryProps) {
	return (
		<div class="gallery" onClick={props.onClick}>
			<img src={props.src}
				alt={props.title}
				height="auto" 
				width="100%" />
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</div>
	);
};