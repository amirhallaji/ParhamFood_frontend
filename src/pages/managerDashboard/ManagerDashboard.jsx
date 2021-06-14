import React from 'react'

import './ManagerDashboard.css'

// Components
import Header from './components/header/Header'
import ManagerInfo from './components/managerInfo/ManagerInfo'
import ManagerFoods from './components/managerFoods/ManagerFoods'

const ManagerDashboard = () => {
      return <div id='managerDashboard' style={{minHeight: window.innerHeight}}>
            <Header/>
            <ManagerInfo/>
            <ManagerFoods/>
      </div>
}

export default ManagerDashboard