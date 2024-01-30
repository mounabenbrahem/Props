import React from 'react';
import Player from './Player';
import joueurs from './joueurs';

const PlayersList = () => {
  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'30px',justifyContent:'center'}}>
      {joueurs.map((joueur, index) => (
        <Player key={index} {...joueur} />
      ))}
    </div>
  );
};

export default PlayersList;