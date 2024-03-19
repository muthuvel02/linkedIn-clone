import React, { forwardRef } from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import InputOptions from './InputOptions'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
const Post = forwardRef(({ name, description, message, photoUrl },ref) => {
    return (
        <div className='post'>
            <div ref={ref} className="post__header">
                <Avatar src ={photoUrl}> {name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p> {description} </p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__button">
                <InputOptions Icon={ThumbUpAltOutlinedIcon} title="Like" color='	#5A5A5A' />
                <InputOptions Icon={ChatOutlinedIcon} title="Comment" color='#5A5A5A' />
                <InputOptions Icon={ShareOutlinedIcon} title="Share" color='#5A5A5A' />
                <InputOptions Icon={SendOutlinedIcon} title="Send" color='#5A5A5A' />

            </div>
        </div>
    )
})

export default Post