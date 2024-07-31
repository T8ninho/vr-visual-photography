import styled from "styled-components";

export const NavBarNB = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	backdrop-filter: blur(4px);
	background-color: #00000070;
	box-shadow: rgba(0, 0, 0, 1) 0px 25px 20px -20px;
`;

export const ContainerNB = styled.div`
	display: flex;
	margin: 10px auto;
	place-items: center;
	justify-content: space-between;
	max-width: 1280px;
	

	h1,a {
		color: #fff;
	}
`;
export const LinksNB = styled.div`
	display: flex;
	gap: 30px;
	place-items: center;
`;