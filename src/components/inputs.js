import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
export const SearchboxContainer = styled.div`   
      margin: 0 30px;
      position: relative;
      box-sizing: border-box;
      display: flex;
      justify-content: flex-start;
`;

export const SearchBoxInput = styled.input`
      width: 100%;
      height: 35px;
      padding: 0 10px 0 40px;
      background-color: rgb(40,40,40);
      border-radius: 6px;
      border: none;
      outline: none;
      color: white;
      box-sizing: border-box;
`

export const SearchBoxIcon = styled(FontAwesomeIcon)`
      position: absolute;
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
      color: white;
`

export const SeachBoxSearchButton = styled.button`
      width: 40px;
      height: 35px;
      background-color: rgb(190,74,219);
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      border: none;
      color: white;
`