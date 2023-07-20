import React, { useState } from 'react';
import * as firebase from 'firebase/app';
import firebaseConfig from '../firebase.config';
import useAuth from '../../Hook_Context/useAuth';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Paper, TextField } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import './Login.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
    const [loggedIn, setLoggedIn] = useAuth();
    const [ user, setUser] = useState({
        email: '',
        password: '',
        error: '',
        success: false
    });
    const [newUser, setNewUser] = useState(false);
    const { handleSubmit, register, formState: { errors } } = useForm();

    firebase.initializeApp(firebaseConfig);
    const auth = getAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleGoogle = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signInUser = {
                    name: displayName,
                    email: email
                }
                setLoggedIn(signInUser);
                navigate(from, { replace: true });

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    const handleBlur = (e) => {
        console.log('lololoololo');
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (e.target.name === 'password') {
            const validPassword = e.target.value.length >= 6;
            const hasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = validPassword && hasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
            console.log('ola');
        }
    }

    const handlePassword = (event) => {
        // console.log(user.email,'lolo', user.password);
        if (newUser && user.email && user.password) {
            try {
                createUserWithEmailAndPassword(auth, user.email, user.password)
                    .then(() => {
                        let addUserInfo = { ...user };
                        addUserInfo.error = '';
                        addUserInfo.success = true;
                        setUser(addUserInfo);
                        setLoggedIn(addUserInfo);
                        navigate(from, { replace: true });

                    })
            } catch (error) {
                let addUserInfo = { ...user };
                addUserInfo.error = error.message;
                addUserInfo.success = false;
                setUser(addUserInfo);
            }
        }
        if (!newUser && user.email && user.password) {
            try {
                signInWithEmailAndPassword(auth, user.email, user.password)
                    .then(() => {
                        let addUserInfo = { ...user };
                        addUserInfo.error = '';
                        setUser(addUserInfo);
                        setLoggedIn(addUserInfo);
                        navigate(from, { replace: true });
                    })
            } catch (error) {
                let addUserInfo = { ...user };
                addUserInfo.error = error.message;
                addUserInfo.success = false;
                setUser(addUserInfo);
            }
        }
        event.preventDefault();

    }
    return (
        <div>
            
            <div className="container">
                <div className="row">
                    <div className="col-md-5 m-auto text-center login-box">
                        <Paper className='login-form' elevation={3}>
                            {
                                newUser
                                ? <h2 className='f-os text-center training-header p-0 mb-4'>Sign <span className='brand-c'>Up</span></h2>
                                : <h2 className='f-os text-center training-header p-0 mb-4'>Sign <span className='brand-c'>In</span></h2>
                            }
                            <form >
                                <TextField
                                    className="form-field"
                                    label="Email"
                                    name='email'
                                    variant="outlined"
                                    onBlur={handleBlur}
                                />
                                <TextField
                                    className="form-field"
                                    type='password'
                                    label="Password"
                                    name='password'
                                    variant="outlined"
                                    onBlur={handleBlur}
                                />

                                <input onChange={() => setNewUser(!newUser)} class="form-check-input" type="checkbox" name="" />
                                <label className='ms-3 f-ro' htmlFor=""><h6>create Account</h6></label>


                                <button onClick={handlePassword} className="brand-btn d-block m-auto ps-5 pe-5 mb-4 mt-4">Submit</button>
                                {
                                    user.error && <p style={{color: 'red'}}>{user.error} helooo error</p>
                                }
                                {
                                    user.success && <p className="brand-c">Account {newUser? 'Created' : 'Signed In'} Successfully!</p>
                                }
                            </form>

                            <button onClick={handleGoogle} className='f-ro google-btn'><FcGoogle className='me-2 google-icon' />Google</button>
                        </Paper>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Login;