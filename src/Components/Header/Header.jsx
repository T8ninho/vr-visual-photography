import Botao from "../Botao/Botao";
import { NavBarNB, ContainerNB, LinksNB } from "./Header.styled";

export default function Header() {
	return(
		<NavBarNB>
			<ContainerNB>
				<div>
					<h1>VR VISUAL</h1>
				</div>
				<LinksNB>
					<a href="#">Trabalhos</a>
					<Botao href="#">Fale Comigo</Botao>
				</LinksNB>
			</ContainerNB>
		</NavBarNB>
	)
}