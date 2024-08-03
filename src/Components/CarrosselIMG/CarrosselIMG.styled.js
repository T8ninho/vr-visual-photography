import styled from "styled-components";

export const Imagem = styled.div`
	display: flex;
	place-items: center;
	height: 90vh;
	background-image: url(https://storage.alboom.ninja/sites/935/albuns/650975/dsc_8117.jpg?t=1590152512);
	background-position: top;
	background-size: cover;
	background-attachment: fixed;
	width: 100%;
	justify-content: center;
	box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
	position: relative;
	
	h1 {
		color: #fff;
		z-index: 1;
	}

	&::after {
		content: '';
		background-color: rgba(0,0,0,.5);
		position: absolute;
		width: 100%;
		height: 100%;
	}
`;

export const ContainerCR = styled.div`
	position: relative;
	height: 90vh;
	overflow: hidden;
`
export const InnerCR = styled.div`
	display: flex;
	transition: transform 0.5s ease-in-out;
`
export const ItemCR = styled.div`
	min-width: 100%;

	img {
		width: 100%;
		display: block;
	}
`
export const ControleCR = styled.button`
	position: absolute;
	top: 50%;
	height: 100%;
	transform: translateY(-50%);
	background-color: rgba(0,0,0,0.5);
	border: none;
	color: #fff;
	padding: 20px;
	cursor: pointer;
	font-size: 18px;
	opacity: 0;
	transition: .2s ease-in-out;

	&:hover {
		opacity: 1;
	}
	

	&.prev {
		left: 0;
	}

	&.next{
		right: 0;
	}
`
