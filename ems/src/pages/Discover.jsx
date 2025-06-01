import { useEffect, useState } from "react";
import SongCard from "../components/SongCard";

const Discover = () => {
  const [songs, setSongs] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    fetch("https://api.deezer.com/search?q=arijit%20singh") // Or any query
      .then((res) => res.json())
      .then((data) => {
        if (data.data) setSongs(data.data);
      });
  }, []);

  const addToPlaylist = (song) => {
    const updatedPlaylist = [...playlist, song];
    setPlaylist(updatedPlaylist);
    localStorage.setItem("playlist", JSON.stringify(updatedPlaylist));
  };

  return (
    <div>
      <h2>Discover Songs</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {songs.map((song) => (
          <SongCard key={song.id} song={song} onAddToPlaylist={addToPlaylist} />
        ))}
      </div>
    </div>
  );
} 

export default Discover;
