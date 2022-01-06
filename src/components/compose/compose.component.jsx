import React, { ReactDOM } from 'react'
import { useSelector } from 'react-redux';
import { ModalContainer } from '../containers';
import { ComposeBody, ComposeContainer, ComposeInput } from './compose.styles';
export const Compose = () => {
      const open = useSelector(state => state.ui.composeModalOpen);
      return (
            open &&
            <ModalContainer>
                  <ComposeInput type='text' placeholder='To' />
                  <ComposeBody type='text' placeholder='Message' />
            </ModalContainer>
      );
}
