import React from 'react';
import './App.css';
import Header from './Header';
import db from './firebase';
 import {collection} from 'firebase/firestore';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { useStateValue } from './StateProvider';
import Login from './Login';


function App() {
  const collectionRef = collection(db,'social-app');
  const [{ user },dispatch] = useStateValue();
  console.log(user);


  return (

    <div className="app">
    {!user ? (<Login />):(

      <>
        {/* header */}
        <Header />
        {/* app-body */}
        <div className="app__body">

        {/* left Bar */}
        <Sidebar />
        {/* Feeds */}
        <Feed />
        {/* Right Bar */}
        <Widgets />
        
        </div>
        </>
    )}


</div>
  );
}

export default App;
