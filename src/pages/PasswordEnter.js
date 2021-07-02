import React, { useRef, useState } from "react";
import "./PasswordEnter.css";
import { useHistory } from "react-router-dom";
import GrayFooter from "../components/GrayFooter";
import WhiteNavBar from "../components/WhiteNavBar";
import { auth } from "../constants/Firebase";

function PasswordEnter() {
  const history = useHistory();

  const emailAddress = localStorage.getItem("get_start_email");

  const passwordRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const [checkPassword, setCheckPassword] = useState("");

  const passwordChecking = (e) => {
    e.preventDefault();
    if (!passwordRef.current.value) {
      setCheckPassword("Password is required !");
    } else if (
      passwordRef.current.value.length < 6 ||
      passwordRef.current.value.length > 20
    ) {
      setCheckPassword(
        "Your password must contain between 6 and 20 characters. !"
      );
    } else {
      setCheckPassword("");
    }
  };

  const creatingAccount = (e) => {
    e.preventDefault();
    if (!passwordRef.current.value) {
      setCheckPassword("Password is required !");
    }
    setLoading(true)
    auth
      .createUserWithEmailAndPassword(emailAddress, passwordRef.current.value)
      .then((authUser) => {
        history.push("/plan");
      })
      .catch((error) => {
        setLoading(false)
        alert(error.message);
      });
      
  };

  return (
    <div className="password_enter">
      <WhiteNavBar />
      <div className="password_enter_body">
        <div className="password_enter_items">
          <h4 className="email_address">
            {" "}
            hai 👋 <span>{emailAddress}</span>
          </h4>
          <p className="steps">
            STEP<span>1</span>of<span>3</span>
          </p>
          <h3 className="heading">
            Create a password to start your membership.
          </h3>
          <h5 className="para">
            Just a few more steps and you're done! We hate paperwork, too.
          </h5>
          <form>
            <input
              className={`${checkPassword && "wanning_border"}`}
              type="password"
              placeholder="Add a password"
              ref={passwordRef}
              onChange={passwordChecking}
            />
            <p>{checkPassword}</p>

            {loading ? (
              <button className="loading_btn">
                <img
                  className="sign_up_loading_animation"
                  src="https://assets.nflxext.com/ffe/siteui/common/site-spinner-240-light.png"
                  alt="loading"
                />
              </button>
            ) : (
              <button
                type="submit"
                className="continue_btn"
                onClick={creatingAccount}
              >
                Continue
              </button>
            )}
          </form>
        </div>
      </div>
      <GrayFooter />
    </div>
  );
}

export default PasswordEnter;
