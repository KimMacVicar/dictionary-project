import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import "./App.css";

export default function Dictionary(props) {
  let [keyWord, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeyWordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="container m-600">
          <div className="row">
            <div className="col-12">
              <section>
                <form onSubmit={handleSubmit}>
                  <input
                    onFocus="clearDefault(this)"
                    className="search"
                    type="search"
                    onChange={handleKeyWordChange}
                    placeholder=" Enter a word..."
                  />
                </form>
              </section>
            </div>
          </div>
          <Results results={results} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
