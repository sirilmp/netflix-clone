import React from "react";
import "./StoryWatch.css";

function StoryWatch() {
  return (
    <div className="story_watch">
      <div className="row story_watch_section">
        <div className=" col-lg-6 col-md-12 col-sm-12 story_watch_text">
          <h1>Watch everywhere.</h1>
          <h4>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </h4>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 story_watch_play">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
            alt="story card"
          />
          <video autoPlay playsInline muted loop>
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}

export default StoryWatch;
