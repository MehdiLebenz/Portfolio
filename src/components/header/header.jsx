/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { createTheme } from '@mui/material/styles';
import HeaderWrapper from './headerWrapper';
import DarkModeToggle from '../utils/DarkModeToggle';

 function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 700px)');
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: '#2196f3',
      },
      secondary: {
        main: '#f50057',
      },
    },
  });

  return (
    <HeaderWrapper>
      <header className="Header">
        <div className="toggle">
          <DarkModeToggle />
        </div>
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <nav className="Nav">
            <a href="/">Home</a>
            <a href="/blog">Blog</a>
            <a href="/projects">Projects</a>
            <a href="/myskills">MySkills</a>
            <a href="/contact"> Contact </a>
          </nav>
        </CSSTransition>
        <button type="button"onClick={toggleNav} className="Burger">
          🚀
        </button>
      </header>
    </HeaderWrapper>
  );
}
export default Header;