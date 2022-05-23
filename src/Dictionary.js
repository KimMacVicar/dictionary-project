import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyWord, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
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
                onFocus="clearDefault(this)"
                className="search"
                type="search"
                onChange={handleKeyWordChange}
                placeholder=" Enter a word..."
              />
            </form>
          </div>
          <div className="col-3 btn-border">
            <input
              className="btn btn-primary "
              type="submit"
              value="search"
              onFocus="clearDefault(this)"
            />
          </div>
        </div>
        <Results results={results} />
      </div>
    </div>
  );
}
