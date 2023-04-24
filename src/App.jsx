import React from 'react';
import Header from './components/Header/index';
import Card from './objects/Card/index';
import Player from './objects/Player';

function App() {
  return (
    <>
      <Header />
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
    </>
  );
}

export default App;
