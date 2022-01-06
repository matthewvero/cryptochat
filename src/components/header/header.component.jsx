import React, { useEffect } from 'react'
import { HeaderContainer, HeaderButton, HeaderTitle } from './header.styles'
import { faEdit, faTimes, faUser } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { toggleCompose } from '../../redux/slices/ui-slice';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
export const Header = (props) => {
      const dispatch = useDispatch();
      const composeOpen = useSelector(state => state.ui.composeModalOpen);
      return (
            <>
                  <HeaderContainer>
                        <HeaderButton icon={faUser} />
                        <HeaderTitle>Chats</HeaderTitle>
                        <HeaderButton icon={composeOpen ? faTimes : faEdit} onPointerUp={() => dispatch(toggleCompose())} />

                  </HeaderContainer>
                  <Outlet />
            </>
      )
}

