import * as React from 'react';
import PropTypes from 'prop-types';
import Header from './header/header';
import './layout.css';
import Footer from './custom/footer';
function Layout({ children }) {
  return (
    <div className="layout" style={{ width: '100%', height: '100vh' }}>
      <div className="mainContainer">
        <header>
          <Header />
        </header>
        <main>
          {children}
          <footer>
            <Footer />
          </footer>
        </main>

      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
