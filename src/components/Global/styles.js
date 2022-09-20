import styled from 'styled-components';
import { device } from '../../data/devices';

export const StyledMain = styled.main`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 5rem 5rem;
	overflow-x: hidden;
	@media ${device.mobileL} {
		padding: 0 2.5rem 5rem;
	}
`;

export const ImgWrapper = styled.div`
	max-width: 500px;
`;
