import React from 'react';
import { useEffect } from 'react';
import './registerFields.styles.css';
import { Input, Button } from 'antd';
import socketIOClient from "socket.io-client";
import { useHistory } from "react-router-dom";

const ENDPOINT = "http://127.0.0.1:4001";
const socket = socketIOClient(ENDPOINT);

export const RegisterFields = () => {

      let history = useHistory();

      useEffect(() => {
            socket.on("manager registered", data => {
                  history.push('/manager-dashboard')
            });
      }, []);

      useEffect(() => {
            socket.on("m bad password", data => {
                  alert("password length must be greater than 8\n and also must contain letters and digits!")
            });
      }, []);

      useEffect(() => {
            socket.on("m confirm password error", data => {
                  alert("passwords doesn't match!")
            });
      }, []);

      useEffect(() => {
            socket.on("m rep", data => {
                  alert("manager with this email already exists!")
            });
      }, []);

      useEffect(() => {
            socket.on("m bad req", data => {
                  alert("fill all of fields")
            });
      }, []);

      var dict = {
            email: null,
            password: null,
            confirm_password: null,
            name: null,
            restaurant_name: null,
            address: null,
            region: null,
            delivery_time: null,
            delivery_fee: null,
            work_hours: null,
            serving_regions: null,
            manager_email: null
      };

      return (
            <div className='total-register-fields'>
                  <div className='register-fields-container'>
                        <div className='register-fields-right'>
                              <div>
                                    <div className='register-type-fields'>نام و نام خانوادگی</div>
                                    <Input type="text" placeholder='اینجا وارد کنید' onChange={(e) => {
                                          dict.name = e.target.value;
                                    }}></Input>
                              </div>

                              <div>
                                    <div className='register-type-fields'>ایمیل</div>
                                    <Input type="text" placeholder='example@email.com' onChange={(e) => {
                                          dict.email = e.target.value;
                                          dict.manager_email = e.target.value;
                                    }}></Input>
                              </div>

                              <div>
                                    <div className='register-type-fields'>رمز عبور(متشکل از اعداد و حروف و حداقل ۸ کاراکتر)</div>
                                    <Input type="password" placeholder='password' onChange={(e) => {
                                          dict.password = e.target.value;
                                    }}></Input>
                              </div>
                              <div>
                                    <div className='register-type-fields'>تأیید رمز عبور</div>
                                    <Input type="password" placeholder='confirm password' onChange={(e) => {
                                          dict.confirm_password = e.target.value;
                                    }}></Input>
                              </div>
                        </div>

                        <div className='register-fields-left'>
                              <div>
                                    <div className='register-type-fields'>نام رستوران</div>
                                    <Input type="text" placeholder='اینجا وارد کنید' onChange={(e) => {
                                          dict.restaurant_name = e.target.value;
                                    }}></Input>
                              </div>

                              <div>
                                    <div className='register-type-fields'>آدرس</div>
                                    <Input className='input-style' type="text" placeholder='اینجا وارد کنید' onChange={(e) => {
                                          dict.address = e.target.value;
                                          dict.region = "inja";
                                          dict.serving_regions = "unjaha";
                                    }}></Input>
                              </div>

                              <div>
                                    <div className='register-type-fields'>ساعات کاری</div>
                                    <Input type="text" placeholder=' ۲۱ - ۹' onChange={(e) => {
                                          dict.work_hours = e.target.value;
                                    }}></Input>
                              </div>

                              <div>
                                    <div className='register-type-fields'>هزینه‌ی ارسال(به تومان)</div>
                                    <Input type="text" placeholder='مثال: ۱۲۰۰۰' onChange={(e) => {
                                          dict.delivery_fee = e.target.value;
                                          dict.delivery_time = "7-23";
                                    }}></Input>
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
                        <Button className='button-register' type="primary" shape="round"onClick={() => {
                                    var json = JSON.stringify(dict);
                                    socket.emit('create manager', json);
                              }}>ثبت نام</Button>
                  </div>
            </div>
      )
}