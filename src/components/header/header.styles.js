import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const slidein = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`

export const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  height: 70px;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  justify-items: center;
  animation: ${slidein} 200ms ease-out 1 forwards;
  box-sizing: border-box;

  
`;

export const HeaderTitle = styled.h1`
      margin: none;

`

export const HeaderButton = styled(FontAwesomeIcon)`
  font-size: 1.6rem;
  color: rgb(190,74,219);
`;
