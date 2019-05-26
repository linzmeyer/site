import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Skills from './sections/Skills/Skills';
import TechStack from './sections/TechStack/TechStack';
import Experience from './sections/Experience/Experience';
import MyValues from './sections/MyValues/MyValues';
import WhatImLookingFor from './sections/WhatImLookingFor/WhatImLookingFor';
import PersonalityType from './sections/PersonalityType/PersonalityType';
import LearningPreferences from './sections/LearningPreferences/LearningPreferences';
import Strengths from './sections/Strengths/Strengths';

class About extends Component {
  render() {
    return (
      <div className="wrapper" >
        <Nav />
        <div>
          <div className="content-container">
            <Skills />
            <TechStack />
            <Experience />
            <MyValues />
            <WhatImLookingFor />
            <PersonalityType />
            <LearningPreferences />
            <Strengths />
          </div>
        </div>
      </div>
    );
  }
}

export default ( About );