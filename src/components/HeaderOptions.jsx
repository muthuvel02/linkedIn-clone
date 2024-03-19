import React from 'react'
import '../components/HeaderOptions.css';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';



const HeaderOptions = ({ avatar,title, Icon,onClick}) => {
  const user = useSelector(selectUser);
  return (
    <div onClick = {onClick} className='headerOptions'>
  {Icon && <Icon className ='headerOption__icon' />}
      {avatar && <Avatar src={user.photoUrl} className ='headerOption__icon' > {user?.email[0]}</Avatar>}
  <h3 className='headerOptions__title'>{title}</h3>

    </div>
  )
}

export default HeaderOptions