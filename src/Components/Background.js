import React from 'react';
import styled from '@emotion/styled';
import Projects from './Projects';
import { flavorColor2, lightGray, notWhite } from './Colors';


export class Skills extends React.Component{  
    constructor(props) {
      super(props);
      this.state = {

      };

    }

    render() {
      return (
        <React.Fragment>
          <Section>
            <Text>
              <Header>
                Work
              </Header>
              <Title>
                Teacher Assistant 
              </Title>
              <Date>
                Sep. 2019 - June. 2021
              </Date>
              <SmallText>
                - Held office hours to work with students to gain a greater understanding of the coursework
              </SmallText>
              <SmallText>
                - Gave immediate one-on-one feedback with students while critiquing their work 
              </SmallText>
              <SmallText>
                - Lead classes of 30+ students to go in-depth into topics 
              </SmallText>
              <SmallText>
                - Worked with professors in finding ways to improve our course
              </SmallText>
              <Header>
                Education
              </Header>
              <Title>
                Oregon State University  
              </Title>
              <Date>
              Sep. 2017 - June. 2021
              </Date>
              <SmallText>
                Computer Science, BS 
              </SmallText>
              <SmallText>
                Specialization in Web, Mobile, and Cloud Development
              </SmallText>
            </Text>
          </Section>
        </React.Fragment>
        
      );
  
    };
  }
  const Section = styled.div `
    background-color: ${flavorColor2};
    width: 95vw;
    left: -5vw;
    border-top-right-radius: 100px;
    @media(max-width: 813px) {
      left: 0;
      width: 100vw;
    }
    padding-bottom: 10rem;
  `;
  const Text = styled.div `
    color: white;
    text-align: left;
    padding: 8rem;
    padding-top: 1rem;
    margin-left: 5vw;
    @media(max-width: 813px) {
      margin: 0;
      padding: 2rem;
    }
  `;
  const Header = styled.div `
    text-align: center;
    font-size: 1.3rem;
    padding: 4rem;
  `;
  const Title = styled.div `
    font-size: 2rem;
    font-weight: bold;
  `;
  const Date = styled.div `
    font-size: 1.1rem;
    font-style: italic;
    color: ${notWhite};
  `;
  const SmallText = styled.div `
    text-align: left;
    font-size: 1.5rem;
  `;
export default Skills;
