import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div style={{ paddingLeft: 24, display: 'flex', flexDirection: 'column' }}>
      <Link to="/personagens">Personagens</Link>
      <Link to="/planetas">Planetas</Link>
      <Link to="/naves">Naves</Link>
    </div>
  );
};

export default Home;
