import React from 'react';
import './mpCenterContainer.styles.css';

import EditableTable from '../mpCenter/mpCenter.component';

export const MpCenterContainer = () => {
      return (
            <div className='mp-center'>
                  {/* <MpCenter></MpCenter> */}
                  <EditableTable></EditableTable>
            </div>
      )
}