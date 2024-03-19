import React, { useState } from 'react'
import './Login.css'
import icon from '../assets/icon.png'
import { auth } from '../Firebase/firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
const Login = () => {
    const [name, setName] = useState("");
    const [profileUrl, setProfileUrl] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const register = () => {

        if (!name)
            return alert('Please enter a full name');

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user
                    .updateProfile({
                        displayName: name,
                        photoURL: profileUrl,
                    })
                    .then(() => {
                        dispatch(
                            login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: userAuth.user.displayName,
                                photoURL: userAuth.user.profileURL,
                            }))
                    })
            })
            .catch((error) => alert(error));
    }
    const loginToApp = (e) => {
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email,password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.profileUrl,
            }))
        })
        .catch(error => alert(error));
    }
    return (
        <div className='login'>
            <img src={icon} alt='' />

            <form>
                <input value={name} placeholder='Full name (required if registering)' type="text" onChange={(e) => setName(e.target.value)} />
                <input value={profileUrl} placeholder='Profile pic URL (optional)' type="text" onChange={(e) => setProfileUrl(e.target.value)} />
                <input value={email} placeholder='Email' type="email" onChange={(e) => setEmail(e.target.value)} />
                <input value={password} placeholder='Password' type="password" onChange={(e) => setPassword(e.target.value)} />
                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>
            <p> Not a member?
                <span className='login__register' onClick={register}> Register Now</span>
            </p>
        </div>
    )
}

export default Login;