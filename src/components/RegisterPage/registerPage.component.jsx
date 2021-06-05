import React from 'react';
import './registerPage.styles.css';

import { RegisterPageContainer } from '../registerPageContainer/registerPageContainer.component';

export const RegisterPage = () => {
      return (
            <div className='register-page' style={{height:window.innerHeight}}>
                  <RegisterPageContainer></RegisterPageContainer>
            </div>
      )
}