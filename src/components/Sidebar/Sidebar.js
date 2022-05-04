import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = (props) => (
  <div id = "left" className="column">
  <div className={styles.Sidebar} data-testid="Sidebar">
    <h1 className="sidebarTitle">CV</h1>
    <ul>
    <li><button className="years" onClick={() =>props.clickFunction(0)}>Start</button></li>
    <li><button className="years" onClick={() =>props.clickFunction(2021)}>2021</button></li>
    <li><button className="years" onClick={() =>props.clickFunction(2020)}>2020</button></li>
    <li><button className="years" onClick={() =>props.clickFunction(2019)}>2019</button></li>
    <li><button className="years" onClick={() =>props.clickFunction(2018)}>2018</button></li>
    <li><button className="years" onClick={() =>props.clickFunction(2017)}>2017</button></li>
    <li><button className="years" onClick={() =>props.clickFunction(2016)}>2016</button></li>
    <li><button className="years" onClick={() =>props.clickFunction(2015)}>2015</button></li>
    <li><button className="years">Utställning</button></li>
    </ul>  
    <div className="contactInfo">
      <p>Email: dream@dream.com</p>
      <p>Phone: dream@dream.com</p>
      <p>Instagram: dream@dream.com</p>
      <p>Facebook: dream@dream.com</p>
      </div>
  </div>
  </div>
);



Sidebar.propTypes = {};

Sidebar.defaultProps = {};

export default Sidebar;
