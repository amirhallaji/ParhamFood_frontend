import React, { useEffect } from 'react';
import './PurchaseFoodFields.css';

import pizza from '../../images/pizza.jpg'


import socketIOClient, { io } from "socket.io-client";


//antd
import { Button } from 'antd';
import { useState } from 'react';

//react-router
import { Link } from 'react-router-dom';


const ENDPOINT = "http://127.0.0.1:4001";
const socket = socketIOClient(ENDPOINT)

let orderStatus = [
      'در حال آماده‌سازی',
      'در حال ارسال توسط پیک',
      'تحویل داده‌شده',
]
let i = 0;

export const PurchaseFoodFields = () => {

      const [status, setStatus] = useState('در انتظار تأیید رستوران')


      useEffect(() => {
            socket.on("status", data => {
                  setStatus(data);
                  console.log("data: ", data);
            });
      }, [])

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

                        <div className='purchaseFoodFieldPrice' onClick = { () => {
                              setInterval(orderStatus[i], 5000)
                              setStatus(orderStatus[i])
                              i++;
                        }}>
                              قیمت غذا: 50000 تومان
                        </div>


                        <div className='purchaseFoodFieldPrice'  >
                              {status}
                        </div>

                        <Link to='/submit-comment'>
                              <Button type='primary'>ثبت نظر</Button>
                        </Link>

                  </div>

            </div>
      )
}