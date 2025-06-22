import React, { useEffect, useState } from "react";
import instance from "../../../utils/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
      setError("");
      return;
    }

    setLoading(true);
    setError("");

    const movieTitle =
      movie?.title || movie?.name || movie?.original_name || "";

    try {
      // Try with original title first
      let url = await movieTrailer(movieTitle);

      // If that fails, try with "trailer" keyword
      if (!url) {
        url = await movieTrailer(movieTitle + " trailer");
      }

      // If still no result, try with "official trailer"
      if (!url) {
        url = await movieTrailer(movieTitle + " official trailer");
      }

      if (url) {
        const urlParams = new URLSearchParams(new URL(url).search);
        const videoId = urlParams.get("v");
        if (videoId) {
          setTrailerUrl(videoId);
        } else {
          setError("Trailer found but couldn't extract video ID");
        }
      } else {
        setError(`No trailer found for "${movieTitle}". Try another movie!`);
      }
    } catch (error) {
      console.log("Trailer error:", error);
      setError(`Couldn't load trailer for "${movieTitle}". Try another movie!`);
    } finally {
      setLoading(false);
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            style={{ cursor: loading ? "wait" : "pointer" }}
          />
        ))}
      </div>

      {loading && (
        <div style={{ textAlign: "center", padding: "20px", color: "white" }}>
          Loading trailer...
        </div>
      )}

      {error && (
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            color: "#e50914",
            backgroundColor: "rgba(0,0,0,0.8)",
            margin: "10px 0",
          }}
        >
          {error}
        </div>
      )}

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
