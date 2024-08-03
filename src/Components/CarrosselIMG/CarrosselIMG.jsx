import { useState } from "react";
import { ContainerCR, InnerCR, ItemCR, ControleCR } from "./CarrosselIMG.styled";



export default function CarrosselIMG() {

	const Imagens = [
		'https://storage.alboom.ninja/sites/935/albuns/650975/dsc_8117.jpg?t=1590152512',
		'https://fstillfotografia.com.br/wp-content/uploads/2024/03/FST_5906-1280x853.jpg',
		'https://fstillfotografia.com.br/wp-content/uploads/2024/03/FST_6053-1280x853.jpg'
	]
	const [currentIndex, setCurrentIndex] = useState(0);
	const showSlide = (index) => {
		if (index >= Imagens.lenght) {
			setCurrentIndex(0);
		} else if (index < 0) {
			setCurrentIndex(Imagens.lenght - 1);
		} else {
			setCurrentIndex(index)
		}
	};
	const nextSlide = () => {
		showSlide(currentIndex + 1);
	};
	const prevSlide = () => {
		showSlide(currentIndex - 1);
	};
	return(
		<ContainerCR>
			<InnerCR style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
				{Imagens.map((src, index) => (
					<ItemCR key={index} className={`${index === currentIndex ? 'active' : ''}`}>
						<img src={src} alt={`Imagem ${index + 1}`} />
					</ItemCR>
				))}
			</InnerCR>
			<ControleCR className="prev" onClick={prevSlide}>&#10094;</ControleCR>
			<ControleCR className="next" onClick={nextSlide}>&#10095;</ControleCR>
		</ContainerCR>
	)
}