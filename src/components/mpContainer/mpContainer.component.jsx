import React from 'react';
import './mpContainer.styles.css';

import { MpRightContainer } from '../mpRightContainer/mpRightContainer.component';
import { MpLeftContainer } from '../mpLeftContainer/mpLeftContainer.component';
import { MpCenterContainer } from '../mpCenterContainer/mpCenterContainer.component';
import { MpHeader } from '../mpHeader/mpHeader.component';

export const MpContainer = () => {
      return (
            <div>
                  <MpHeader></MpHeader>
                  <MpLeftContainer></MpLeftContainer>
                  <MpCenterContainer></MpCenterContainer>
                  <MpRightContainer></MpRightContainer>
            </div>
      )
}