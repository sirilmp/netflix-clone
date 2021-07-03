import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { auth } from '../constants/Firebase';
import { selectUser } from '../features/userSlice';
import './WhiteNavBar.css'

function WhiteNavBar() {

    const user = useSelector(selectUser);

    const history = useHistory()

    const backToHome = () => {
        localStorage.removeItem('get_start_email')
        history.push('/')
    }
    const signIn=()=>{
        localStorage.removeItem('get_start_email')
        history.push('/signin')
    }
    const signOut=()=>{
        auth.signOut()
        history.push('/')
        localStorage.clear()
    }
    return (
        <div className='white_nav_bar'>
            <img src="../images/netflix.png" alt="logo" className="logo_img" onClick={backToHome} />
            {!user ?
                <button className="sign_in_btn" onClick={signIn} >Sign In</button>:<button className="sign_in_btn" onClick={signOut}>Sign Out</button>}
        </div>
    )
}

export default WhiteNavBar
