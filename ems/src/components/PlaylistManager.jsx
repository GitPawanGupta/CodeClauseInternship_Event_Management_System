const PlaylistManager = ({ playlist }) => {
  return (
    <div>
      <h3>My Playlist</h3>
      {playlist.length === 0 ? (
        <p>No songs in playlist.</p>
      ) : (
        playlist.map((song, index) => (
          <div key={index}>
            <p>{song.title} - {song.artist.name}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default PlaylistManager;
