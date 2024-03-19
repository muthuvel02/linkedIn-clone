import React from 'react'
import '../components/Sidebar.css'
import { Avatar } from '@mui/material'
import background from '../assets/background.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

const Sidebar = () => {
    const user = useSelector(selectUser);
    
    const recentItems = (topic) =>
    (
        <div className="sidebar__recentItems">
            <span className="sidebar__hash">#</span>
            <p> {topic} </p>
        </div>
    )
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src={background} alt='' />
                <Avatar src={user.photoUrl} className='sidebar__avatar' >
                    {user.email[0]}
                </Avatar>
                <h3> {user.displayName} </h3>
                <h4>{user.email}</h4> </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p> Who viewed you</p>
                    <p className='sidebar__statNumber'> 50</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on posts</p>
                    <p className='sidebar__statNumber'> 574</p>
                </div>
            </div>


            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItems('design')}
                {recentItems('programming')}
                {recentItems('reactjs')}
                {recentItems('java')}
                {recentItems('spring')}

            </div>
        </div>
    )
}

export default Sidebar