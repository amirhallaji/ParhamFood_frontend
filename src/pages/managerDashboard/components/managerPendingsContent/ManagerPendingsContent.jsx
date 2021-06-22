import React from 'react'

import './ManagerPendingsContent.css'

// Components
import { Button } from 'antd'

const ManagerPendingsContent = () => {

      const submitOrder = async () => {

      }

      return <div id='managerPendingsContent'>
            {[...Array(6)].map((item, index) => <div key={index} className="managerPendingsContentRow">
                  <div>اصغر</div>
                  <div>پاستا</div>
                  <div>
                  <Button type='primary' shape='round' onClick={submitOrder}>تایید</Button></div>
            </div> )}
      </div>
      
}

export default ManagerPendingsContent