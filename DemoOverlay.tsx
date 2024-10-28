import React from "react";
import "./DemoOverlay.css";

// Author: M. Vagnon

// #region Configuration
const backButton = {
  title: "mvagnon.dev",
  url: "https://www.mvagnon.dev",
};
// #endregion

interface DemoOverlayProps {
  title: string;
}
export default function DemoOverlay(props: DemoOverlayProps) {
  const { title, ...other } = props;

  return (
    <React.Fragment>
      <div className="demo-overlay-container" {...other}>
        <div className="back-button-container">
          <a href={backButton.url} className="back-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M526-314 381-459q-5-5-7-10t-2-11q0-6 2-11t7-10l145-145q3-3 6.5-4.5t7.5-1.5q8 0 14 5.5t6 14.5v304q0 9-6 14.5t-14 5.5q-2 0-14-6Z" />
            </svg>
            <span>{backButton.title}</span>
          </a>
        </div>
        <span className="title">{title}</span>
      </div>
    </React.Fragment>
  );
}
