import React from 'react';
import './mpContainer.styles.css';
import { MpCenterContainer } from '../mpCenterContainer/mpCenterContainer.component';
import { MpFooterContainer } from '../mpFooterContainer/mpFooterContainer.component';

export const MpContainer = () => {
      return (
            <div className='mp-container'>
                  <MpCenterContainer></MpCenterContainer>
                  <MpFooterContainer></MpFooterContainer>
            </div>
      )
}