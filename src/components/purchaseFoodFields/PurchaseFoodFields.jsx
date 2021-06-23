import React from 'react';
import './PurchaseFoodFields.css';

import pizza from '../../images/pizza.jpg'

//antd
import { Button } from 'antd';

export const PurchaseFoodFields = () => {
      return (
            <div id='purchaseFoodContainer'>
                  <div className='purchaseFoodField'>

                        <div>
                              <img src={pizza} className='purchaseFoodFieldImage' />
                        </div>

                        <div className='purchaseFoodFieldName'>
                              نام غذا: کباب کوبیده
                        </div>
                        <div className='purchaseFoodFieldRestaurant'>
                              نام رستوران: حلاج پلو
                        </div>

                        <div className='purchaseFoodFieldPrice'>
                              قیمت غذا: 120000 تومان
                        </div>

                  </div>
                  <Button type='primary'>خرید نهایی</Button>


            </div>
      )
}