import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="info">
              {definition.definiton}
              <em className="info">{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
