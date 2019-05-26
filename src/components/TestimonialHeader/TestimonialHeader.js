import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

class TestimonialHeader extends Component {

  // render an icon based on the testimonial that the user clicks on.
  renderIcon = () => {
    if ( this.props.testimonial === 'default' ) { return ['far', 'heart'];}
    else if ( this.props.testimonial === 'teamwork' ) { return 'people-carry'; }
    else if ( this.props.testimonial === 'adaptability' ) { return 'sliders-h'; }
    else if ( this.props.testimonial === 'communication' ) { return 'users'; }
    else if ( this.props.testimonial === 'intrinsic-motivation' ) { return 'seedling'; }
    else if ( this.props.testimonial === 'time-management' ) { return ['far', 'calendar-alt']; }
  }

  render() {
    return (
      <h2>
        Testimonials
        {' '}<FontAwesomeIcon icon={ this.renderIcon() } />
      </h2>
    );
  }
}

const mapStateToProps = ({ testimonial }) => ({ testimonial });

export default connect( mapStateToProps )( TestimonialHeader );