
import React from 'react';
import styled from '@emotion/styled';
import { AiOutlineGithub,  AiFillLinkedin} from 'react-icons/ai';
import {flavorColor, flavorColor2} from './Colors';

var i = 0;
const heys = ["Hello", "Bonjour", "你好", "Howdy", "Salve", "Hey", "こんにちは", "Hola", "안녕하세요"];
export class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "Hello"
    };
  }
  
  componentDidMount() {

    
    this.interval = setInterval(() => this.setState({ word: heys[i++] }), 500);
  }
  componentDidUpdate() {
    console.log("==Updated");
    if (i == heys.length)
      i = 0;
  }
  componentWillUnmount() {

    clearInterval(this.interval);
  }
  render() {   
    return (
      <Fade>
        <Name>Gregory Blood</Name>
        <NavLinks>
          <NavLink>
            Work
          </NavLink>
          <NavLink>
            Skills
          </NavLink>
          <NavLinkButton  href={`mailto: gregoryblood1998@gmail.com?`}>
            Contact 
          </NavLinkButton>
        </NavLinks>
        <HomeBody>
            <Greeting>
              <Flavor>
                {this.state.word} 
              </Flavor>
            </Greeting>
            <Headline>
              Do you need work done right?
            </Headline>
            <Flavor>
              I design, build, and deliver. 
            </Flavor>
            <WorkButton>Look at my work</WorkButton>
          </HomeBody>
        <Block/>
        <Icons>
          <Icon target="_blank" href={`https://github.com/gregoryblood`}>
            <AiOutlineGithub/>
          </Icon>
          <Icon target="_blank" href={`https://www.linkedin.com/in/gregoryblood/`}>
            <AiFillLinkedin/>
          </Icon>
        </Icons>
        
        
      </Fade>
    );
  }
}
const Fade = styled.div `
  animation: fadeIn ease 4s;
  -webkit-animation: fadeIn ease 4s;
  -moz-animation: fadeIn ease 4s;
  -o-animation: fadeIn ease 4s;
  -ms-animation: fadeIn ease 4s;
  @keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
  }
  
  @-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
  }
  
  @-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
  }
  
  @-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
  }
  
  @-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
  }
`;
const Name = styled.a `
  text-decoration: none;
  cursor: pointer;
  position: fixed;
  color: white;
  font-size: 48px;
  font-weight: bold;
  padding: 20px 20px  0 20px;
  transition-duration: 0.6s;
  -webkit-transition-duration: 0.6s;
  left: 1vw;

  &:hover {
    color: ${flavorColor}
  }
  @media(max-width: 813px) {
    display: none;
  }
`;
const Block = styled.div`
    background-color:white;
    z-index: -1;
    width:100vh;

    height:100vh;
    color:white;

    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    bottom: -50vh;
    right: -50vh;
    position: fixed;   
`;
const NavLinks = styled.div `
  position: fixed;
  top: 20px;
  right: 40px;
  @media(max-width: 813px) {
    width: 100%;
    right: 0;
    top: auto;
    bottom: 20px;
    
  }
  
`;
const NavLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  padding: 10px 20px ;
  transition-duration: 0.6s;
  -webkit-transition-duration: 0.6s;
  border-style: solid;
  border-color: transparent;
  color: white;
  &:hover {
    color: ${flavorColor};
  }
`;

const NavLinkButton = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  padding: 10px 20px ;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  background: ${flavorColor};
  border-radius: 8px;
  border-style: solid;
  border-color: transparent;
  color: black;
  &:hover {
    color: ${flavorColor};
    border-color: ${flavorColor};
    background: black;
  }
`;
const HomeBody = styled.div `
  font-weight: bold;
  position: fixed;
  top: 35vh;
  padding: 10px 10vw;
  color: #979fab;
  @media(max-width: 813px) {
    top: 20vh;
  }
`;
const Headline = styled.div `
  color: white;
  font-size: 64px;
  font-weight: bold;
  text-align: left;
  padding: 0px 0;
  @media(max-width: 813px) {
    font-size: 16x;
  }
`;
const Greeting = styled.div `
  position: absolute;
  top: -50px;
  color: ${flavorColor2};
  
`;
const Flavor = styled.div `
  font-size: 36px;
  text-align: left;
  padding: 10px 0;
`;
const WorkButton = styled.a `
  text-decoration: none;
  background-color: ${flavorColor};
  cursor: pointer;
  display: block;
  color: black;
  font-weight: bold;
  width: 250px;
  font-size: 28px;
  margin-top: 20px;
  padding: 20px 10px;
  border-style: solid;
  border-radius: 8px;
  border-color: transparent;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  &:hover {
    background-color: black;
    border-color: ${flavorColor};
    color: ${flavorColor};
  }
`;
const Icons = styled.div `
  text-decoration: none;
  position: fixed;
  bottom: 2vh;
  right: 2vw;
  font-size: 50px;
  
`;
const Icon = styled.a `
  text-decoration: none;
  display: block;
  cursor: pointer;
  padding: 10px 10px;
  margin: 10px 0;
  border-radius: 50%;
  line-height: 4px;
  color: black;
  transition-duration: 0.6s;
  -webkit-transition-duration: 0.6s;
  &:hover {
    color: white;
    background: black;
  }
`;
export default Title;
