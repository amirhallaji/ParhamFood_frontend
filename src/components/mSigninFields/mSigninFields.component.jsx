import React from 'react';
import './mSigninFields.styles.css';

import { Input, Button } from 'antd';

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
                              <Button type='primary' shape='round'>ورود</Button>
                              <Button type='primary' shape='round'>ثبت نام</Button>
                        </div>
                  </div>
            </div>
      )
}