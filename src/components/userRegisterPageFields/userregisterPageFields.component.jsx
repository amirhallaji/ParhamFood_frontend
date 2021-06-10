import React, { useState, useEffect } from 'react';
import './userRegisterPageFields.styles.css';
import './../registerFields/registerFields.styles.css';
import { Input, Button, message } from 'antd';
import { Link } from 'react-router-dom';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

export const UserRegisterPageFields = () => {
      const [response, setResponse] = useState("");
      const [message, setMessage] = useState("");
      const [messages, setMessages] = useState("");

      useEffect(() => {
            getMessages();
      }, [message.length]);

      const getMessages = () => {
            const socket = socketIOClient(ENDPOINT);
            socket.on("message", msg => {
                  setMessages([...message, msg]);
                  setMessage(msg)
                  console.log(message);
            });
      };

      useEffect(() => {
      const socket = socketIOClient(ENDPOINT);
      socket.on("test_client", data => {
            setResponse(data);
            console.log(response);
      });
      }, []);
      
      return (
            <div className='total-register-fields'>
                  <div className='register-fields-container'>
                        <div className='register-fields-right'>
                              <div>
                                    {/* <div className='register-type-fields'>نام و نام خانوادگی</div> */}
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
                              <Button id="button_id_user" className='button-register' type="primary" shape="round" onclick={() => {
                                    
                              }}>ثبت نام</Button>
                        </Link>
                  </div>
            </div>
      )
}