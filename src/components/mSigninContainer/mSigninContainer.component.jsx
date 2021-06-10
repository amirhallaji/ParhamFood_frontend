import React from 'react';
import './mSigninContainer.styles.css';

import { MsigninFields } from '../mSigninFields/mSigninFields.component';

export const MSigninContainer = () => {
      return (
            <div className='msignin-container'>
                  <MsigninFields></MsigninFields>
            </div>
      )
}