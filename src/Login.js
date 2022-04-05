import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { GoogleAuthProvider,signInWithPopup,getAuth } from "firebase/auth";
import { useStateValue } from './StateProvider';
import { actionTypes } from './Reducer';

function Login() {
   
    const [state,dispatch] = useStateValue();
    console.log(state);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const SignIn = () =>{

        signInWithPopup(auth, provider)
          .then((result) => {
          
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });

          }).catch((error) => alert(error.message));
    }




  return (
    <div className='login'>
        <div className="login__logo">
          
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png?20200820101156" alt="Facebook__icon" />
        <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="Facebook__icon" />
        
        </div>
        <Button type="submit" onClick={SignIn}>Sign In</Button>
    </div>
  )
}

export default Login