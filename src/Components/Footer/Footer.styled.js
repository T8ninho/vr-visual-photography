import styled from "styled-components";

export const ContainerFT = styled.div`
	background-color: #fff;	
`;
export const SobreFT = styled.div`
	max-width: 1280px;
	display: flex;
	margin: 0 auto;
	padding: 20px 0;
	justify-content: center;
	gap: 100px;

	.LinhaCor{
	}

	.LinhaVertical {
		border-right: 1px solid #553324;
	}
	
`;

export const SaibaMaisFT = styled.div`
	display: flex;
	padding: 20px 20px 0 0;
	gap: 20px;
	img{
		height: 12vh
	}
	div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		
	}
`;

export const ContatoFT = styled.div`

`;

export const LinhaFT = styled.div`
	display: flex;
`;

export const CoprightFT = styled.div`
	background-color: #553324;
	text-align: center;
	color: #fff;
	padding: 10px;
	span{
		color: #ff0000;
	}
	
	a{
		color: #fff;
		text-decoration: underline;
	}
`;
