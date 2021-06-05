import React from 'react';
import './mpTopic.styles.css';
import { Table } from 'antd';

export const MpTopic = () => {
      const columns = [
            {
              title: 'نام',
              dataIndex: 'managerName',
            },
            {
              title: 'ایمیل',
              dataIndex: 'email',
            },
            {
              title: 'نام رستوران',
              dataIndex: 'restaurantName',
            },
            {
              title: 'آدرس رستوران',
              dataIndex: 'address',
            },
            {
              title: 'ساعات کاری',
              dataIndex: 'availableTimes',
            },
            {
              title: 'هزینه ارسال',
              dataIndex: 'deliveryPrice',
            }
          ];

          const data = [
            {
              managerName: 'امیر حلاجی',
              email: 'a.hallaji.b@gmail.com',
              restaurantName:'رستوران اقدسیه',
              address: 'اقدسیه، رستوران اقدسیه',
              availableTimes:'۹-۱۲',
              deliveryPrice:'۱۲۰۰۰'

            },
          ];
      return (
            <div className='mp-topic'>
                  <Table className='topic-table' columns={columns} dataSource={data} size="middle" editable='true'/>
            </div>
      )
}