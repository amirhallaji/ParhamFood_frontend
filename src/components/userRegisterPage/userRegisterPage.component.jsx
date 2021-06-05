import React from 'react';
import './userRegisterPage.styles.css';
import './../RegisterPage/registerPage.styles.css';


import { UserRegisterPageContainer } from '../userRegisterPageContainer/userRegisterpageContainer.component';

export const UserRegisterPage = () => {
      return (
            <div className='register-page' style={{height:window.innerHeight}}>
                  <UserRegisterPageContainer></UserRegisterPageContainer>
            </div>
      )
}