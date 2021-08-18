import React from 'react';
import styled from '@emotion/styled';
import Projects from './Projects';
import { flavorColor, flavorColor2, lightGray, notWhite } from './Colors';


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
                Work Experience
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
                - Utilized TA experience and student relationships to improve courses
              </SmallText>
              <LetterButton target="_blank" rel="noopener noreferrer" href={`https://raw.githubusercontent.com/gregoryblood/gregoryblood.github.io/master/Gregory_Blood_recommendation.pdf`}>Letter of Recommendation</LetterButton>
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
    padding-top: 4rem;
    padding-bottom: 0.5rem;
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
  const LetterButton = styled.a `
      text-decoration: none;
      cursor: pointer;
      font-size: 1.5rem;
      font-weight: bold;
      transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      border-radius: 8px;
      border-style: solid;
      color: ${notWhite};
      border-color: black;
      background: black;
      height: 30px;
      display: block;
      width: 20rem;
      text-align: center;
      margin: 2rem auto;
      padding: 1rem;
      &:hover {
        color: black;
        border-color: black;
        background: transparent;
      }
      @media(max-width: 813px) {
        width: 100%auto;
      }
  `;
export default Skills;
