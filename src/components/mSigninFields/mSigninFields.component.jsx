import React from 'react';
import './mSigninFields.styles.css';

import { Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import socketIOClient from "socket.io-client";
import { useHistory } from "react-router-dom";
const ENDPOINT = "http://127.0.0.1:4001";
const socket = socketIOClient(ENDPOINT);

export const MsigninFields = () => {

      let history = useHistory();

      var dict = {
            email: null,
            password: null,
      };

      useEffect(() => {
            socket.on("manager found", data => {
                  if (data === '1') {
                        history.push('/manager-dashboard')
                  }
                  else {
                        if (data === '0') {
                              alert("manager not found!")
                        }
                        else {
                              alert("password is wrong!")
                        }
                  }
            });
      }, []);

      return (
            <div className='msignin-fields-container'>
                  <div className='msignin-fields'>
                        <div style={{ direction: 'rtl' }}>ایمیل</div>
                        <Input placeholder='example@email.com'onChange={(e) => {
                                          dict.email = e.target.value;
                                    }}></Input>
                  </div>

                  <div className='msignin-fields'>
                        <div style={{ direction: 'rtl' }}>پسوورد</div>
                        <Input placeholder='password'onChange={(e) => {
                                          dict.password = e.target.value;
                                    }}></Input>
                  </div>

                  <div className='msignin-fields'>
                        <div className='msignin-buttons'>
                                    <Button type='primary' shape='round' onClick={(e) => {
                                          var json = JSON.stringify(dict);
                                          socket.emit('login manager', json);
                                          console.log(json)
                                    }}>ورود</Button>
                        </div>
                  </div>
            </div>
      )
}