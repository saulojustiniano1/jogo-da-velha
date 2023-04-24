import React from 'react';
import './App.css';
import Hashtag from './components/Hashtag';
import Header from './components/Header/index';

const App = () => {
  return (
    <main className="app">
      <Header />
      <Hashtag />
    </main>
  );
};

export default App;
