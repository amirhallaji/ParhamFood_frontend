import React from 'react';
import './registerLogin.styles.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export const RegisterLogin = () => {
      return (
            <Link to="/register">
                  <Button type="primary" shape="round" className='register-button'> ورود/عضویت </Button>
            </Link>
      )
}

