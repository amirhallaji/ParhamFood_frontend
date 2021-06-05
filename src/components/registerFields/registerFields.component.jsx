import React from 'react';
import './registerFields.styles.css';
import { Input, Button } from 'antd';

export const RegisterFields = () => {
      return (
            <div className='total-register-fields'>
                  <div className='register-fields-container'>
                        <div className='register-fields-right'>
                              <div>
                                    <div className='register-type-fields'>نام و نام خانوادگی</div>
                                    <Input type="text" placeholder='اینجا وارد کنید'></Input>
                              </div>

                              <div>
                                    <div className='register-type-fields'>ایمیل</div>
                                    <Input type="text" placeholder='example@email.com'></Input>
                              </div>

                              <div>
                                    <div className='register-type-fields'>رمز عبور(متشکل از اعداد و حروف و حداقل ۸ کاراکتر)</div>
                                    <Input type="password"  placeholder='password'></Input>
                              </div>
                              <div>
                                    <div className='register-type-fields'>تأیید رمز عبور</div>
                                    <Input type="password" placeholder='confirm password'></Input>
                              </div>
                        </div>

                        <div className='register-fields-left'>
                              <div>
                                    <div className='register-type-fields'>نام رستوران</div>
                                    <Input type="text" placeholder='اینجا وارد کنید'></Input>
                              </div>

                              <div>
                                    <div className='register-type-fields'>آدرس</div>
                                    <Input className='input-style' type="text" placeholder='اینجا وارد کنید'></Input>
                              </div>

                              <div>
                                    <div className='register-type-fields'>ساعات کاری</div>
                                    <Input type="text" placeholder=' ۲۱ - ۹'></Input>
                              </div>

                              <div>
                                    <div className='register-type-fields'>هزینه‌ی ارسال(به تومان)</div>
                                    <Input type="text" placeholder='مثال: ۱۲۰۰۰'></Input>
                              </div>
                              {/* 
                  <div>
                        <div>نام و نام خانوادگی</div>
                        <Input type="text" placeholder='اینجا وارد کنید'></Input>
                  </div>

                  <div>
                        <div>نام و نام خانوادگی</div>
                        <Input type="text" placeholder='اینجا وارد کنید'></Input>
                  </div> */}
                        </div>

                  </div>

                  <div className='button-register-container'>
                        <Button className='button-register' type="primary" shape="round">ثبت نام</Button>
                  </div>
            </div>
      )
}