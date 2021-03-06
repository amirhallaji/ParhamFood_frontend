import React from 'react';
import './searchContainer.styles.css';

import { SearchPart } from '../searchPart/searchPart.component';
import { SearchTopicContainer } from '../searchTopicContainer/searchTopicContainer.component';


export const SearchContainer = () => {
      
      return (
            <div className='search-container'>
                  <SearchTopicContainer></SearchTopicContainer>
                  <SearchPart></SearchPart>
            </div>
      )
}