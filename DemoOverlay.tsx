import React, { useEffect, useState } from "react";
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
  const { title } = props;
  const [active, setActive] = useState(false);

  const handleSwitch = () => {
    setActive((prevState) => !prevState);
  };

  useEffect(() => {
    const closeTimeout = setTimeout(() => {
      setActive(false);
    }, 10000);

    return () => {
      clearTimeout(closeTimeout);
    };
  }, [active]);

  return (
    <React.Fragment>
      <div className={`demo-overlay ${active && "demo-overlay-active"}`}>
        <button className="demo-overlay-switch" onClick={handleSwitch}>
          <div className="demo-overlay-switch-icon-container">
            <div className="demo-overlay-switch-icon demo-overlay-open-icon">
              <svg
                height="50%"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
              >
                <path d="m313-440 196 196q12 12 11.5 28T508-188q-12 11-28 11.5T452-188L188-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l264-264q11-11 27.5-11t28.5 11q12 12 12 28.5T508-715L313-520h447q17 0 28.5 11.5T800-480q0 17-11.5 28.5T760-440H313Z" />
              </svg>
            </div>
            <div className="demo-overlay-switch-icon demo-overlay-close-icon">
              <svg
                height="50%"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
              >
                <path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" />
              </svg>
            </div>
          </div>
        </button>
        <div className="demo-overlay-content-container">
          <div className="demo-overlay-content">
            <a href={backButton.url} className="demo-overlay-link">
              <svg
                className="demo-overlay-link-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 122.88 108.06"
              >
                <path d="M63.94,24.28a14.28,14.28,0,0,0-20.36-20L4.1,44.42a14.27,14.27,0,0,0,0,20l38.69,39.35a14.27,14.27,0,0,0,20.35-20L48.06,68.41l60.66-.29a14.27,14.27,0,1,0-.23-28.54l-59.85.28,15.3-15.58Z" />
              </svg>
              <span>{backButton.title}</span>
            </a>
            <span>{title}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
