import styled from "styled-components";

export const ConteudoCT = styled.div`
	width: 100%;
	
`;
export const ContainerCT = styled.div`
	background-color: #fff;
	margin: 0 auto 60px auto;
	padding: 60px;
	max-width: 1280px;
	box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
	text-align: center;
	h1{
		color: #553324;
		padding: 30px 0;
	}
	p{
		width: 60%;
		margin: 0 auto;
		text-align: justify;
	}
`;
export const DestaqueContainerCT = styled.div`
	width: 90%;
	display: flex;
	justify-content: space-around;
	margin: 0 auto;
	gap: 10px;
`;
export const DestaqueItemCT = styled.div`
	width: 100%;
	background-image: url(https://storage.alboom.ninja/sites/1135/albuns/76029/ensaio-alicia-02-12-2016-28.jpg?1480973428);
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	height: 350px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;

	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0); // Inicialmente transparente
		transition: background-color 0.3s ease-in-out; // Suave transição
	}

	&:hover::after {
		background-color: rgba(0, 0, 0, 0.7); // Escurece ao passar o mouse
	}

	span {
		position: absolute;
		color: #fff;
		font-size: 26px;
		opacity: 0; // Inicialmente transparente
		transition: opacity 0.3s ease-in-out; // Suave transição
	}

	&:hover span {
		z-index: 1;
		opacity: 1; // Totalmente visível ao passar o mouse
	}
`;
