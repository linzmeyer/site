import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import calendar from '../../img/calendar.png';

class Availability extends Component {

  render() {
    return (
      <div className="wrapper" >
        <Nav />
        <div>
          <div className="content-container" >
            <div className="info">
              <h2>Current Availability</h2>
              <ul>
                <li>Looking for opportunities!</li>
                <li>Will be available to start work Monday, July 1 2019.</li>
                <li><Link to="/contact" >Contact me</Link> to help on your upcoming projects.</li>
              </ul>
            </div>
            <div className="info" >
              <img src={ calendar } alt="calendar" className="calendar" ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ( Availability );