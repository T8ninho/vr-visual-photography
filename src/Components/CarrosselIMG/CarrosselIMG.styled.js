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
