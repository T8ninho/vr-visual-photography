import PropTypes from 'prop-types';
import { BotaoFC } from "./Botao.styled";

export default function Botao({children, href}){
	return(
		<BotaoFC>
			<a href={href}>{children}</a>
		</BotaoFC>
	);
}

Botao.propTypes = {
	children: PropTypes.node.isRequired,
	href: PropTypes.node.isRequired,
};