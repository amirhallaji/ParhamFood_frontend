import React from 'react';
import './homepageHeader.styles.css';

import { TopicLeftHeader } from '../topleftHeader/topicLeftHeader.component';
import { RegisterLogin } from '../RegisterLogin/registerLogin.components';

export const HomePageHeader = () => {
      return (
            <div>                  
                  <TopicLeftHeader></TopicLeftHeader>
                  <RegisterLogin></RegisterLogin>
            </div>
      )
}