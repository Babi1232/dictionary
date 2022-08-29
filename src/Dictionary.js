import axios from "axios";
import React, { useState } from "react";
import "./dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, Setloaded] = useState(false);
  let [photos, Setphotos] = useState(null);
  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelResponse(response) {
    Setphotos(response.data.photos);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelApiKey =
      "563492ad6f917000010000017a4d8b9a14d84b7587f28a0598d4a9ea";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    Setloaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="dictionary">
        <section>
          <h1>what word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            suggested words: sunset,sunrise,wine,flower.....
          </div>
        </section>

        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "loading.......";
  }
}
