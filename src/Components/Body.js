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
              <Projects/>
              <Skills/>
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
    overflow-x: hidden;
    
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
  height: auto;
  pointer-events: none;

  
`;
export default Body;
