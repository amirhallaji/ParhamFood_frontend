import React from 'react';
import './EditProfileFields.css';

import { Input } from 'antd';

export const EditProfileFields = () => {
      return (
            <div id='editProfile' style={{ height: window.innerHeight }}>
                  <div className='editProfileFields'>
                        <div>نام و نام خانوادگی</div>
                        <Input placeholder=''></Input>
                  </div>

                  <div className='editProfileFields'>
                        <div>ایمیل</div>
                        <Input placeholder=''></Input>
                  </div>


                  <div className='editProfileFields'>
                        <div>رمز عبور جدید</div>
                        <Input placeholder='' type='password'></Input>
                  </div>


                  <div className='editProfileFields'>
                        <div>نام رستوران</div>
                        <Input placeholder=''></Input>
                  </div>

                  <div className='editProfileFields'>
                        <div>آدرس رستوران</div>
                        <Input placeholder=''></Input>
                  </div>

                  <div className='editProfileFields'>
                        <div>ساعات کاری</div>
                        <Input placeholder=''></Input>
                  </div>

                  <div className='editProfileFields'>
                        <div>هزینه ارسال</div>
                        <Input placeholder=''></Input>
                  </div>
                  
                  
                  
                  

            </div>
      )
}