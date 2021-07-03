import React from "react";
import "./StoryDownload.css";

function StoryDownload() {
  return (
    <div className="story_download">
      <div className="row story_download_section">
        <div className=" col-lg-6 col-md-0 col-sm-12 story_download_text">
          <h1>Download your shows to watch offline.</h1>
          <h4>
            Save your favourites easily and always have something to watch.
          </h4>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 story_download_img">
          <img
            alt="story_image"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          />

          <div className="story_download_animation">
            <img
              alt="movie banner"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
            />
            <div className="story_download_animation_text">
              <h4>Stranger Things</h4>
              <p>Downloading...</p>
            </div>
            <img
              className="story_download_gif"
              alt="story_image"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoryDownload;
