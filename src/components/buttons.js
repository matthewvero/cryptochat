import styled from 'styled-components';

export const Button = styled.button`
      padding: 5px 10px;
      background-color: rgb(190,74,219);
      color: white;
      border-radius: 6px;
      border: none;
      font-size: 1.2rem;
      &:active {
            background-color: rgb(200, 84, 229);
            transform: scale(0.95);
      }
`;