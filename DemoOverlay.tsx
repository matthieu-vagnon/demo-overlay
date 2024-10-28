import React, { useEffect, useState } from "react";
import "./DemoOverlay.css";

// Author: M. Vagnon

// #region Configuration
const backButton = {
  title: "Portfolio",
  url: "https://www.mvagnon.dev",
};
// #endregion

interface DemoOverlayProps {
  title: string;
}
export default function DemoOverlay(props: DemoOverlayProps) {
  const { title, ...other } = props;
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
      <div
        className={`demo-overlay-container ${active && "active"}`}
        {...other}
      >
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
                height="85%"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
              >
                <path d="M534-306 376-464q-3-3-5-7.06-2-4.07-2-8.94 0-4.88 2-8.94t5-7.06l158-158q2-2 4.76-3.5 2.77-1.5 5.92-1.5 6.32 0 10.82 4.12 4.5 4.13 4.5 10.88v328q0 6.75-4.64 10.87-4.63 4.13-10.81 4.13-1.55 0-10.55-5Z" />
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
