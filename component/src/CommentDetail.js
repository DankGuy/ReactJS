import React from 'react';
import { faker } from '@faker-js/faker';

const CommentDetail = (props) => {
    return (
        // not sure why the avatar and metadata not working
        <div className="comment">
            <a href='/' className="avatar">
                <img src={ props.avatar } />
            </a>
            <div className="content">
                <a href='/' className="author">
                    { props.author }
                    </a>
                <div className="metadata">
                    <span className="date">Today at {props.timeAgo} </span>
                </div>
                <div className="text">
                    { props.contentText }
                </div>
                <div className="actions">
                    <a href='/' className="reply">Reply</a>
                </div>
            </div>
        </div>    
  );
}

export default CommentDetail;