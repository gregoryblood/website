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
            <Header>Tools</Header>
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
    width: 100%;
    overflow-x: hidden;
    padding-bottom: 2rem;
  `;
  const Text = styled.div `
    color: black;
    padding: 4rem;
  `;
  const Header = styled.div `
    text-align: center;
    font-size: 1.3rem;
  `;
  const Language = styled.div `
    padding-top: 1rem;
    font-weight: bold;
    font-size: 1.7rem;
  `;
export default Skills;
