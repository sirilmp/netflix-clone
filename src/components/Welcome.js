import React, { useRef, useState } from "react";
import "./Welcome.css";
import { useHistory } from "react-router-dom";
import { auth } from "../constants/Firebase";

function Welcome({ user }) {

  const [emailCheck, setEmailCheck] = useState('')
  const [border, setBorder] = useState(false)
  const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  const history = useHistory()

  const emailRef = useRef(null);

  const sign_in_btn = () => {
    history.push('/signin')
  }
  const sign_out_btn = () => {
    auth.signOut()
    history.push('/')
    localStorage.clear()
  }

  const emailChecking = () => {
    if (!emailRef.current.value) {
      setEmailCheck("Email address required !")
      setBorder(true)
    }
    else if (!pattern.test(emailRef.current.value)) {
      setEmailCheck("Invalid email address !")
      setBorder(true)
    }
    else {
      setEmailCheck('')
      setBorder(false)
    }
  }

  const getStart = (e) => {
    e.preventDefault()
    if (!emailRef.current.value) {

      return setEmailCheck("Email address required !"),
        setBorder(true)
    }
    else if (!pattern.test(emailRef.current.value)) {

      return setEmailCheck("Invalid email address !"),
        setBorder(true)
    }

    localStorage.setItem("get_start_email", emailRef.current.value)
    history.push('/signup/registration')
  }

  const selectPlan = () => {
    history.push('/plan')
  }


  return (
    <div className="welcome">
      <div className="welcome_background">
        <div className="welcome_gradient">
          <div className="nav_bar">
            <img src="./images/netflix.png" alt="logo" className="logo_img" />
            {!user ?
              <button className="sign_in_btn" onClick={sign_in_btn}>Sign In</button>
              : <button className="sign_in_btn" onClick={sign_out_btn} >Sign Out</button>
            }
          </div>
          <div className="welcome_text">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h5>Watch anywhere. Cancel anytime.</h5>
            <h6>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h6>
          </div>


          <div className={`input_field ${border && "wanning_border"}`}>

            {!user ?
              <>
                <input className="email_input" type="email" placeholder='Email address' ref={emailRef} onChange={emailChecking} />

                <button type='submit' className="get_started" onClick={getStart} >Get Started <img src='./images/right_arrow.svg' alt='loading_img' /></button>
              </>
              : <button className="select_plan_btn" onClick={selectPlan}>Select a Plan</button>
            }
          </div>


          <p className='wanning_text'>{emailCheck}</p>
        </div>

      </div>
    </div>
  );
}

export default Welcome;
