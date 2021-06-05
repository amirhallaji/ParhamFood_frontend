import React from 'react';
import './mpContainer.styles.css';
import { MpCenterContainer } from '../mpCenterContainer/mpCenterContainer.component';
import { MpFooterContainer } from '../mpFooterContainer/mpFooterContainer.component';
import { MpTopicContainer } from '../mpTopicContainer/mpTopicContainer.component';

export const MpContainer = () => {
      return (
            <div className='mp-container'>
                  <MpTopicContainer></MpTopicContainer>
                  <MpCenterContainer></MpCenterContainer>
                  <MpFooterContainer></MpFooterContainer>
            </div>
      )
}