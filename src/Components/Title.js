import React from 'react';
import styled from '@emotion/styled';
import { AiOutlineGithub,  AiFillLinkedin} from 'react-icons/ai';
import { FiMail} from 'react-icons/fi';
import {flavorColor, flavorColor2} from './Colors';
import { Link } from "react-scroll";

var i = 0;
const heys = ["Hello", "Bonjour", "你好", "Howdy", "Salve", "Hey", "こんにちは", "Hola", "안녕하세요"];
export class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "Hello",
      theposition: 0 
    };
  }
  
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ word: heys[i++] }), 500);
    window.addEventListener('scroll', this.listenToScroll);
  }
  componentDidUpdate() {
    //.log("==Updated");
    if (i === heys.length)
      i = 0;
  }
  componentWillUnmount() {
    clearInterval(this.interval);
    window.removeEventListener('scroll', this.listenToScroll);
  }
  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
  
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
  
    const scrolled = winScroll / height
  
    if (scrolled > 0.05) {
      this.setState({
        scrolled: true,
      })
    }
    else {
      this.setState({
        scrolled: false,
      })
    }
  }
  render() {   

    return (
      <React.Fragment>
        <div id="home"></div>
        <NavBar>
          <Name activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={400}>
          Gregory Blood</Name>
          <NavLinks>
            <NavLink  activeClass="active"
                      to="work"
                      spy={true}
                      smooth={true}
                      offset={-200}
                      duration={400}>
              Work
            </NavLink>
            <NavLink  activeClass="active"
                      to="work"
                      spy={true}
                      smooth={true}
                      offset={-200}
                      duration={400}>
              Skills
            </NavLink>
            <NavLinkButton target='_blank' href={'https://raw.githubusercontent.com/gregoryblood/gregoryblood.github.io/master/website/resume.pdf'}>
              Resume 
            </NavLinkButton>
          </NavLinks>
        </NavBar>
        <Fade >
        <HomeBody >
            <Greeting>
              {this.state.word} 
            </Greeting>
            <Headline>
              Do you need work done right?
            </Headline>
            <Flavor>
              I design, build, and deliver. 
            </Flavor>
            
            
          </HomeBody>
          <WorkButton activeClass="active"
                      to="work"
                      spy={true}
                      smooth={true}
                      offset={-200}
                      duration={400}>
          See my Work
          </WorkButton>
          {this.state.scrolled ? 
          <MailButtonLink scrolled href={`mailto: gregoryblood1998@gmail.com?`}><MailButton/></MailButtonLink>
          :
          <MailButtonLink href={`mailto: gregoryblood1998@gmail.com?`}><MailButton/></MailButtonLink>
          }
      </Fade>
        <Icons>
          <Icon target="_blank" href={`https://github.com/gregoryblood`}>
            <AiOutlineGithub/>
          </Icon>
          <Icon target="_blank" href={`https://www.linkedin.com/in/gregoryblood/`}>
            <AiFillLinkedin/>
          </Icon>
        </Icons>
      </React.Fragment>
      
    );
  }
}
const Fade = styled.div `
`;
const NavBar = styled.div `
  position: fixed;
  background: rgb(11, 12, 16, 0.99);
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  z-index: 10;
`;
const Name = styled(Link) `
  text-decoration: none;
  cursor: pointer;
  position: fixed;
  color: white;
  font-size: 36px;
  font-weight: bold;
  margin-top: 5px;
  padding: 20px 20px 0 0;
  transition-duration: 0.6s;
  -webkit-transition-duration: 0.6s;
  left: 5vw;
  &:hover {
    color: ${flavorColor}
  }
  @media(max-width: 813px) {
    display: none;
  }
`;

const NavLinks = styled.div `
  
  position: fixed;
  top: 20px;
  right: 5vw;
  @media(max-width: 813px) {
    width: 100%;
    right: 0;
    top: 20px;
  }
  
`;
const NavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  font-size: 22px;
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
  font-size: 22px;
  font-weight: bold;
  margin-left: 15px;
  padding: 10px 20px;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  background: ${flavorColor};
  border-radius: 8px;
  border-style: solid;
  border-color: transparent;
  color: #0b0c10;
  height: 30px;
  &:hover {
    color: ${flavorColor};
    border-color: ${flavorColor};
    background: #0b0c10;
  }
`;
const HomeBody = styled.div `
  font-weight: bold;
  position: fixed;
  top: 35vh;
  padding: 10px 5vw;
  color: #979fab;
  @media(max-width: 813px) {
    top: 20vh;
  }
`;
const Headline = styled.div `
  color: black;
  font-weight: bold;
  text-align: left;
  padding: 0px 0;
  left: -500px;
  
  -webkit-animation: slide 0.5s forwards;
  -webkit-animation-delay: 2s;
  animation: slide 0.5s forwards;
  animation-delay: 2s;
  @-webkit-keyframes slide {
      100% { left: 0; }
  }
  @keyframes slide {
      100% { left: 0; }
  }
  font-size: 64px;
  @media(max-width: 813px) {
    font-size: 48px;
  }
`;
const Greeting = styled.div `
  position: absolute;
  top: -50px;
  color: ${flavorColor2};
  font-size: 36px;
  text-align: left;
  padding: 10px 0;
`;
const Flavor = styled.div `
  font-size: 36px;
  text-align: left;
  padding: 10px 0;
  color: #535353;
`;
const MailButton = styled(FiMail) `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px;
  height: 30px;
  width: 30px;
`;
const WorkButton = styled(Link) `
  text-decoration: none;
  background-color: ${flavorColor};
  cursor: pointer;
  display: block;
  color: #f5f5f5;
  font-weight: bold;
  border-style: solid;
  border-radius: 8px;
  border-color: transparent;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  font-size:  32px;
  position: ${props => props.scrolled ? 'fixed' : 'fixed'};
  top: ${props => props.scrolled ? '12px' : 'calc(35vh + 175px)'};
  @media(max-width: 813px) {
    top: ${props => props.scrolled ? '12px' : 'calc(35vh + 230px)'};
  }
  left: ${props => props.scrolled ? 'calc( 100vw - 475px)' : ' 5vw'};
  margin-top: ${props => props.scrolled ? '0' : '20px'};
  z-index: ${props => props.scrolled ? '12' : '0'};
  width: ${props => props.scrolled ? '60px' : '200px'};
  height: ${props => props.scrolled ? 'auto' : 'auto'};
  border-radius:  ${props => props.scrolled ? '50%' : '8px'};
  border-color: ${flavorColor};
  padding:  ${props => props.scrolled ? '0px 0px' : '15px 20px'};
  &:hover {
    background-color: #f5f5f5;
    border-color: ${flavorColor};
    color: ${flavorColor};
  }
`;
const MailButtonLink = styled.a `
  text-decoration: none;
  
  cursor: pointer;
  display: block;
  font-weight: bold;
  border-style: solid;
  border-radius: 50%;
  border-color: transparent;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  font-size:  28px;
  position: ${props => props.scrolled ? 'fixed' : 'fixed'};
  top: ${props => props.scrolled ? '12px' : 'calc(35vh + 175px)'};
  @media(max-width: 813px) {
    top: ${props => props.scrolled ? 'auto' : 'calc(35vh + 230px)'};
    bottom: ${props => props.scrolled ? '190px' : 'auto'};
  }
  left: ${props => props.scrolled ? 'calc( 95vw - 400px)' : ' calc(310px + 5vw )'};
  @media(max-width: 813px) {
    left: ${props => props.scrolled ? 'calc(42.5px + 2vw )' : 'calc(310px + 5vw )'};
  }
  margin-top: ${props => props.scrolled ? '3px' : '21px'};
  z-index: ${props => props.scrolled ? '12' : '0'};
  padding: ${props => props.scrolled ? '0' : '4px 4px'};
  margin-left: -40px;
  width: 60px;
  height: auto;
  color: #f5f5f5;
  background-color: ${props => props.scrolled ? `${flavorColor}` : `${flavorColor}`};
  border-color:  ${flavorColor} ;
  &:hover {
    background-color: ${props => props.scrolled ? '#0b0c10' : '#f5f5f5'};
    border-color: ${flavorColor};
    color: ${props => props.scrolled ?  `${flavorColor}` : `${flavorColor}`};
  }
`;

const Icons = styled.div `
  text-decoration: none;
  position: fixed;
  bottom: 2vh;
  right: 2vw;
  font-size: 50px;
  z-index: 20;
  @media(max-width: 813px) {
    right: auto;
    left: 2vw;
  }
`;
const Icon = styled.a `
  text-decoration: none;
  display: block;
  cursor: pointer;
  padding: 10px 10px;
  margin: 10px 0;
  border-radius: 50%;
  line-height: 4px;
  color: #f5f5f5;
  transition-duration: 0.6s;
  -webkit-transition-duration: 0.6s;
  z-index: 2;
  background: #0b0c10;
  
  &:hover {
    color: #0b0c10;
    background: #f5f5f5;
  }
`;
export default Title;