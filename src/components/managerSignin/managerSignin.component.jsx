import React from 'react';
import './managerSignin.styles.css';

import { MSigninContainer } from '../mSigninContainer/mSigninContainer.component';

export const ManagerSignin = () => {
      return (
            <div style={{height:window.innerHeight}} className='manager-signin'>
                  <MSigninContainer></MSigninContainer>
            </div>
      )
}