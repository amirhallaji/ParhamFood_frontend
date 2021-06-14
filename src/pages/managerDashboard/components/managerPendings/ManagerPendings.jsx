import React from 'react'

import './ManagerPendings.css'

// Components
import ManagerPendingsHeader from '../managerPendingsHeader/ManagerPendingsHeader'
import ManagerPendingsContent from '../managerPendingsContent/ManagerPendingsContent'

const ManagerPendings = () => {
      return <div id='managerPendings'>
            <ManagerPendingsHeader />
            <ManagerPendingsContent/>
      </div>
}

export default ManagerPendings