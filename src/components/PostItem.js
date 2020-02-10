import React, { Component } from 'react';

function PostItem({ data }) {
  return(
    <div className="post">
      <PostHeader author={data.author} date={data.date}/>
      <p className="post-content">{data.content}</p>
      <PostComments comments={data.comments}/>
      
    </div>
  )
}

// Header ----------------------------------------------------------------------

function PostHeader({ author, date }) {
  return(
    <div className="post-header">
      <img className="avatar" src={author.avatar}/>
      <div className="details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
      
    </div>
  )
}

// Comments --------------------------------------------------------------------

function PostComments({ comments }) {
  return(
    <div className="post-comments">
      <div className="divider"/>
      {comments.map(comment => 
        (
          <div key={comment.id} className="comment">
            <img className="avatar" src={comment.author.avatar}/>
            <p>
              <span>{comment.author.name}</span>
              {comment.content}
            </p>
          </div>
        )
      )}
    </div>
  )
}

export default PostItem