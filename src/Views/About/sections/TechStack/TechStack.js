import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TechStack extends Component {

  render() {
    return (
      <section className="info" >
        <h2>Technology Stack</h2>
        <ul className="tech-stack" >
          <li><FontAwesomeIcon icon={['fab', 'react']} spin /> React / JSX</li>
          <li><FontAwesomeIcon icon="globe" /> React-Redux</li>
          <li><FontAwesomeIcon icon="retweet" /> Redux-Saga</li>
          <li><FontAwesomeIcon icon={['fab', 'node']} /> Node | npm</li>
          <li><FontAwesomeIcon icon="shipping-fast" /> Express</li>
          <li><FontAwesomeIcon icon="database" /> Postgresql</li>
          <li><FontAwesomeIcon icon="code" /> C++</li>
          <li><FontAwesomeIcon icon="th" /> CSS Grids</li>
          <li><FontAwesomeIcon icon={['fab', 'fort-awesome']} /> Font Awesome</li>
        </ul>
      </section>
    );
  }
}

export default( TechStack );