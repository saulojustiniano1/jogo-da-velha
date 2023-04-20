import React from 'react';
import playerO from '../../assets/player-o.svg';
import playerX from '../../assets/player-x.svg';
import './styles.css';

const Player = ({ player }) => {
  const players = [];
  players['x'] = playerX;
  players['o'] = playerO;

  return (
    <button className="player">
      <img src={players[player]} alt={`Jogador ${player.toUpperCase()}`} />
    </button>
  );
};

export default Player;
