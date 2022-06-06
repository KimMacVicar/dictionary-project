import React from "react";
import "./App.css";

export default function Example(props) {
  if (props.examples) {
    return (
      <div className="Example">
        {props.examples.map(function (example, index) {
          return <div key={index}>{example}</div>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
