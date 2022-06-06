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
            <p className="info">
              <strong>Definition: </strong>
              {definition.definition}
              <br />
            </p>
            <p>
              {" "}
              <Example examples={definition.examples} />
              <br />
            </p>

            <p>
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
