import React from 'react';
import './registerFields.styles.css';
import { Input } from 'antd';

export const RegisterFields = () => {
      return (
            <div className='register-fields'>
                  <Input type="text" placeholder='نام'></Input>
                  <Input type="text" placeholder='نام'></Input>
                  <Input type="text" placeholder='نام'></Input>
                  <Input type="text" placeholder='نام'></Input>
            </div>
      )
}