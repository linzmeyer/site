import React, {Component} from 'react';
import { connect } from 'react-redux';

class Experience extends Component {

  renderExperience = () => {
    return (
      <p>Click on a company (left) to display my experience there.</p>
    );
  }

  render() {
    return (
    <section className="info" >
      <h2>Experience</h2>
      <div className="experience" >
        <ul>
          <li>
            <h4>Prime Digital Academy</h4>
            <p>
              January 2019 - Present
              <br></br>
              Attended Prime Digital Academy's full immersion program for software engineers.
            </p>
          </li>
          <li>Engineering internship creating touch screens for human-machine interface controllers.</li>
          <li>5 years experience building and wiring custom control panels for automated industrial machines.</li>
          <li>AAS Degree in Wind Energy Technology</li>
        </ul>
        { this.renderExperience() }
      </div>
    
    </section>
    );
  }
}



const mapStateToProps = ({ experience }) => ({ experience });

export default connect( mapStateToProps )( Experience );


