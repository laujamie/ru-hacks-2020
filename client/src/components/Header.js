import React from 'react';
import Logo from './logo.png';

const Header = () => (
  <div>
    <img src={Logo} className="logo-main" alt="logo" />
    <p className="title-container__subtitle">
      Collective thinking made simpler.
    </p>
  </div>
);

export default Header;
