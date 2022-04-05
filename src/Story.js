import { Avatar } from '@material-ui/core'
import React from 'react'
import './Story.css'

function Story({image,prosrc,title,hide}) {
  return (
    <div style={{backgroundImage: `url(${image})`}} className={`story ${hide}`}>
        <Avatar className="story__avatar" src={prosrc}/>
        <h4>{title}</h4>

    </div>
  )
}

export default Story