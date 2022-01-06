import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const SearchResultsContainer = styled.ul`
      width: 100%;
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      box-sizing: border-box;
      padding: 0;
`;

export const UserSearchResultContainer = styled.li`
      height: 50px;
      width: 80%;
      display: grid;
      grid-template-columns: 1fr 3fr 1fr;
      justify-items: start;
      align-items: center;
      box-sizing: border-box;
`;

export const UserSearchResultIcon = styled(FontAwesomeIcon)`
      font-size: 1.7rem;
      color: white;
`

export const AddUserButton = styled.button`
      justify-self: flex-end;
      height: 30px;
      width: 30px;
      background-color: rgb(190,74,219);
      color: white;
      border-radius: 6px;
      border: none;

`