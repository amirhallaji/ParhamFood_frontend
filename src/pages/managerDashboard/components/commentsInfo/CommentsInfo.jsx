import React from 'react';
import './CommentsInfo.css';


export const CommentsInfo = () => {
      return (
            <div id='commentsInfo'>
                  {[...Array(6)].map((item, index) => <div key={index} className="commentsInfoRow">
                        <div>امیر حلاجی</div>
                        <div>غذا آشغال است.</div>
                        <div>
                        </div>
                  </div>)}
            </div>
      )
}