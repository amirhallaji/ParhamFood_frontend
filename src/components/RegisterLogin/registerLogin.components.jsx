import React from 'react';
import './registerLogin.styles.css';
import { Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const showModal = () => {
      setVisible(true);
}


export const RegisterLogin = () => {
      const [visible, setVisible] = useState(false);
      return (
            <Link to="/register">
                  <Button type="primary" shape="round" className='register-button' onClick={showModal}> ورود/عضویت </Button>
            </Link>
      )
}

