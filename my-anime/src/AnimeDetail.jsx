// src/AnimeDetail.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './AnimeDetail.css';

function AnimeDetail() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    axios.get(`https://api.jikan.moe/v4/anime/${id}`)
      .then(response => {
        setAnime(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching anime details:', error);
      });
  }, [id]);

  if (!anime) return <p>Loading...</p>;

  return (
    <div>
      <h1>{anime.title}</h1>
      <img src={anime.images.jpg.image_url} alt={anime.title} style={{ width: '200px', height: 'auto' }} /> {/* Menampilkan gambar di detail */}
      <p><strong>Type:</strong> {anime.type}</p>
      <p><strong>Episodes:</strong> {anime.episodes}</p>
      <p><strong>Score:</strong> {anime.score}</p>
      <p><strong>Synopsis:</strong> {anime.synopsis}</p>
    </div>
  );
}

export default AnimeDetail;
