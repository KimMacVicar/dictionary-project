import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyWord, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyWord} definition`);
  }
  function handleKeyWordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <div className="container m-800">
        <div className="row">
          <div className="col-9">
            <form onSubmit={search}>
              <input
                className="search m-500"
                type="search"
                onChange={handleKeyWordChange}
                placeholder=" Enter a word..."
              />
            </form>
          </div>
          <div className="col-3 btn-border">
            <input
              className="btn btn-primary w-50"
              type="submit"
              value="search"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
