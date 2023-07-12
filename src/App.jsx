import React from 'react';
import './App.css';

import Hashtag from './components/Hashtag';
import Header from './components/Header/index';
import About from './objects/About';
import AboutLink from './objects/AboutLink';
import Checkbox from './objects/Checkbox';

const App = () => {
  return (
    <main className="app">
      <Header />
      <Hashtag />
      <Checkbox
        id="show"
        value="show"
        type="checkbox"
        content="Mostrar eventos"
      />

      <About>
        <AboutLink />
      </About>
    </main>
  );
};

export default App;
