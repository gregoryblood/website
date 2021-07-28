import React from 'react';
import styled from '@emotion/styled';
import Projects from './Projects';
import { flavorColor, flavorColor2 } from './Colors';


export class Skills extends React.Component{  
    constructor(props) {
      super(props);
      this.state = {

      };

    }

    render() {
      return (
        <Section id="skills">
          <Text>
            <Language>
              Javascript - C/C++/C# - Python - Java  
            </Language>
            <Language>
              ReactJS - React Native - Angular 
            </Language>
            <Language>
              Heroku - AWS 
            </Language>
            <Language>
              MySql - MongoDB
            </Language>
            <Language>
              Unity - Unreal
            </Language>
          </Text>
        </Section>
        
      );
  
    };
  }
  const Section = styled.div `
    background-color: ${flavorColor};
    border-top-left-radius: 100px;
    margin-top: 5rem;
    width: 100vw;
    padding-bottom: 1000px;
  `;
  const Text = styled.div `
    color: black;
    width: 75vw;
    padding: 4rem;
    padding-bottom: 0;
  `;
  const Language = styled.div `
    font-weight: bold;
    font-size: 1.7rem;
  `;
export default Skills;
