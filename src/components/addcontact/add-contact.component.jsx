import { faPlus, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ModalContainer } from '../containers'
import { SearchboxContainer, SearchBoxIcon, SearchBoxInput } from '../inputs';
import { addFriend, searchUser } from '../utils/database-utils';
import { AddUserButton, SearchResultsContainer, UserSearchResultContainer, UserSearchResultIcon } from './add-contact.styles';

export const AddContact = ({ user }) => {
      const open = useSelector(state => state.ui.addContactModalOpen);
      const [searchValue, setSearchValue] = useState('');
      const [result, setResults] = useState({});
      useEffect(async () => {
            if (searchValue.length > 3) {
                  const result = await searchUser(searchValue);
                  setResults(result);
            }
      }, [searchValue])

      useEffect(() => console.log(result), [result])
      return (
            open &&
            <ModalContainer >
                  <SearchboxContainer>
                        <SearchBoxIcon icon={faSearch} />
                        <SearchBoxInput placeholder='Search users' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                  </SearchboxContainer>
                  <SearchResultsContainer>
                        {
                              result.hasOwnProperty('username') &&
                              <UserSearchResultContainer>
                                    <UserSearchResultIcon icon={faUser} />
                                    <span >{result.username}</span>
                                    <AddUserButton onPointerUp={() => addFriend(user._id, result._id)}><FontAwesomeIcon icon={faPlus} /></AddUserButton>
                              </UserSearchResultContainer>

                        }
                  </SearchResultsContainer>
            </ModalContainer>
      )
}
