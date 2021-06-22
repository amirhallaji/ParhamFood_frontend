import React from 'react';
import './PurchaseFoodFields.css';

import pizza from '../../images/pizza.jpg'

export const PurchaseFoodFields = () => {
      return (
            <div id='purchaseFoodContainer'>
                  <div className='purchaseFoodField'>
                        <div>
                              نام غذا
                        </div>
                        <div>
                              نام رستوران
                        </div>
                  </div>
            </div>
      )
}