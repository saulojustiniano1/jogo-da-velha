import React from 'react';
import Card from '../../objects/Card/index';
import Player from '../../objects/Player/index';

const Hashtag = () => {
  return (
    <Card>
      <Player player="o" />
      <Player player="x" />
      <Player player="x" />

      <Player player="x" />
      <Player player="o" />
      <Player player="o" />

      <Player player="x" />
      <Player player="o" />
      <Player player="x" />
    </Card>
  );
};

export default Hashtag;
