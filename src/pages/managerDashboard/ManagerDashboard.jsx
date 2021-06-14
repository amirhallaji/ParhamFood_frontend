import React from 'react'

import './ManagerDashboard.css'

// Components
import Header from './components/header/Header'
import ManagerInfo from './components/managerInfo/ManagerInfo'
import ManagerFoods from './components/managerFoods/ManagerFoods'
import ManagerPendings from './components/managerPendings/ManagerPendings'

const ManagerDashboard = () => {
      return <div id='managerDashboard' style={{minHeight: window.innerHeight}}>
            <Header/>
            <ManagerInfo/>
            <ManagerFoods/>
            <ManagerPendings/>
      </div>
}

export default ManagerDashboard