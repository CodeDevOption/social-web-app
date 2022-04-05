import React from 'react'
import Story from './Story'
import './StoryReel.css'
import { useStateValue } from './StateProvider';
function StoryReel() {
  
const [{ user },dishpatch] = useStateValue();
  return (
    <div className='stroyreel'>
        <Story  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRJoCe2DZjOKiuU7jKmTxLCVgpYLEwYXKnMhAaSRGADAV9H-17_EbTzXwjypDkvSmpZbs&usqp=CAU"
         prosrc={user.photoURL}
         title={user.displayName} />
          <Story  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYVMfINoIvDIfs0CCIJPmXuaGTenNH6aoMPg&usqp=CAU"
         prosrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FuEJbKwDdaz1h387130xmYkAIQbZpahhbQ&usqp=CAU"
         title="Luzy" />
          <Story  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGjDXld7vUc-9nA0TIT3M7jzNrBNCccErqig&usqp=CAU"
         prosrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
         title="Emaa" />
          <Story  hide="story_hide"  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Wjd-Cak78mooEfHTx64D7xhFtgBMZRFiiQ&usqp=CAU"
         prosrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
         title="Jhone" />
         {/* <Story  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuwXi2pQzG9i_kJS7xBk4e91ELt2WEIuGxQQ&usqp=CAU"
         prosrc="https://lh3.googleusercontent.com/a-/AOh14GjyAX-cCqOQk9AtN1gE3nuANrmgSh3p6xSZOgeV2Q=s96-c-rg-br100"
         title="Lahiru" /> */}

   
    </div>
  )
}

export default StoryReel