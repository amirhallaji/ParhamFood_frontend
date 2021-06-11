import React from 'react';
import './mSigninFields.styles.css';

import { Input, Button } from 'antd';
import { Link } from 'react-router-dom';

export const MsigninFields = () => {
      return (
            <div className='msignin-fields-container'>
                  <div className='msignin-fields'>
                        <div style={{ direction: 'rtl' }}>ایمیل</div>
                        <Input placeholder='example@email.com'></Input>
                  </div>

                  <div className='msignin-fields'>
                        <div style={{ direction: 'rtl' }}>پسوورد</div>
                        <Input placeholder='password'></Input>
                  </div>

                  <div className='msignin-fields'>
                        <div className='msignin-buttons'>
                              <Link to='/manager-dashboard'>
                                    <Button type='primary' shape='round'>ورود</Button>
                              </Link>
                              <Link to='manager-register'>
                                    <Button type='primary' shape='round'>ثبت نام</Button>
                              </Link>
                        </div>
                  </div>
            </div>
      )
}