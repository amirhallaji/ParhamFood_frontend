import React from 'react';
import './registerLogin.styles.css';
import { Button, Modal, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useState } from 'react';



export const RegisterLogin = () => {
      const [visible, setVisible] = useState(false);
      return (
            <div>
                  <Button type="primary" shape="round" className='register-button' onClick={() => { setVisible(true) }}> ورود/عضویت </Button>
                  <Modal className='modal' visible={visible} footer={null} onCancel={() => setVisible(false)}>

                        <div className='modal-style'>
                              <div style={{fontSize:'40px'}}>
                                    پرهام فود
                              </div>
                              <div className='modal-style-field'>
                                    <div style={{ direction: 'rtl', color: 'white' }}>شماره موبایل</div>
                                    <Input type='number' placeholder='+989384158428'></Input>
                              </div>
                              <div className='modal-style-field'>
                                    <div style={{ direction: 'rtl', color: 'white' }}>رمز عبور</div>
                                    <Input type='password' placeholder='password'></Input>
                              </div>
                              <div className='modal-style-field'>
                                    <div className='modal-buttons'>
                                          <Button type='primary' shape='round'>ورود</Button>
                                    </div>
                              </div>
                              <div className='modal-style-field'>
                                    <div>.حساب کاربری ندارید؟ ثبت نام کنید</div>
                              </div>
                              <div className='modal-style-field'>
                              <div className='modal-buttons'>
                                          <Button type='primary' shape='round'>ثبت نام</Button>
                                    </div>
                              </div>
                              

                        </div>
                  </Modal>
            </div>
      )


}

