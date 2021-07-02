import React from "react";
import "./StoryEnjoy.css";

function StoryEnjoy() {
  return (
    <div className="story_enjoy">
      <div className="row story_enjoy_section">
        <div className=" col-lg-6 col-md-12 col-sm-12 story_enjoy_text">
          <h1>Enjoy on your TV.</h1>
          <h4>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </h4>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 story_enjoy_play">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt="story card"
          />
          <video autoPlay playsInline muted loop>
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}

export default StoryEnjoy;
