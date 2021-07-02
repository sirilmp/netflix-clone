import React, { useEffect } from "react";
import WhiteNavBar from "../components/WhiteNavBar";
import GrayFooter from "../components/GrayFooter";
import "./Plan.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Plan() {
  const [plan, setPlan] = useState("Basic");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // useEffect(() => {
  // db.collection('plan').onSnapshot(snapshot=>(
  //   setUserPlanDetails(snapshot.docs.map(doc=>(
  //     {
  //       id:doc.id,
  //       data:doc.data()
  //     }
  //   )))
  // ))
  // }, [])

  // console.log(user.uid);

  // console.log(Ex_date);

  const mobilePlan = () => {
    setPlan("Mobile");
  };
  const basicPlan = () => {
    setPlan("Basic");
  };
  const standardPlan = () => {
    setPlan("Standard");
  };
  const premiumPlan = () => {
    setPlan("Premium");
  };

  const addPayment = (e) => {
    e.preventDefault();
    if (plan === "") {
      alert("Please Select a plan !");
    } else {
    localStorage.setItem('Plan',plan)
      setLoading(true);
      history.push("/payment");
      setLoading(false);
    }
  };

  return (
    <div className="plan">
      <WhiteNavBar />
      <div className="container">
        <div className="plan_body">
          <div className="plan_contents">
            <p className="steps">
              STEP<span>2</span>of<span>3</span>
            </p>
            <h3 className="heading">
              Choose a plan. You can always change or cancel.
            </h3>
          </div>
          <div className="plans">
            <div className="plans_items">
              <div className="row mx-auto">
                <div className="col-lg-3 col-xl-3 col-md-4 col-sm-6 col-6">
                  <div
                    className={`plans_item ${
                      plan === "Mobile" && "plan_selected"
                    } mx-auto`}
                    onClick={mobilePlan}
                  >
                    <div className="plans_header">
                      <h2>Mobile</h2>
                    </div>
                    <div className="plans_details">
                      <h4>Monthly price</h4>
                      <h5>₹ 199</h5>
                      <h4>Video quality</h4>
                      <h5>Good</h5>
                      <h4>Resolution</h4>
                      <h5>480p</h5>
                      <h4>Devices you can use to watch</h4>
                      <div className="device_icons">
                        <div className="devices">
                          <svg
                            viewBox="0 0 26 26"
                            class="devices_icon"
                            focusable="false"
                          >
                            <path d="M18,22.0233 L18,4.0003 L8,4.0003 L8,22.0233 L18,22.0233 Z M6,22.9683 L6,3.0543 C6,2.46041082 6.48370624,2.0003 7.057,2.0003 L18.943,2.0003 C19.5162938,2.0003 20,2.46041082 20,3.0543 L20,22.9683 C20,23.5564915 19.5215213,24.0233 18.943,24.0233 L7.057,24.0233 C6.4784787,24.0233 6,23.5564915 6,22.9683 Z M13,18.023 C13.553,18.023 14,18.471 14,19.023 C14,19.575 13.553,20.023 13,20.023 C12.447,20.023 12,19.575 12,19.023 C12,18.471 12.447,18.023 13,18.023 Z"></path>
                          </svg>
                          <span>Phone</span>
                        </div>
                        <div className="devices">
                          <svg
                            viewBox="0 0 26 26"
                            class="devices_icon"
                            focusable="false"
                          >
                            <path d="M22.0003,19 L22.0003,7 L4.0003,7 L4.0003,19 L22.0003,19 Z M21,13 C21,13.552 20.553,14 20,14 C19.447,14 19,13.552 19,13 C19,12.448 19.447,12 20,12 C20.553,12 21,12.448 21,13 Z M22.9453,21 L3.0543,21 C2.46343187,21 2.0003,20.5190554 2.0003,19.944 L2.0003,6.056 C2.0003,5.48094463 2.46343187,5 3.0543,5 L22.9453,5 C23.5305389,5 24.0003,5.47563312 24.0003,6.056 L24.0003,19.944 C24.0003,20.5243669 23.5305389,21 22.9453,21 Z"></path>
                          </svg>
                          <span>Tab</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-xl-3 col-md-4 col-sm-6 col-6">
                  <div
                    className={`plans_item ${
                      plan === "Basic" && "plan_selected"
                    } mx-auto`}
                    onClick={basicPlan}
                  >
                    <div className="plans_header">
                      <h2>Basic</h2>
                    </div>
                    <div className="plans_details">
                      <h4>Monthly price</h4>
                      <h5>₹ 499</h5>
                      <h4>Video quality</h4>
                      <h5>Good</h5>
                      <h4>Resolution</h4>
                      <h5>480p</h5>
                      <h4>Devices you can use to watch</h4>
                      <div className="device_icons">
                        <div className="devices">
                          <svg
                            viewBox="0 0 26 26"
                            class="devices_icon"
                            focusable="false"
                          >
                            <path d="M18,22.0233 L18,4.0003 L8,4.0003 L8,22.0233 L18,22.0233 Z M6,22.9683 L6,3.0543 C6,2.46041082 6.48370624,2.0003 7.057,2.0003 L18.943,2.0003 C19.5162938,2.0003 20,2.46041082 20,3.0543 L20,22.9683 C20,23.5564915 19.5215213,24.0233 18.943,24.0233 L7.057,24.0233 C6.4784787,24.0233 6,23.5564915 6,22.9683 Z M13,18.023 C13.553,18.023 14,18.471 14,19.023 C14,19.575 13.553,20.023 13,20.023 C12.447,20.023 12,19.575 12,19.023 C12,18.471 12.447,18.023 13,18.023 Z"></path>
                          </svg>
                          <span>Phone</span>
                        </div>
                        <div className="devices">
                          <svg
                            viewBox="0 0 26 26"
                            class="devices_icon"
                            focusable="false"
                          >
                            <path d="M22.0003,19 L22.0003,7 L4.0003,7 L4.0003,19 L22.0003,19 Z M21,13 C21,13.552 20.553,14 20,14 C19.447,14 19,13.552 19,13 C19,12.448 19.447,12 20,12 C20.553,12 21,12.448 21,13 Z M22.9453,21 L3.0543,21 C2.46343187,21 2.0003,20.5190554 2.0003,19.944 L2.0003,6.056 C2.0003,5.48094463 2.46343187,5 3.0543,5 L22.9453,5 C23.5305389,5 24.0003,5.47563312 24.0003,6.056 L24.0003,19.944 C24.0003,20.5243669 23.5305389,21 22.9453,21 Z"></path>
                          </svg>
                          <span>Tab</span>
                        </div>
                        <div className="devices">
                          <svg
                            viewBox="0 0 26 26"
                            class="devices_icon"
                            focusable="false"
                          >
                            <path d="M6,7 L6,15 L20,15 L20,7 L6,7 Z M4,5 L22,5 L22,17 L4,17 L4,5 Z M2,19 L24,19 L24,21 L2,21 L2,19 Z"></path>
                          </svg>
                          <span>Computer</span>
                        </div>
                        <div className="devices">
                          <svg
                            viewBox="0 0 26 26"
                            class="devices_icon"
                            focusable="false"
                          >
                            <path d="M9,20 L17,20 L17,22 L9,22 L9,20 Z M4,6 L4,16 L22,16 L22,6 L4,6 Z M2,4 L24,4 L24,18 L2,18 L2,4 Z"></path>
                          </svg>
                          <span>Tv</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-xl-3 col-md-4 col-sm-6 col-6">
                  <div
                    className={`plans_item ${
                      plan === "Standard" && "plan_selected"
                    } mx-auto`}
                    onClick={standardPlan}
                  >
                    <div className="plans_header">
                      <h2>Standard</h2>
                    </div>
                    <div className="plans_details">
                      <h4>Monthly price</h4>
                      <h5>₹ 649</h5>
                      <h4>Video quality</h4>
                      <h5>Better</h5>
                      <h4>Resolution</h4>
                      <h5>1080p</h5>
                      <h4>Devices you can use to watch</h4>
                      <div className="device_icons">
                        <div className="devices">
                          <svg
                            viewBox="0 0 26 26"
                            class="devices_icon"
                            focusable="false"
                          >
                            <path d="M18,22.0233 L18,4.0003 L8,4.0003 L8,22.0233 L18,22.0233 Z M6,22.9683 L6,3.0543 C6,2.46041082 6.48370624,2.0003 7.057,2.0003 L18.943,2.0003 C19.5162938,2.0003 20,2.46041082 20,3.0543 L20,22.9683 C20,23.5564915 19.5215213,24.0233 18.943,24.0233 L7.057,24.0233 C6.4784787,24.0233 6,23.5564915 6,22.9683 Z M13,18.023 C13.553,18.023 14,18.471 14,19.023 C14,19.575 13.553,20.023 13,20.023 C12.447,20.023 12,19.575 12,19.023 C12,18.471 12.447,18.023 13,18.023 Z"></path>
                          </svg>
                          <span>Phone</span>
                        </div>
                        <div className="devices">
                          <svg
                            viewBox="0 0 26 26"
                            class="devices_icon"
                            focusable="false"
                          >
                            <path d="M22.0003,19 L22.0003,7 L4.0003,7 L4.0003,19 L22.0003,19 Z M21,13 C21,13.552 20.553,14 20,14 C19.447,14 19,13.552 19,13 C19,12.448 19.447,12 20,12 C20.553,12 21,12.448 21,13 Z M22.9453,21 L3.0543,21 C2.46343187,21 2.0003,20.5190554 2.0003,19.944 L2.0003,6.056 C2.0003,5.48094463 2.46343187,5 3.0543,5 L22.9453,5 C23.5305389,5 24.0003,5.47563312 24.0003,6.056 L24.0003,19.944 C24.0003,20.5243669 23.5305389,21 22.9453,21 Z"></path>
                          </svg>
                          <span>Tab</span>
                        </div>
                        <div className="devices">
                          <svg
                            viewBox="0 0 26 26"
                            class="devices_icon"
                            focusable="false"
                          >
                            <path d="M6,7 L6,15 L20,15 L20,7 L6,7 Z M4,5 L22,5 L22,17 L4,17 L4,5 Z M2,19 L24,19 L24,21 L2,21 L2,19 Z"></path>
                          </svg>
                          <span>Computer</span>
                        </div>
                        <div className="devices">
                          <svg
                            viewBox="0 0 26 26"
                            class="devices_icon"
                            focusable="false"
                          >
                            <path d="M9,20 L17,20 L17,22 L9,22 L9,20 Z M4,6 L4,16 L22,16 L22,6 L4,6 Z M2,4 L24,4 L24,18 L2,18 L2,4 Z"></path>
                          </svg>
                          <span>Tv</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-xl-3 col-md-4 col-sm-6 col-6">
                  <div
                    className={`plans_item ${
                      plan === "Premium" && "plan_selected"
                    } mx-auto`}
                    onClick={premiumPlan}
                  >
                    <div className="plans_header">
                      <h2>Premium</h2>
                    </div>
                    <div className="plans_details">
                      <h4>Monthly price</h4>
                      <h5>₹ 799</h5>
                      <h4>Video quality</h4>
                      <h5>Best</h5>
                      <h4>Resolution</h4>
                      <h5>4K+HDR</h5>
                      <h4>Devices you can use to watch</h4>
                      <div className="device_icons">
                        <div className="devices">
                          <svg
                            viewBox="0 0 26 26"
                            class="devices_icon"
                            focusable="false"
                          >
                            <path d="M18,22.0233 L18,4.0003 L8,4.0003 L8,22.0233 L18,22.0233 Z M6,22.9683 L6,3.0543 C6,2.46041082 6.48370624,2.0003 7.057,2.0003 L18.943,2.0003 C19.5162938,2.0003 20,2.46041082 20,3.0543 L20,22.9683 C20,23.5564915 19.5215213,24.0233 18.943,24.0233 L7.057,24.0233 C6.4784787,24.0233 6,23.5564915 6,22.9683 Z M13,18.023 C13.553,18.023 14,18.471 14,19.023 C14,19.575 13.553,20.023 13,20.023 C12.447,20.023 12,19.575 12,19.023 C12,18.471 12.447,18.023 13,18.023 Z"></path>
                          </svg>
                          <span>Phone</span>
                        </div>
                        <div className="devices">
                          <svg
                            viewBox="0 0 26 26"
                            class="devices_icon"
                            focusable="false"
                          >
                            <path d="M22.0003,19 L22.0003,7 L4.0003,7 L4.0003,19 L22.0003,19 Z M21,13 C21,13.552 20.553,14 20,14 C19.447,14 19,13.552 19,13 C19,12.448 19.447,12 20,12 C20.553,12 21,12.448 21,13 Z M22.9453,21 L3.0543,21 C2.46343187,21 2.0003,20.5190554 2.0003,19.944 L2.0003,6.056 C2.0003,5.48094463 2.46343187,5 3.0543,5 L22.9453,5 C23.5305389,5 24.0003,5.47563312 24.0003,6.056 L24.0003,19.944 C24.0003,20.5243669 23.5305389,21 22.9453,21 Z"></path>
                          </svg>
                          <span>Tab</span>
                        </div>
                        <div className="devices">
                          <svg
                            viewBox="0 0 26 26"
                            class="devices_icon"
                            focusable="false"
                          >
                            <path d="M6,7 L6,15 L20,15 L20,7 L6,7 Z M4,5 L22,5 L22,17 L4,17 L4,5 Z M2,19 L24,19 L24,21 L2,21 L2,19 Z"></path>
                          </svg>
                          <span>Computer</span>
                        </div>
                        <div className="devices">
                          <svg
                            viewBox="0 0 26 26"
                            class="devices_icon"
                            focusable="false"
                          >
                            <path d="M9,20 L17,20 L17,22 L9,22 L9,20 Z M4,6 L4,16 L22,16 L22,6 L4,6 Z M2,4 L24,4 L24,18 L2,18 L2,4 Z"></path>
                          </svg>
                          <span>Tv</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="plan_contents info_texts">
            <h5 className="info_text">
              HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
              subject to your internet service and device capabilities. Not all
              content is available in all resolutions. See our Terms of Use for
              more details.
            </h5>
            <h5 className="info_text">
              {" "}
              Only people who live with you may use your account. Watch on 4
              different devices at the same time with Premium, 2 with Standard,
              and 1 with Basic and Mobile.
            </h5>
          </div>
          <div className="conform_btn">
            {loading ? (
              <button className="loading_btn">
                <img
                  className="loading_animation"
                  src="https://assets.nflxext.com/ffe/siteui/common/site-spinner-240-light.png"
                  alt="loading"
                />
              </button>
            ) : (
              <button
                className="continue_btn"
                type="submit"
                onClick={addPayment}
              >
                Continue
              </button>
            )}
          </div>
        </div>
        {/* 
{
  userPlanDetails.map(({data:{Date_of_Ex,Email,Plan,uid}})=>(
    user.uid===uid ? <h1>{Email}</h1>:null
  ))
} */}
      </div>
      <GrayFooter />
    </div>
  );
}

export default Plan;

//gZ4AhKPmo5gMPTXDYDbZTdo0Zki1
