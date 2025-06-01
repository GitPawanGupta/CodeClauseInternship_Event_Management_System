import { useEffect, useState } from "react";
import PlaylistManager from "../components/PlaylistManager";

const Playlists = () => {
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("playlist")) || [];
    setPlaylist(saved);
  }, []);

  return (
    <div>
      <h2>Your Playlist</h2>
      <PlaylistManager playlist={playlist} />
    </div>
  );
};

export default Playlists;
