import React from 'react';
import './Comments.css';

import { CommentsInfo } from '../commentsInfo/CommentsInfo';
import { CommentsHeader } from '../commentsHeader/CommentsHeader';

export const Comments = () => {
      return (
            <div style={{minHeight:window.innerHeight}} className='comments'>
                  <CommentsHeader></CommentsHeader>
                  <CommentsInfo></CommentsInfo>
            </div>
      )
}