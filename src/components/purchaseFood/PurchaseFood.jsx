import React from 'react';
import './PurchaseFood.css';

// Components
import {PurchaseFoodFields} from '../purchaseFoodFields/PurchaseFoodFields';

export const PurchaseFood = () => {
      return (
            <div style={{height:window.innerHeight}} className='purchaseFood'>
                  <PurchaseFoodFields></PurchaseFoodFields>
            </div>
      )
}