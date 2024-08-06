import styled from "styled-components";

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
