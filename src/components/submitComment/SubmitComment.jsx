import React from 'react';
import './SubmitComment.css';


// Components
import { SubmitCommentFields } from '../submitCommentFields/SubmitCommentsFields';

export const SubmitComment = () => {
      return (
            <div id='submitCommentsFieldsContainer' style={{height:window.innerHeight}}>
                  <SubmitCommentFields></SubmitCommentFields>
            </div>
      )
}