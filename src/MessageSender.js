import { Avatar } from '@material-ui/core';
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';
import React, { useState } from 'react';
import './MessageSender.css';
import { useStateValue } from './StateProvider';
import db from './firebase';
import {addDoc,collection, serverTimestamp} from 'firebase/firestore';

function MessageSender() {
  const timestamp = serverTimestamp();
  const collectionRef = collection(db,'post');
  const [{ user },dishpatch] = useStateValue();
const name = user.displayName;
const [message , setmessage] = useState('');
const [imgurl , setimgurl] = useState('');
 const handleSubmit = (e)=>{
    e.preventDefault();
    const data = {
      image:imgurl,
      message:message,
      profilePic:user.photoURL,
      timestamp:timestamp,
      username:name,
    };
    addDoc(collectionRef,data);
    setmessage("");
    setimgurl("");
 }
  return (
    <div className='messageSender'>
       <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form >
        <input className='messageSender__input' placeholder={`What's on your mind.${name}`} value={message} onChange={(e)=> setmessage(e.target.value)} />
        <input placeholder='Image URL (Optional)'  value={imgurl} onChange={(e)=> setimgurl(e.target.value)} />
        <button onClick={handleSubmit} type= "submit">Hidden Button</button>
        </form>

       </div>
       <div className="messageSender__bottom">
           <div className="messageSender__Option">

       <Videocam style={{color:"red"}} />
       <h3>Live Video</h3>
           </div>
           <div className="messageSender__Option">
               
       <PhotoLibrary style={{color:"green"}} />
       <h3>Photo/Video</h3>
               </div>
               <div className="messageSender__Option">
               
       <InsertEmoticon style={{color:"yellow"}} />
       <h3>Feeling/Activity</h3>
               </div>
       </div>

       
    </div>
  )
}

export default MessageSender