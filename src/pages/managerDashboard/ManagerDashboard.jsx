import React from 'react'

import './ManagerDashboard.css'

// Components
import Header from './components/header/Header'
import ManagerInfo from './components/managerInfo/ManagerInfo'
import ManagerFoods from './components/managerFoods/ManagerFoods'
import ManagerPendings from './components/managerPendings/ManagerPendings'
import { useState } from 'react'
import { useEffect } from 'react'

const ManagerDashboard = () => {
      const [isCommentsVisible, setIsCommentsVisible] = useState(false)

      useEffect(() => {
            console.log('******')
            console.log(isCommentsVisible)
      }, [isCommentsVisible])

      return <div id='managerDashboard' style={{minHeight: window.innerHeight}}>
            <Header/>
            {/* <MangerComments isCommentsVisible={isCommentsVisible} setIsCommentsVisible={setIsCommentsVisible} /> */}
            <ManagerInfo/>
            <ManagerFoods setIsCommentsVisible={setIsCommentsVisible} />
            <ManagerPendings setIsCommentsVisible={setIsCommentsVisible} />
      </div>
}

export default ManagerDashboard