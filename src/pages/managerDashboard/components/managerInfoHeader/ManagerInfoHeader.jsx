import React from 'react'

import './ManagerInfoHeader.css'

const ManagerInfoHeader = () => {
      return <div id='managerInfoHeader'>
            <div id='managerInfoHeaderName'>نام</div>
            <div id='managerInfoHeaderEmail'>ایمیل</div>
            <div id='managerInfoHeaderRestaurant'>نام رستوران</div>
            <div id='managerInfoHeaderRestaurantAddress'>آدرس رستوران</div>
            <div id='managerInfoHeaderHours'>ساعات کاری</div>
            <div id='managerInfoHeaderPrice'>هزینه ارسال</div>
      </div>
}

export default ManagerInfoHeader