import React, {Component} from 'react';
import { connect } from 'react-redux';
import PrimeGroup from './sections/PrimeGroup';
import PrimeSolo from './sections/PrimeSolo';
import EngineeringInternship from './sections/EngineeringInternship';
import WireTech from './sections/WireTech';

class Experience extends Component {

  renderExperience = ( exp ) => {
    if ( exp === 'default' ) {
      return <p>Click on a title (left) to display my experience.</p>;
    } else if ( exp === 'primeGroup' ) {
      return <PrimeGroup />;
    } else if ( exp === 'primeSolo' ) {
      return <PrimeSolo />;
    } else if ( exp === 'engineeringInternship' ) {
      return <EngineeringInternship />;
    } else if ( exp === 'wireTech' ) {
      return <WireTech />;
    }
  }

  setExperienceReducer = ( expActionType, expPayload ) => {
    let action = { type: expActionType, payload: expPayload };
    this.props.dispatch( action );
  }

  render() {
    return (
    <section className="info" >
      <h2>Experience</h2>
      <div className="experience" >
        <ul>
          <li onClick={ () => this.setExperienceReducer( 'SET_TO_PRIME_GROUP', 'primeGroup' ) } >
            <strong>High Tech Kids (First Lego League) Project</strong>
          </li>
          <li onClick={ () => this.setExperienceReducer( 'SET_TO_PRIME_SOLO', 'primeSolo' ) } >
            <strong>Discover Oakdale Application</strong>
          </li>
          <li onClick={ () => this.setExperienceReducer( 'SET_TO_ENGINEERING_INTERNSHIP', 'engineeringInternship' ) } >
            <strong>Software Engineering Internship</strong>
          </li>
          <li onClick={ () => this.setExperienceReducer( 'SET_TO_WIRE_TECH', 'wireTech' ) } >
            <strong>Programmable Logic Controller Technician</strong>
          </li>
        </ul>
        <div className="info" >
          { this.renderExperience( this.props.experience ) }
        </div>
      </div>
    </section>
    );
  }
}

const mapStateToProps = ({ experience }) => ({ experience });

export default connect( mapStateToProps )( Experience );


