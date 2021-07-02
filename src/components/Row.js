import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../axios/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";



function Row({ title, fetchUrl, isLargerRow = false }) {
  const [movies, setMovies] = useState([]);


  const [trailerUrl, setTrailerUrl] = useState('')

  const BASE_URL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      // console.log(movies);
      return request;
    }
    fetchData();
  }, [fetchUrl]);



  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  }


  const handleClick = (movie) => {

    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || '').then(url => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'))
      }).catch((error) =>{
        if(error){

        }
      })
    }

  }

  return (
    <div className="rows">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map(
          (movie) =>
            ((isLargerRow && movie.poster_path) ||
              (!isLargerRow && movie.backdrop_path)) && (
        
                <img
                  onClick={() => handleClick(movie)}
                  className={`row_poster ${isLargerRow && "row_poster_larger"}`}
                  key={movie.id}
                  src={`${BASE_URL}${isLargerRow ? movie.poster_path : movie.backdrop_path
                    }`}
                  alt={movie.name || movie.title}
                />
            
            )
        )}
      </div>
      { trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
// {`row_poster ${isLargerRow && "row_poster_larger"}`}
export default Row;
