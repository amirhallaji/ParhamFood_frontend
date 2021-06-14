import React from 'react'

import './ManagerPendingsContent.css'

// Components
import { Button } from 'antd'

const ManagerPendingsContent = () => {
      return <div id='managerPendingsContent'>
            {[...Array(6)].map((item, index) => <div key={index} className="managerPendingsContentRow">
                  <div>اصغر</div>
                  <div>پاستا</div>
                  <div>
                  <Button type='primary' shape='round'>تایید</Button></div>
            </div> )}
      </div>
      
}

export default ManagerPendingsContent