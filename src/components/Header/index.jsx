import React from 'react';
import './styles.css';

import AboutLink from '../../objects/AboutLink/index';
import Logo from '../../objects/Logo/index';
import Menu from '../../objects/Menu/index';

const Header = () => {
  return (
    <header className="header">
      <>
        <Logo />
        <AboutLink />
        <Menu />
      </>
    </header>
  );
};

export default Header;
