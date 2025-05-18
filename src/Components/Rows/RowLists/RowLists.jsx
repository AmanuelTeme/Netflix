import React from "react";
import { useState } from "react";
import "./RowLists.css";
import Row from "../Row/Row";
import requests from "../../../utils/requests";
// import Login from "../../Login/Login";


function Rowlists() {
    // const [user, setUser] = useState(null);

    // if (!user) {
    //   return <Login onLogin={setUser} />;
    // }

  return (
    <div className="app">
      
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default Rowlists;