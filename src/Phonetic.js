import React from "react";
import "./App.css";
import "./Phonetics.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <a
        className="sound"
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
      >
        Listen
      </a>
      <span className="phoneticsText">{props.phonetic.text}</span>
    </div>
  );
}
