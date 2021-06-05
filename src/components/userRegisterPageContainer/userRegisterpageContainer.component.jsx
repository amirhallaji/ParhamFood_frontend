import React from 'react';
import './userRegisterPageContainer.styles.css';
import './../registerPageContainer/registerPageContainer.styles.css';
import { UserRegisterPageFields } from '../userRegisterPageFields/userregisterPageFields.component';

export const UserRegisterPageContainer = () => {
      return (
            <div className='register-container'>
                  <UserRegisterPageFields></UserRegisterPageFields>
            </div>
      )
}
