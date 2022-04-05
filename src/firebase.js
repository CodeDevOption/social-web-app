import {initializeApp} from 'firebase/app';
import  {getFirestore} from 'firebase/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSteK9C-zist-hhkIJElvK3tTgcCghMSo",
  authDomain: "social-web-app-24c3c.firebaseapp.com",
  projectId: "social-web-app-24c3c",
  storageBucket: "social-web-app-24c3c.appspot.com",
  messagingSenderId: "240154240454",
  appId: "1:240154240454:web:d3350562aac229a801bec7",
  measurementId: "G-EY5VGGR6W9"
};
  const App =initializeApp(firebaseConfig);
  const db = getFirestore(App);
  export default db 