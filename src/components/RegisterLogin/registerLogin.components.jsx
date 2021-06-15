import React from 'react';
import './registerLogin.styles.css';
import { Button, Modal, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4002";
const socket = socketIOClient(ENDPOINT);

let executed = false;
let executed2 = false;

export const RegisterLogin = () => {

      const [visible, setVisible] = useState(false);

      const [usernameVisible, setUsernameVisible] = useState(false);

      var giveMeUserName = (function () {
            return function () {
                  if (!executed) {
                        executed = true;
                        alert('name asked!')
                        socket.emit('give me user name');
                  }
            };
      })();

      giveMeUserName()      
      // giveMeUserName()      

      const [username, setUsername] = useState("");

      // let getUserName = (function () {
      //       return function () {
      //             if (!executed2) {
      //                   executed2 = true;
      //                   socket.on('get user name', msg => {
      //                         setUsername([...username], msg)
      //                         console.log("username : ", username)
      //                   });
      //             }
      //       };
      // })();

      // getUserName()
      // getUserName()

      useEffect(() => {
            socket.on('get user name', data => {
                  // setResponse(data);
                  alert('name received')
                  alert(data)
                  console.log('username : ', data);
            });
      }, []);

      return (
            <div>
                  <Button type="primary" shape="round" className='register-button' onClick={() => { setVisible(true) }}> ورود/عضویت </Button>
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

