import React from 'react';
import './App.css';

import Hashtag from './components/Hashtag';
import Header from './components/Header/index';
import Input from './objects/Input';

const App = () => {
  return (
    <main className="app">
      <Header />
      <Hashtag />
      <Input id="show" value="show" content="Mostrar eventos" />
    </main>
  );
};

export default App;
