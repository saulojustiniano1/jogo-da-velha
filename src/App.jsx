import React from 'react';
import './App.css';

import Hashtag from './components/Hashtag';
import Header from './components/Header/index';
import Label from './objects/Label';

const App = () => {
  return (
    <main className="app">
      <Header />
      <Hashtag />
      <Label content="Mostrar eventos" />
    </main>
  );
};

export default App;
