import React from 'react';
import {Search,Home, Flag, SubscriptionsOutlined, StorefrontOutlined, SupervisedUserCircle, Add, Forum, NotificationsActive, ExpandMore} from '@material-ui/icons';
import './Header.css';
import { Avatar, IconButton } from '@material-ui/core';
import { useStateValue } from './StateProvider';

function Header() {

  
  const [{ user },dishpatch] = useStateValue();



  return (
    <div className='header'>
        <div className="header__left">
            {/* Logo */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png?20200820101156" alt="Facebook__icon" />
            {/* Search bar */}
            <div className="header__input">
            <Search />
              <input type="search"  placeholder='Search Facebook'/>

          </div>
         
        </div>
        <div className="header__middle">
            <div className="header__option header__option__active">
              <Home fontSize='large'  />
            </div>
            <div className="header__option ">
              <Flag fontSize='large'  />
            </div>
            <div className="header__option">
              <SubscriptionsOutlined fontSize='large'  />
            </div>
            <div className="header__option hide ">
              <StorefrontOutlined fontSize='large'  />
            </div>
            <div className="header__option hide">
              <SupervisedUserCircle fontSize='large'  />
            </div>
        </div>
        <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
    <div className="header__info_icon">

        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          <Forum />
        </IconButton>
        <IconButton>
          <NotificationsActive />
        </IconButton>
        <IconButton>
          <ExpandMore />
        </IconButton>
    </div>

        </div>
        
    </div>
  )
}

export default Header