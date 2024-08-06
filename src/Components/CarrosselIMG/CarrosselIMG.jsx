import { useEffect, useRef, useState } from "react";
import { ContainerCR, InnerCR, ItemCR, ControleCR } from "./CarrosselIMG.styled";

const images = [
	{
		id: 0,
		image: 'https://storage.alboom.ninja/sites/935/albuns/650975/dsc_8117.jpg?t=1590152512',
		title: 'Retrato pessoal'
	},
	{
		id: 1,
		image: 'https://fstillfotografia.com.br/wp-content/uploads/2024/03/FST_5906-1280x853.jpg',
		title: 'Retrato pessoal'
	},
	{
		id: 2,
		image: 'https://fstillfotografia.com.br/wp-content/uploads/2024/03/FST_6053-1280x853.jpg',
		title: 'Retrato pessoal'
	}
]

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// ------BUG AO PRESSIONAR OS BOTOES {NEXT} E {PREV} MUITAS VEZES SEGUIDAS------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

export default function CarrosselIMG() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const tempoRef = useRef(null)
  const tempo = 3000 // tempo em milisegundos( 3000 = 3 segundos)
	
	const showSlide = (index) => {
		if (index >= images.length) {
			setCurrentIndex(0);
		} else if (index < 0) {
			setCurrentIndex(images.length - 1);
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

  useEffect(() => {
    tempoRef.current = setInterval(() => {
      nextSlide();
    }, tempo);

    return () => {
      clearInterval(tempoRef.current)
    };
  },[showSlide]);

	return(
		<ContainerCR>
			<InnerCR style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
				{images.map((item, index) => (
					<ItemCR key={item.id} className={`${index === currentIndex ? 'active' : ''}`}>
						<img src={item.image} alt={`Imagem ${index + 1}`} />

					</ItemCR>
				))}
			</InnerCR>
			<ControleCR className="prev" onClick={prevSlide}>&#10094;</ControleCR>
			<ControleCR className="next" onClick={nextSlide}>&#10095;</ControleCR>
		</ContainerCR>
	)
}