import React, { useEffect, useState } from 'react'
import requests from '../constants/Request';
import axios from '../axios/axios'
import './Banner.css'

export default function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            const value = Math.floor(Math.random() * request.data.results.length);

            setMovie(
                request.data.results[
                value
                ]
            );
            return request;
        }
        fetchData();
    }, []);


    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "....." : string;
    }


    return (
        <div className='banner' style={{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        }}>

            <div className="banner_items">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Pay</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
            </div>
            <div className="banner_fade" />

        </div>
    )
}
