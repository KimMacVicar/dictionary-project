import React from "react";
import "./CoderStamp.css";

export default function CoderStamp() {
  return (
    <footer className="footer">
      This project was created by Kim MacVicar and is{" "}
      <a
        className="link"
        href="https://github.com/KimMacVicar/dictionary-project"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        open-sourced on GitHub
      </a>{" "}
      and{" "}
      <a
        className="link"
        href="https://elegant-crisp-fa71cf.netlify.app"
        target="blank"
        rel="noreferrer"
      >
        {" "}
        hosted on Netlify
      </a>
    </footer>
  );
}
