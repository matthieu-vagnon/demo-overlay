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
              <path d="M534-306 376-464q-3-3-5-7.06-2-4.07-2-8.94 0-4.88 2-8.94t5-7.06l158-158q2-2 4.76-3.5 2.77-1.5 5.92-1.5 6.32 0 10.82 4.12 4.5 4.13 4.5 10.88v328q0 6.75-4.64 10.87-4.63 4.13-10.81 4.13-1.55 0-10.55-5Z" />
            </svg>
            <span>{backButton.title}</span>
          </a>
        </div>
        <span className="title">{title}</span>
      </div>
    </React.Fragment>
  );
}
