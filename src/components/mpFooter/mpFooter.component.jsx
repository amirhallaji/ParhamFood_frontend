import React from 'react';
import '../mpFooter/mpFooter.styles.css';
import { Table } from 'antd';

export const MpFooter = () => {
      const columns = [
            {
                  title: 'نام سفارش‌دهنده',
                  dataIndex: 'customerName',
            },
            
            {
                  title: 'نام غذا',
                  dataIndex: 'foodName',
            },
            {
                  title: 'تأیید',
                  dataIndex: 'validate',
            },



      ];

      const data = [
            {
                  customerName: 'امیر حلاجی',
                  foodName: 'کباب کوبیده',
                  validate: 'تأیید',
            },
      ];
      return (
            <div className='mp-footer'>
                  <Table className='footer-table' columns={columns} dataSource={data} size="middle" editable='true' />
            </div>
      )
}