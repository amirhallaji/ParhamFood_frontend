import React from 'react';

import './SearchResult.css';
import pizza from './pizza.jpg';
import {Button } from 'antd';

export const SearchResult = () => {
      return (
            <div style={{ minHeight: window.innerHeight }} className='search-result'>
                  <div class="products">
                        {[...Array(10)].map((item, key) => <div key={key} className='product'>
                              <img src={pizza} alt='pizza'/>
                              <h2>غذا</h2>
                              <h2>رستوران</h2>
                              <Button type='primary' shape='round' className='button-purchase'>خرید</Button>
                        </div>)}

                  </div>
            </div>
      )
}