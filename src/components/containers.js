import styled, { keyframes } from 'styled-components';

const slideup = keyframes`
  from {
    transform: translateY(100%);
  } to {
    transform: translateY(0);
  }
`

export const ModalContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - 70px);
  padding: 10px 0;
  background-color: rgb(33,33,33);
  box-sizing: border-box;
  animation: ${slideup} 200ms ease-out 1 forwards;
`;    