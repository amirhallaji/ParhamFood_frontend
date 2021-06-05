import React from 'react';
import './managerPage.styles.css';

import { MpContainer } from '../mpContainer/mpContainer.component';
import { MpHeader } from '../mpHeader/mpHeader.component';

export const ManagerPage = () => {
      return (
            <div className='manager-page' style={{height:window.innerHeight}}>
                  <MpHeader></MpHeader>
                  <MpContainer></MpContainer>
            </div>
      )
}