import React from 'react';
import styled from '@emotion/styled';
import Projects from './Projects';
import wave from '../Images/wave.svg';
import Skills from './Skills';


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
            <Wave src={wave}></Wave>
            <Core>
              <Skills/>
              <Projects/>
              
            </Core>
          </Base>
        </React.Fragment>
      );
    };
}
const Base = styled.div`
    position: relative;
    top: 100vh;
    background: #0b0c10;
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
    max-width: 900px;
`;

const Wave = styled.img `
  position: absolute;
  transform: scaleX(-1);
  width: 100vw;
  left: -16.5px;
  top: -22vw;
  z-index: 0;
  height: auto;
  pointer-events: none;
  
`;

export default Body;
