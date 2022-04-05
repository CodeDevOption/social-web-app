import { Avatar } from '@material-ui/core'
import { AccountCircle, ChatBubbleOutline, ExpandMore, NearMe, ThumbUp } from '@material-ui/icons'
import React from 'react'
import './Post.css'

function Post({propic,image,username,timestamp,message}) {
  return (
    <div className='post'>
        <div className="post__top">
            <Avatar src={propic} className="post__Avatar" />
            <div className="post__topinfo">
                <h3>{username}</h3>
                <p> {new Date(timestamp?.toDate()).toUTCString()}</p>
            </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">
                <img src={image} alt="" />
            </div>
            <div className="post__options">
                <div className="post__option Active">
                    <ThumbUp />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutline />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMe />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircle />
                    <ExpandMore />
                </div>

            </div>
       
    </div>
  )
}

export default Post