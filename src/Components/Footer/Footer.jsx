import Botao from "../Botao/Botao";
import { ContainerFT, SobreFT, SaibaMaisFT, ContatoFT, CoprightFT, LinhaFT } from "./Footer.styled";

export default function Footer(){
	return(
		<ContainerFT>
			<SobreFT> {/* irá ocupar apenas 1280px da tela */}
				<div className="LinhaCor">
					<h2>VR VISUAL Photography</h2>
					<SaibaMaisFT>
						<img src="https://lh4.googleusercontent.com/proxy/RpkNcBYb1NJHSotFMBsf9BjgtybNEJrqoCrN0pwk10GIXW2ikPqhu3VaFD0o2jL3rwGIGCbY3BogIRQLQWDK0VU5Tbiu9QrXzxTmz3JikReiV0VH-dQWlL_Bu9bD2HVHbKNtB4IPonmdz8RfJI9y0Bf-SBz5r-Qsrfk--5Gpgm27b2SkeBM4umSWs_UFixWK5oVL1IIVOuPUyqA_o7vCpQ6QTB6eXw_XXH6-Nw" />
						<div>
							<p>Fotografar não é apenas apertar um botão. <br />É uma arte e, como fotográfo, eu me considero um artista.</p>
							<Botao>Saiba mais</Botao>
						</div>
					</SaibaMaisFT>
				</div>
				<div className="LinhaVertical"></div>
				<ContatoFT>
					<h3>PROPOSTA DE FOTOGRAFIA</h3>
					<LinhaFT>
						<p>✅</p>
						<a>(27) 98888-0000</a>
					</LinhaFT>
					<LinhaFT>
						<p>✅</p>
						<a href="#">Enviar mensagem</a>
					</LinhaFT>
					<LinhaFT>
						<p>✅</p>
						<p>contato@vrvisualphotography.com</p>
					</LinhaFT>
					<LinhaFT>
						<p>✅</p>
						<p>Campo grande, Cariacica / ES</p>
					</LinhaFT>
					<LinhaFT>
						<a>💥</a>
						<a>💥</a>
					</LinhaFT>
					<Botao>Contato</Botao>
				</ContatoFT>
			</SobreFT>
			<CoprightFT>{/* irá ocupar 100% da tela */}
				<p>© VR VISUAL Photography | Todos os direitos reservados</p>
				Feito com <span>❤</span> por <a href="http://t8ninho.com/">T8ninho</a>
			</CoprightFT>
		</ContainerFT>
	)
}