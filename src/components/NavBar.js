import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../constants/Firebase";
import "./NavBar.css";

function NavBar() {
  const history = useHistory();

  const [navBarBlack, showNavBarBlack] = useState(false);
  const [signOut, setSignOut] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      showNavBarBlack(true);
    } else {
      showNavBarBlack(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div className="main_nav_bar">
      <div className={`nav_bar ${navBarBlack && "nav_bar_black"}`}>
        <div className="nav_bar_items">
          <img
            onClick={() => history.push("/")}
            className="nav_bar_logo"
            src="./images/netflix.png"
            alt="logo"
          />
          <img
            onClick={() => {
              setSignOut(!signOut);
            }}
            className="nav_bar_avatar"
            src="https://image.flaticon.com/icons/png/128/236/236831.png"
            alt="avatar"
          />
        </div>
        <div className="sign_out_home">
         {
           signOut? <h3 onClick={()=>{
            auth.signOut()
        history.push('/')
        localStorage.clear()
           }}>Sign Out</h3>:null
         }
        </div>
      </div>
    </div>
  );
}

export default NavBar;
