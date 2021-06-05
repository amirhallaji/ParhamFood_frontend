import React from 'react';
import './registerPageContainer.styles.css';

import { RegisterFields } from '../registerFields/registerFields.component';

export const RegisterPageContainer = () => {
      return (
            <div className='register-container'>
                  <RegisterFields></RegisterFields>
            </div>
      )
}