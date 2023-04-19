import React from 'react';
import Logo from '../../objects/Logo/index';
import Menu from '../../objects/Menu/index';
import Sobre from '../../objects/Sobre/index';
import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <>
        <Logo />
        <Sobre />
        <Menu />
      </>
    </header>
  );
};

export default Header;
