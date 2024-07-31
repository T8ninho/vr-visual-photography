import { ContainerCT, ConteudoCT, DestaqueContainerCT, DestaqueItemCT } from "./Conteudo.styled";

export default function Conteudo(){
	return(
		<ConteudoCT>
			<ContainerCT>
				<div>
					<h1>Fotografias Recentes</h1>
					<DestaqueContainerCT>
						<DestaqueItemCT>
							<span>Aniversário</span>
						</DestaqueItemCT>
						<DestaqueItemCT>
							<span>Ensaio fotográfico <br /> Rua</span>
						</DestaqueItemCT>
					</DestaqueContainerCT>
				</div>
				<div>
					<h1>Em que Acreditamos</h1>
					<p>
					Acreditamos que cada momento é único e merece ser capturado de forma autêntica e emocionante. Nossa missão é transformar momentos especiais em lembranças eternas, através de um olhar atento e criativo. Valorizamos a simplicidade, a espontaneidade e a beleza natural de cada cena, garantindo que cada foto conte uma história verdadeira e inesquecível.
					</p>
				</div>
			</ContainerCT>
		</ConteudoCT>
	)
}