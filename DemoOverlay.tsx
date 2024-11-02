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
      <div className={`demo-overlay ${active && "active"}`}>
        <button className="back-button" onClick={handleSwitch}>
          <div className="overflow-hidden">
            <div className="back-button-icon back-button-open">
              <img
                height="25%"
                width="25%"
                src={`${backButton.url}/logo-mono-white.svg`}
                alt="Portfolio logo"
              />
            </div>
            <div className="back-button-icon back-button-close">
              <svg
                height="50%"
                width="50%"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
              >
                <path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" />
              </svg>
            </div>
          </div>
        </button>
        <div className="active-content">
          <div className="menu-container">
            <a href={backButton.url} className="back-link">
              <svg
                className="back-arrow-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 122.88 108.06"
              >
                <path d="M63.94,24.28a14.28,14.28,0,0,0-20.36-20L4.1,44.42a14.27,14.27,0,0,0,0,20l38.69,39.35a14.27,14.27,0,0,0,20.35-20L48.06,68.41l60.66-.29a14.27,14.27,0,1,0-.23-28.54l-59.85.28,15.3-15.58Z" />
              </svg>
              <span>{backButton.title}</span>
            </a>
            <span className="title">{title}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
