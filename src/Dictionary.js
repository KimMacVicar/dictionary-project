import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import "./App.css";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyWord, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f917000010000013416617f3ebf419d9ee24fd11577e379";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
          <Photos photos={photos} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
