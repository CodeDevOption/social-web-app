import React, { useEffect, useState } from 'react'
import StoryReel from './StoryReel'
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import { useStateValue } from './StateProvider';
import db from './firebase';
import {onSnapshot,orderBy, query,collection} from 'firebase/firestore';

function Feed() {

  const [{ user },dishpatch] = useStateValue();
  const [post, setpost] = useState([]);
  const collectionRef = collection(db,'post');
  const q = query(collectionRef,orderBy('timestamp','desc'));

  useEffect(()=>{

        onSnapshot(q,(snapshot) => {
         
         setpost(snapshot.docs.map(doc => ({id:doc.id, data:doc.data() }))); 
        
        })
  },[]);

  
  return (
    <div className='feed'>
       { /* Story Reel */}
        <StoryReel />
        {/* Message Sender */}
        <MessageSender />
        {/* Post */}
        {/* <Post propic={user.photoURL}
        image="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
        username={user.displayName}
        timestamp="TimeStamp.."
        message="Hey What's Up Guys"
        image
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRJoCe2DZjOKiuU7jKmTxLCVgpYLEwYXKnMhAaSRGADAV9H-17_EbTzXwjypDkvSmpZbs&usqp=CAU"
(string)
message
"addDoc"
profilePic
"https://lh3.googleusercontent.com/a-/AOh14GjyAX-cCqOQk9AtN1gE3nuANrmgSh3p6xSZOgeV2Q=s96-c"
timestamp
April 4, 2022 at 3:36:04 AM UTC-7
username
         /> */}
 
         {
           post.map((post) =>( 
            <Post propic={post.data.profilePic}
            image={post.data.image}
            username={post.data.username}
            timestamp={post.data.timestamp}
            message={post.data.message}
           />
            //  console.log(post.data.timestamp)
              ))}
    </div>
  )
}

export default Feed