import React from 'react';
import './userRegisterPageFields.styles.css';
import './../registerFields/registerFields.styles.css';
import { Input, Button } from 'antd';
import { Link } from 'react-router-dom';

export const UserRegisterPageFields = () => {
      return (
            <div className='total-register-fields'>
                  <div className='register-fields-container'>
                        <div className='register-fields-right'>
                              <div>
                                    <div className='register-type-fields'>نام و نام خانوادگی</div>
                                    <Input type="text" placeholder='اینجا وارد کنید'></Input>
                              </div>

                              <div>
                                    <div className='register-type-fields'>شماره موبایل</div>
                                    <Input type="text" placeholder='+989123456789' style={{ direction: 'ltr' }}></Input>
                              </div>

                              <div>
                                    <div className='register-type-fields'>رمز عبور(متشکل از اعداد و حروف و حداقل ۸ کاراکتر)</div>
                                    <Input type="password" placeholder='password'></Input>
                              </div>
                              <div>
                                    <div className='register-type-fields'>تأیید رمز عبور</div>
                                    <Input type="password" placeholder='confirm password'></Input>
                              </div>
                        </div>

                        <div className='register-fields-left'>
                              <div>
                                    <div className='register-type-fields'>آدرس</div>
                                    <Input type="text" placeholder='اینجا وارد کنید'></Input>
                              </div>

                              <div>
                                    <div className='register-type-fields'>منطقه</div>
                                    <Input className='input-style' type="text" placeholder='اینجا وارد کنید'></Input>
                              </div>
                        </div>

                  </div>

                  <div className='button-register-container'>
                        <Link to='/'>
                              <Button className='button-register' type="primary" shape="round">ثبت نام</Button>
                        </Link>
                  </div>
            </div>
      )
}