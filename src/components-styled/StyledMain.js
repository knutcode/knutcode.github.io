import styled from 'styled-components';
import { device } from './ScreenSize';

export const StyledMain = styled.main`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 5rem 5rem;
	@media ${device.mobileL} {
		padding: 0 2.5rem 5rem;
	}
`;
