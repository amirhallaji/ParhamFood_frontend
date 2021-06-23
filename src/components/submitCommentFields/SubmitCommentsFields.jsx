import React from 'react';
import './SubmitCommentsFields.css';


import { Input } from 'antd';

export const SubmitCommentFields = () => {
      return (
            <div id='submitCommentsField'>
                  <div className='comment-field'>
                        <div>لطفا نظر خود را وارد بفرمایید.</div>
                        <Input></Input>
                  </div>
            </div>
      )
}