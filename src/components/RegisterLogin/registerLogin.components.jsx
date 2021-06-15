import React from 'react';
import './registerLogin.styles.css';
import { Button, Modal, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";
const socket = socketIOClient(ENDPOINT);

let executed = false;
let executed2 = false;

export const RegisterLogin = () => {

      const [visible, setVisible] = useState(false);

      const [usernameVisible, setUsernameVisible] = useState(false);

      // var giveMeUserName = (function () {
      //       return function () {
      //             if (!executed) {
      //                   executed = true;
      //                   // alert('name asked!')
      //                   socket.emit('give me user name');
      //             }
      //       };
      // })();

      // giveMeUserName()      
      // // giveMeUserName()      


      
      var giveMeUserInformation = (function () {
            return function () {
                  if (!executed) {
                        executed = true;
                        // alert('name asked!')
                        socket.emit('give me user information');
                  }
            };
      })();

      giveMeUserInformation()  

      const [username, setUsername] = useState("");

      useEffect(() => {
            socket.on('get user information', data => {
                  setUsername(data);
                  // setResponse(data);
                  // alert('name received')
                  // alert(data)
                  console.log('json : ', data);
            });
      }, [setUsername]);

      return (
            <div>
                  {username == '' ? (
                  <Button type="primary" shape="round" className='register-button' onClick={() => { setVisible(true) }}> ورود/عضویت </Button> ):
                  ( 
                        <div>{username}</div>
                  ) }
                  <Modal className='modal' visible={visible} footer={null} onCancel={() => setVisible(false)}> 


                        <div className='modal-style'>
                              <div style={{ fontSize: '40px' }}>
                                    پرهام فود
                              </div>
                              <div className='modal-style-field'>
                                    <div style={{ direction: 'rtl', color: 'white' }}>شماره موبایل</div>
                                    <Input type='tel' placeholder='+989384158428'></Input>
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
                                          <Link to='/user-register'>
                                                <Button type='primary' shape='round'>ثبت نام</Button>
                                          </Link>
                                    </div>
                              </div>


                        </div>
                  </Modal>
            </div>
      )


}

