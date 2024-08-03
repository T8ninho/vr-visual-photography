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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const innerRef = useRef(null);
  const intervalRef = useRef(null);
  const intervalTime = 3000; // Tempo em milissegundos (5 segundos)
  
  const items = [images[images.length - 1], ...images, images[0]];
  
  const updateIndex = (newIndex) => {
    setIsTransitioning(true);
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    updateIndex(currentIndex + 1);
  };

  const prevSlide = () => {
    updateIndex(currentIndex - 1);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, intervalTime);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [currentIndex]);

  useEffect(() => {
    if (isTransitioning) {
      const transitionEnd = () => {
        setIsTransitioning(false);
        if (currentIndex === 0) {
          innerRef.current.style.transition = 'none';
          setCurrentIndex(images.length);
          setTimeout(() => {
            innerRef.current.style.transition = 'transform 0.5s ease';
          }, 0);
        } else if (currentIndex === images.length + 1) {
          innerRef.current.style.transition = 'none';
          setCurrentIndex(1);
          setTimeout(() => {
            innerRef.current.style.transition = 'transform 0.5s ease';
          }, 0);
        }
      };

      innerRef.current.addEventListener('transitionend', transitionEnd);

      return () => {
        innerRef.current.removeEventListener('transitionend', transitionEnd);
      };
    }
  }, [currentIndex, isTransitioning]);
	return(
		<ContainerCR>
			<InnerCR ref={innerRef} style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
				{items.map((item, index) => (
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