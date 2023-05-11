import React from 'react';
import './App.css';

import Hashtag from './components/Hashtag';
import Header from './components/Header/index';
import Input from './objects/Input';
import Label from './objects/Label';

const App = () => {
  return (
    <main className="app">
      <Header />
      <Hashtag />
      <Input value="show" />
      <Label content="Mostrar eventos" />
    </main>
  );
};

export default App;
