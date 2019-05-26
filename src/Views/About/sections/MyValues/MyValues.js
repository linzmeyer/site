import React, {Component} from 'react';

class MyValues extends Component {

  render() {
    return (
      <section className="info" >
        <h2>My Values</h2>
        <ul>
          <li><strong>Strive For Excellence!</strong></li>
          <li><strong>Teamwork</strong>: I rarely work alone. I am here to help. That means being part of a team with a common goal.</li>
          <li><strong>Adaptability</strong>: I pride myself on understanding the needs of a customer and flexing my abilities and task list until the job is done.</li>
          <li><strong>Communication</strong>: An unclear instruction is a task with no direction or purpose.</li>
          <li><strong>Intrinsic Motivation</strong>: I go to work because I want to be there.</li>
          <li><strong>Time Management</strong>: Ten minutes early is five minutes late!</li>
        </ul>
      </section>
    );
  }
}

export default( MyValues );