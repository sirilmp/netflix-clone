import React, { useRef, useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import db, { auth } from '../constants/Firebase';
import { selectUser } from '../features/userSlice';
import './SignIn.css'

function SignIn() {

    const [loading, setLoading] = useState(false)
    const [checkEmail, setCheckEmail] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    const [userPlanDetails, setUserPlanDetails] = useState([])
    const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const history = useHistory()
    const user = useSelector(selectUser);





    const backToHome = () => {

        history.push('/')
    }


    useEffect(() => {
        db.collection("plan").onSnapshot((snapshot) =>
            setUserPlanDetails(snapshot.docs.map((doc) => doc.data()))
        );

    }, []);


    const register = (e) => {
        // auth
        //     .createUserWithEmailAndPassword(
        //         emailRef.current.value,
        //         passwordRef.current.value
        //     )
        //     .then((authUser) => {
        //         console.log(authUser);
        //     })
        //     .catch((error) => {
        //         alert(error.message);
        //     });
        history.push('/')
    };


    const checkingEmail = (e) => {
        e.preventDefault()
        if (!emailRef.current.value) {
            setCheckEmail('Email is required !')
        }
        else if (!pattern.test(emailRef.current.value)) {
            setCheckEmail("Invalid email address !")
        }
        else {
            setCheckEmail('')
        }
        // console.log(checkEmail);
        // console.log(emailRef.current.value);
    }


    const checkingPassword = (e) => {
        e.preventDefault()
        if (!passwordRef.current.value) {
            setCheckPassword('Password is required !')
        }
        else if (passwordRef.current.value.length < 6 || passwordRef.current.value.length > 20) {
            setCheckPassword("Your password must contain between 6 and 20 characters. !")
        }
        else {
            setCheckPassword('')
        }
        // console.log(checkEmail);
        // console.log(emailRef.current.value);
    }


    const signIn = (e) => {
        e.preventDefault()
        if (!emailRef.current.value) {
            setCheckEmail('Email is required !')
        }

        if (!passwordRef.current.value) {
            setCheckPassword('Password is required!')
        }
        setLoading(true)
        auth
            .signInWithEmailAndPassword(
                emailRef.current.value,
                passwordRef.current.value
            )
            .then((authUser) => {

                setLoading(true)

                userPlanDetails.map((planData) => {
                    if (user.uid===planData.uid) {
                        console.log('true');
                        console.log(planData.uid,user.uid);
                        history.push('/')
                    }
                    else {
                        console.log("false");
                        console.log(planData.uid,user.uid);
                        history.push('/plan')
                    }
                })

                
                setLoading(false)
            })

            .catch((error) => {
                setLoading(false);
                alert(error)
            });


    };

    return (
        <div className='sign_in'>
            <div className="sign_in_background">
                <div className="sign_in_gradient">
                    <div className="sign_in_nav_bar">
                        <img src="./images/netflix.png" alt="logo" className="logo_img" onClick={backToHome} />
                    </div>
                    <div className="sign_in_body">
                        <h1>Sign In</h1>
                        <form>
                            <input className={`${checkEmail && "wanning_border"}`} ref={emailRef} type="text" placeholder="Email Id" onChange={checkingEmail} />
                            <p className="wanning_text" >{checkEmail}</p>
                            <input className={`${checkPassword && "wanning_border"}`} ref={passwordRef} type="password" placeholder="Password" onChange={checkingPassword} />
                            <p className="wanning_text" >{checkPassword}</p>
                            {
                                loading ? <button className='loading_btn'><img className='sign_in_loading_animation' src='https://assets.nflxext.com/ffe/siteui/common/site-spinner-240-light.png' alt='loading' /></button> : <button type="submit" onClick={signIn}>Submit</button>
                            }
                            <h4>
                                New to Netflix? <span onClick={register}>Sign up now.</span>
                            </h4>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
