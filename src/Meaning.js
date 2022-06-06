import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./App.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="info">{definition.definition}</div>
            <div className="example">
              <Example examples={definition.examples} />
              <br />
            </div>

            <div className="synonyms">
              <Synonyms synonyms={definition.synonyms} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
