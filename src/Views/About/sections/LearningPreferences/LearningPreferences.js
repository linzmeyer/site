import React, {Component} from 'react';

class LearningPreferences extends Component {

  render() {
    return (
      <section className="info" >
        <h2>Learning Preferences</h2>
        <ul>
          <li>I am not partial to any one technology. I am willing to learn anyting to further a cause.</li>
          <li>I learn best by reading documentation and by observation.</li>
          <li>I observe skilled practitioners and take notes on their methods.</li>
          <li>I ask questions after I have explored the subject material myself.</li>
          <li>For me, the best methods for learing code is to READ, WRITE, SPEAK, and TEACH code.</li>
        </ul>
      </section>
    );
  }
}

export default( LearningPreferences );