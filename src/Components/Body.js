import React from 'react';
import styled from '@emotion/styled';
import Projects from './Projects';
import Background from './Background';
import wave from '../Images/wave.svg';
import Skills from './Skills';
import {flavorColor, flavorColor2, notWhite} from './Colors';

export class Body extends React.Component{  
    constructor(props) {
      super(props);
      this.state = {

      };
    }
    render() {
      return (
        <React.Fragment>
          <Base>
            {/*<Wave src={wave}></Wave>*/}
            <Core>
              <Projects/>
              <Skills/>
              <Background/>
              <Copyright>©Copyright 2020, Gregory A. Blood</Copyright>
            </Core>
          </Base>
        </React.Fragment>
      );
    };
}
const Base = styled.div`
    position: relative;
    top: 100vh;
    background: ${notWhite};
    width: 100%;
    padding: 0;
    margin: 0;
    padding-bottom: 50vh;
    overflow-x: visible;
`;

const Core = styled.div`
    margin: 0 auto;
    position: relative;
    top: 150px;
    padding: 0;
`;

const Wave = styled.img `
  position: absolute;
  transform: scaleX(-1);
  width: 100vw;
  left: -0px;
  top: -20vw;
  z-index: 0;
  height: auto;
  pointer-events: none;
`;

const Copyright = styled.div `
  margin-top: 8rem;
`;

export default Body;
