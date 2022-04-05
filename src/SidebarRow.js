import { Avatar } from '@material-ui/core'
import React from 'react'

function SidebarRow({src,title}) {
  return (
    <div className='sidebar__row'>
     {src && <Avatar src={src} />}
     {/* {Icon && <Icon />} */}
      <p>{title}</p> 
    </div>
  )
}

export default SidebarRow