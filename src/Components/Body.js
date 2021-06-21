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
    background: white;
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
    
    z-index: 0;
`;

const Wave = styled.img `
  position: absolute;
  width: 100%;
  left: 0;
  top: -60vw;
  z-index: 0;
  height: auto;
  pointer-events: none;
  
`;
const Wave2 = styled.img `
  position: absolute;
  width: 100%;
  left: 0;
  top: -2vw;
  z-index: 0;
  height: auto;
  pointer-events: none;
  -webkit-transform: scaleY(-1);
  transform: scaleY(-1);

`;
export default Body;
