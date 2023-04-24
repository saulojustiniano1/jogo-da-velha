import React from 'react';
import Card from '../../objects/Card/index';
import Player from '../../objects/Player/index';
import './styles.css';

const Hashtag = () => {
  return (
    <Card>
      <ul className="hashtag">
        <li className="item">
          <Player player="o" />
        </li>
        <li className="item">
          <Player player="x" />
        </li>
        <li className="item">
          <Player player="x" />
        </li>

        <li className="item">
          <Player player="x" />
        </li>
        <li className="item">
          <Player player="o" />
        </li>
        <li className="item">
          <Player player="o" />
        </li>

        <li className="item">
          <Player player="x" />
        </li>
        <li className="item">
          <Player player="o" />
        </li>
        <li className="item">
          <Player player="x" />
        </li>
      </ul>
    </Card>
  );
};

export default Hashtag;
