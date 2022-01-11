import { faCheck, faPlus, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ModalContainer } from '../containers'
import { SearchboxContainer, SearchBoxIcon, SearchBoxInput } from '../inputs';
import { searchUser } from '../../utils/database-utils';
import { AddUserButton, SearchResultsContainer, UserSearchResultContainer, UserSearchResultIcon } from './add-contact.styles';
import { useAddFriendMutation } from '../../redux/redux-query'
export const AddContact = ({ user }) => {
      const open = useSelector(state => state.ui.addContactModalOpen);
      const [searchValue, setSearchValue] = useState('');
      const [result, setResults] = useState({});
      const [addFriend, results] = useAddFriendMutation();
      const [isFriend, setIsFriend] = useState(false);
      useEffect(() => {
            const search = async () => {
                  if (searchValue.length > 3) {
                        const result = await searchUser(searchValue);
                        setResults(result);
                  }
            }
            search();
      }, [searchValue])


      useEffect(() => {
            const friend = user?.friends?.find(el => el.friend1 === user._id || el.friend2 === user._id);
            console.log(friend)
            if (friend) {
                  setIsFriend(true);
            }
      }, [user])

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
                                    {
                                          isFriend ?
                                                <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
                                                :
                                                <AddUserButton onPointerUp={() => addFriend({ userID: user._id, friendID: result._id })}><FontAwesomeIcon icon={faPlus} /></AddUserButton>
                                    }
                              </UserSearchResultContainer>

                        }
                  </SearchResultsContainer>
            </ModalContainer>
      )
}
