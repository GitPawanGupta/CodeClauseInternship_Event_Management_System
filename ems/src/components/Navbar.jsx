import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ background: '#222', color: 'white', padding: '10px' }}>
      <Link to="/" style={{ margin: '0 10px', color: 'white' }}>Home</Link>
      <Link to="/discover" style={{ margin: '0 10px', color: 'white' }}>Discover</Link>
      <Link to="/playlists" style={{ margin: '0 10px', color: 'white' }}>My Playlists</Link>
      <Link to="/login" style={{ margin: '0 10px', color: 'white' }}>Login</Link>
    </nav>
  );
};

export default Navbar;
