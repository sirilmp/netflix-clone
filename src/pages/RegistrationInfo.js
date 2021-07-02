import React from "react";
import './RegistrationInfo.css'
import GrayFooter from "../components/GrayFooter";
import WhiteNavBar from "../components/WhiteNavBar";
import { useHistory } from "react-router-dom";

function RegistrationInfo() {

    const history=useHistory()

  return (
    <div className="reg_info">
      <WhiteNavBar />
      <div className="reg_info_body">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png"
          alt="devices"
          className="img"
        />
        <p className='steps'>
          STEP<span>1</span>of<span>2</span>
        </p>
        <h3 className='heading'>Finish setting up your account.</h3>
        <h5 className='para'>Netflix is personalised for you. Create a password to watch Netflix on any device at any time.</h5>
        <button className='continue_btn' onClick={()=>{
            history.push('/signup/password')
        }}>Continue</button>
      </div>
      <GrayFooter />
    </div>
  );
}

export default RegistrationInfo;
