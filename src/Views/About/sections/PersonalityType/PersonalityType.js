import React, {Component} from 'react';

class PersonalityType extends Component {

  render() {
    return (
      <section className="info" >
        <h2>INFJ Personality Type</h2>
        <blockquote>
          <strong>“If you treat people as if they were what they ought to be, then you help them to become what they are capable of being.” - Johann Wolfgang Von Goethe</strong>
        </blockquote>
        <p>
          I have spent a lot of time understanding myself. I felt that <a href="https://www.16personalities.com/infj-personality" target="_blank" rel="noopener noreferrer" >this personality test</a> did a great job at helping me understand some things about myself. It describes me as an advocate who loves helping others discover their true potential. Helping others to help themselves is a true joy of mine.
        </p>
        <p>Source: NERIS Analytics</p>
      </section>
    );
  }
}

export default( PersonalityType );