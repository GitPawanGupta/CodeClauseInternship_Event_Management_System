const Player = ({ song }) => {
  return (
    <div>
      <h3>Now Playing: {song.title} - {song.artist.name}</h3>
      <audio controls autoPlay src={song.preview}></audio>
    </div>
  );
};

export default Player;
