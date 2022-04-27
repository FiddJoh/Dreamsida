import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => (
  <div className={styles.Sidebar} data-testid="Sidebar">
    <h1 className="sidebarTitle">CV</h1>
    <ul>
    <li><button className="years">2021</button></li>
    <li><button className="years">2020</button></li>
    <li><button className="years">2019</button></li>
    <li><button className="years">2018</button></li>
    <li><button className="years">2017</button></li>
    <li><button className="years">2016</button></li>
    <li><button className="years">2015</button></li>
    <li><button className="years">Utställning</button></li>
    
    </ul>
  </div>
);

Sidebar.propTypes = {};

Sidebar.defaultProps = {};

export default Sidebar;
