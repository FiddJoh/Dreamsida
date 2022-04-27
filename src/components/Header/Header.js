import React from 'react';
import styles from './Header.module.css';


const Header = () => (
  <div id="right" className="column">
  <div className={styles.Header} data-testid="Header">
   <h1 id="title">Dream W.Khlangklong</h1>
  </div>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
