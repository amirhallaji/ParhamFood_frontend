import React from 'react';
import './homepage.styles.css';

import { SearchContainer } from '../searchContainer/searchContainer.component';
import { HomePageHeader } from '../mainpageHeader/homepageHeader.component';

export const HomePage = () => {
      return (
            <div className='homepage'>
                  <HomePageHeader></HomePageHeader>
                  <SearchContainer></SearchContainer>
            </div>     
      )
}