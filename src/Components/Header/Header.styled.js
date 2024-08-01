import styled from "styled-components";

export const NavBarNB = styled.nav`
	position: fixed;
	z-index: 99;
	top: 0;
	left: 0;
	right: 0;
	backdrop-filter: blur(4px);
	background-color: rgba(0,0,0,.5);
	box-shadow: rgba(0, 0, 0, 1) 0px 25px 20px -20px;
`;

export const ContainerNB = styled.div`
	display: flex;
	margin: 10px auto;
	place-items: center;
	justify-content: space-between;
	max-width: 1280px;
	
	div {
		line-height: .9;
		h1{
			font-size: 2rem;
		}

		h3 {
			font-size: 1.2rem;
			text-align: end;
		}
		
	}


	h1, a, h3 {
		color: #fff;
	}
`;
export const LinksNB = styled.div`
	display: flex;
	gap: 30px;
	place-items: center;
`;