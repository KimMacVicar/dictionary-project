import React from "react";
import "./App.css";

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
      <br />
      {props.phonetic.text}
    </div>
  );
}
