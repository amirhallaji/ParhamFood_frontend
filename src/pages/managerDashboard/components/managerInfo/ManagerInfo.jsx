import React from 'react'

import './ManagerInfo.css'

// Components
import ManagerInfoHeader from '../managerInfoHeader/ManagerInfoHeader'
import ManagerInfoContent from '../managerInfoContent/ManagerInfoContent'
import { Button } from 'antd'

const ManagerInfo = () => {
      return <div id='managerInfo'>
            <div id='managerInfoDetails'>
                  <ManagerInfoHeader />
                  <ManagerInfoContent />
            </div>

            <Button type='primary' shape='round'>ویرایش حساب کاربری</Button>
      </div>
}

export default ManagerInfo