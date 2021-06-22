import React from 'react'

import './ManagerInfo.css'

// Components
import ManagerInfoHeader from '../managerInfoHeader/ManagerInfoHeader'
import ManagerInfoContent from '../managerInfoContent/ManagerInfoContent'
import { Button } from 'antd'
import { Link } from 'react-router-dom';

const ManagerInfo = () => {
      return <div id='managerInfo'>
            <div id='managerInfoDetails'>
                  <ManagerInfoHeader />
                  <ManagerInfoContent />
            </div>
            <Link to='/edit-profile'>
                  <Button type='primary' shape='round' onClick={{}}>ویرایش حساب کاربری</Button>
            </Link>
      </div>
}

export default ManagerInfo