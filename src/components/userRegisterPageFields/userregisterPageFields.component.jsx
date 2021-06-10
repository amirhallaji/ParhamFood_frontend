import React, { useState, useEffect } from 'react';
import './userRegisterPageFields.styles.css';
import './../registerFields/registerFields.styles.css';
import { Input, Button, message } from 'antd';
import { Link } from 'react-router-dom';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";
const socket = socketIOClient(ENDPOINT);

export const UserRegisterPageFields = () => {
      const [response, setResponse] = useState("");
      const [message, setMessage] = useState("");
      const [messages, setMessages] = useState("");

      useEffect(() => {
            getMessages();
      }, [message.length]);

      const getMessages = () => {
            socket.on("message", msg => {
                  setMessages([...message, msg]);
                  setMessage(msg)
                  console.log(message);
            });
      };

      useEffect(() => {
      socket.on("test_client", data => {
            setResponse(data);
            console.log(response);
      });
      }, []);

      let name;
      let phone_number;
      let password;
      let confirm_password;
      let region;
      let address;

      const submit_form = () => {
            var json = {
                  "phone_number": phone_number,   
                  "password"    : password,
                  "name"        : name,
                  "region"      : region,
                  "address"     : address
            };
            socket.emit('create user', json);
            console.log(json);
      }
      
      return (
            <div className='total-register-fields'>
                  <div className='register-fields-container'>
                        <div className='register-fields-right'>
                              <div>
                                    {/* <div className='register-type-fields'>نام و نام خانوادگی</div> */}
                                    <div className='register-type-fields'>نام و نام خانوادگی</div>
                                    <Input type="text" placeholder='اینجا وارد کنید' name="userName" onChange={(e) => {
                                          name = e.target.value;
                                    }}></Input>
                              </div>

                              <div>
                                    <div className='register-type-fields'>شماره موبایل</div>
                                    <Input type="text" placeholder='+989123456789' name="userPhoneNumber" style={{ direction: 'ltr' }} onChange={(e) => {
                                          phone_number = e.target.value;
                                    }}></Input>
                              </div>

                              <div>
                                    <div className='register-type-fields'>رمز عبور(متشکل از اعداد و حروف و حداقل ۸ کاراکتر)</div>
                                    <Input type="password" placeholder='password' name="userPassword" onChange={(e) => {
                                          password = e.target.value;
                                    }}></Input>
                              </div>
                              <div>
                                    <div className='register-type-fields'>تأیید رمز عبور</div>
                                    <Input type="password" placeholder='confirm password' name="userConfirmPassword" onChange={(e) => {
                                          confirm_password = e.target.value;
                                    }}></Input>
                              </div>
                        </div>

                        <div className='register-fields-left'>
                              <div>
                                    <div className='register-type-fields'>آدرس</div>
                                    <Input type="text" placeholder='اینجا وارد کنید' name="userAddress" onChange={(e) => {
                                          address = e.target.value;
                                    }}></Input>
                              </div>

                              <div>
                                    <div className='register-type-fields'>منطقه</div>
                                    <Input className='input-style' type="text" placeholder='اینجا وارد کنید' name="userRegion" onChange={(e) => {
                                          region = e.target.value;
                                    }}></Input>
                              </div>
                        </div>

                  </div>

                  <div className='button-register-container'>
                        <Link to='/'>
                              <Button id="button_id_user" className='button-register' type="primary" shape="round" onClick={submit_form()}>ثبت نام</Button>
                        </Link>
                  </div>
            </div>
      )
}