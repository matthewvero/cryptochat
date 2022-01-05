import React, { ReactDOM } from 'react'
import { ComposeContainer } from './compose.styles';
const appNode = document.querySelector('.App');
export const Compose = ({ display }) => {
      return ReactDOM.createPortal(
            <ComposeContainer>hello</ComposeContainer>,
            appNode
      );
}
