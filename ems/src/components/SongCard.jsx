const SongCard = ({ song, onAddToPlaylist }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
      <img src={song.album.cover_medium} alt={song.title} width="100%" />
      <h4>{song.title}</h4>
      <p>{song.artist.name}</p>
      <audio controls src={song.preview}></audio>
      <button onClick={() => onAddToPlaylist(song)}>Add to Playlist</button>
    </div>
  );
};

export default SongCard;
