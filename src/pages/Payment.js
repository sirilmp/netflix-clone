import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import GrayFooter from "../components/GrayFooter";
import WhiteNavBar from "../components/WhiteNavBar";
import db from "../constants/Firebase";
import { selectUser } from "../features/userSlice";
import "./Payment.css";

function Payment() {
  const history = useHistory();

  const [loading, setLoading] = useState(false)

  const user = useSelector(selectUser);

  const plan = localStorage.getItem("Plan");

  let planDetails;

  if (plan === "Mobile") {
    planDetails = (
      <>
        <h5>₹ 199/month</h5>
        <h6>Mobile Plan</h6>
      </>
    );
  } else if (plan === "Basic") {
    planDetails = (
      <>
        <h5>₹ 499/month</h5>
        <h6>Basic Plan</h6>
      </>
    );
  } else if (plan === "Standard") {
    planDetails = (
      <>
        <h5>₹ 649/month</h5>
        <h6>Standard Plan</h6>
      </>
    );
  } else if (plan === "Premium") {
    planDetails = (
      <>
        <h5>₹ 799/month</h5>
        <h6>Premium Plan</h6>
      </>
    );
  }

  const backToPlan = () => {
    history.push("/plan");
  };

  let today = new Date();

  today.setDate(today.getDate() + 30);

  var Ex_date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

  const addPlan = () => {
      setLoading(true)
    db.collection("plan").add({
      uid: user.uid,
      Email: user.email,
      Plan: plan,
      Date_of_Ex: Ex_date,
      Name:user.email
    });
    alert('Plan added successfully')
    setLoading(false)
    history.push('/')
    localStorage.setItem('plan_checker',"1")
  };

  return (
    <div className="payment">
      <WhiteNavBar />
      <div className="container">
        <div className="payment_body">
          <div className="payment_contents">
            <p className="steps">
              STEP<span>3</span>of<span>3</span>
            </p>
            <h3 className="heading">Set up your payment.</h3>
          </div>
          <div className="payment_details">
            <img
              className="lock_img"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Lock.png"
              alt="log_img"
            />
            <div className="plan_details">
              <div className="plan_price">{planDetails}</div>
              <div className="change_btn">
                <h4 onClick={backToPlan}>Change</h4>
              </div>
            </div>
            <div className="membership">
              {loading ? (
                <button className="loading_btn">
                  <img
                    className="loading_animation"
                    src="https://assets.nflxext.com/ffe/siteui/common/site-spinner-240-light.png"
                    alt="loading"
                  />
                </button>
              ) : (
                <button className='membership_add' type="submit" onClick={addPlan}>
                  Start Membership
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <GrayFooter />
    </div>
  );
}

export default Payment;
