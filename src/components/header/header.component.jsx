import React from 'react'
import { HeaderContainer, HeaderButton, HeaderTitle } from './header.styles'
import { faEdit, faUser } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
      return (
            <HeaderContainer>
                  <HeaderButton icon={faUser} />
                  <HeaderTitle>Chats</HeaderTitle>
                  <HeaderButton icon={faEdit} />
            </HeaderContainer>
      )
}

