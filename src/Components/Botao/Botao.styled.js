import styled from "styled-components";

export const BotaoFC = styled.div`
	background-color: #985c41;
	padding: 10px 30px;
	border-radius: 8px;
	transition: ease-in-out .2s;
	text-align: center;
	color: #fff;

	&:hover{
		background-color: #553324;
		box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
		
	}
	a{
		font-weight: bold;
	}
`;