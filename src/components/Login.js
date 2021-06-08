'strict mode'
import React from 'react';
import {Auth,provider} from './firebase';
import './Login.css'

const Login=()=>{
    const dispatch=useDispatch();

    const signIn =()=>{
        Auth.signInWithPopup(provider)
        .then(({user})=>{
            dispatch(login({
                displayName:user.displayName,
                email:user.email,
                photoUrl:user.photoUrl
            }))
        })
        .catch(error=>alert(error.message))
    }
    return(
        <div className="login">
        <div className="login_container">
        <img src="https://image.similarpng.com/very-thumbnail/2020/12/Gmail-logo-design-on-transparent-background-PNG.png" alt=""/>
        <Button>Login</Button>
        </div>
        </div>
    )
}

export default Login;