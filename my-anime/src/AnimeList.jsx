// src/AnimeList.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AnimeList.css'; 

function AnimeList() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    axios.get('https://api.jikan.moe/v4/anime')
      .then(response => {
        setAnimeList(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching anime data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Anime List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th> {}
            <th>Title</th>
            <th>Type</th>
            <th>Episodes</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {animeList.map(anime => (
            <tr key={anime.mal_id}>
              <td>{anime.mal_id}</td>
              <td>
                <img src={anime.images.jpg.image_url} alt={anime.title} style={{ width: '100px', height: 'auto' }} />
              </td> {}
              <td>{anime.title}</td>
              <td>{anime.type}</td>
              <td>{anime.episodes}</td>
              <td>
                <Link to={`/anime/${anime.mal_id}`}>View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AnimeList;
