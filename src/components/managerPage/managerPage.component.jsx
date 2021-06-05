import React from 'react';
import './managerPage.styles.css';

import { MpContainer } from '../mpContainer/mpContainer.component';

export const ManagerPage = () => {
      return (
            <div className='manager-page' style={{height:window.innerHeight}}>
                  <MpContainer></MpContainer>
            </div>
      )
}