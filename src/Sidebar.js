
import { Avatar } from '@material-ui/core';
import { Chat, EmojiFlags, ExpandMore, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons';
import React from 'react';
import './Sidebar.css';
import { useStateValue } from './StateProvider';

function Sidebar() {
      const [{ user },dishpatch] = useStateValue();
  return (
    <div className='sidebar'>
      <div className="sidebar__row">

            <Avatar src= {user.photoURL} />
            <p>{user.displayName}</p>
      </div>
      <div className='sidebar__row'>
          <LocalHospital /><p>Covid-19 Information Center</p>

      </div>
      <div className='sidebar__row'>
            <EmojiFlags /><p>Pages</p>

      </div>
      <div className='sidebar__row'>
            <People /><p>Freends</p>

      </div>
      <div className='sidebar__row'>

            <Chat /><p>Messenger</p>
      </div>
      <div className='sidebar__row'>

            <Storefront /><p>Marketplace</p>
      </div>
      <div className='sidebar__row'>

            <VideoLibrary /><p>Videos</p>
      </div>
      <div className='sidebar__row'>

            <ExpandMore />
      </div>



    </div>
  )
}

export default Sidebar