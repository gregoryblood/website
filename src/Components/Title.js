import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react'
import { AiOutlineGithub,  AiFillLinkedin} from 'react-icons/ai';
import { FiChevronsDown, FiMail} from 'react-icons/fi';
import {flavorColor, flavorColor2, backgroundColor, notWhite, darkGray} from './Colors';
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
    this.interval = setInterval(() => this.setState({ word: heys[i++] }), 1000);
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
  
    if (scrolled > 0.04) {
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
      <TitleSegment>
        <div id="home"></div>
        <NavBar>
          <NavBarItems>
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
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={400}>
                Skills
              </NavLink>
              <NavLinkButton target='_blank' href={'https://raw.githubusercontent.com/gregoryblood/gregoryblood.github.io/master/resume.pdf'}>
                Resume 
              </NavLinkButton>
            </NavLinks>
          </NavBarItems>
        </NavBar>
        <Fade >
        <HomeBody >
            <Greeting>
              {this.state.word} 
            </Greeting>
            <Headline>
              Let's build something together.
            </Headline>
            <Flavor>
              Your dream developed.
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
          <MailButtonLink scrolled href={`mailto: gregoryblood1998@gmail.com?`}><MailButton><FiMail/></MailButton></MailButtonLink>
          :
          <MailButtonLink href={`mailto: gregoryblood1998@gmail.com?`}><MailButton><FiMail/></MailButton></MailButtonLink>
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
        <DownArrow><FiChevronsDown/></DownArrow>
      </TitleSegment>
    );
  }
}

const TitleSegment = styled.div `
  color: ${backgroundColor};
`;
const Fade = styled.div `
`;
const NavBar = styled.div `
  position: fixed;
  width: 100%;
  z-index: 10;

  height: 5rem;
  top: 0;
  border-color: ${flavorColor};
  border-top-style: solid;
  border-width: 0.3rem;
  @media(max-width: 813px) {
    top: auto;
    bottom: 0;
    border-top-style: none;
    border-bottom-style
  }
`;
const NavBarItems = styled.div `
  background: rgb(34, 38, 41, 0.9);
  margin: 0 auto;
  width: 95vw;
  height: 100%;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  @media(max-width: 813px) {
    width: 100%;
    display: block;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
  }
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
    left: 0;
    top: auto;
    bottom: 1rem;
    padding: 0;
    margin: 0;
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
  @media(max-width: 813px) {
    display: none;
  }
`;

const NavLinkButton = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 1rem;
  padding: 0.4rem 0.8rem;
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
    background: transparent;
  }
  @media(max-width: 813px) {
    margin-left: 2rem;
    position: fixed;
    right: 0.5rem;
    bottom: 1rem;
  }
`;
const HomeBody = styled.div `
  font-weight: bold;
  position: fixed;
  top: 35vh;
  padding: 10px 5vw;
  color: #979fab;
  @media(max-width: 813px) {
    top: 10vh;
  }
`;
const Headline = styled.div `
  color: white;
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
  font-size: 3rem;
  @media(max-width: 813px) {
    font-size: 3rem;
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
  color: #999999;
  @media(max-width: 813px) {
    font-size: 1.5rem;
  }
`;
const MailButton = styled.div `
  text-decoration: none;
  display: block;
  cursor: pointer;
  padding: 0.7rem;
  font-size: 2rem;
  border-radius: 50%;
  border-width: 0.25rem;
  border-style: solid;
  border-color: transparent;
  line-height: 1rem;
  color: black;
  transition-duration: 0.6s;
  -webkit-transition-duration: 0.6s;
  z-index: 2;
  background: ${flavorColor};

  &:hover {
    color: ${flavorColor};
    background: transparent;
    border-color: ${flavorColor}
  }
  @media(max-width: 813px) {
    padding: 0.5rem;
    font-size: 1.75rem;
  }
`;
const WorkButton = styled(Link) `
  text-decoration: none;
  background-color: ${flavorColor};
  cursor: pointer;
  display: block;
  color: black;
  font-weight: bold;
  border-style: solid;
  border-radius: 8px;
  border-color: transparent;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  font-size:  32px;
  position: fixed;
  top: calc(35vh + 175px);
  left: 5vw;
  margin-top: 0.75rem;
  z-index: 0;
  width: 200px;
  height: auto;
  border-radius: 8px;
  border-color: ${flavorColor};
  padding: 15px 20px;
  &:hover {
    background-color: transparent;
    border-color: ${flavorColor};
    color: ${flavorColor};
  }
  @media(max-width: 813px) {
    top: auto;
    bottom: 7rem;
  }
`;
const MailButtonLink = styled.a `
  text-decoration: none;
  cursor: pointer;
  display: block;
  transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  position: fixed;
  top: ${props => props.scrolled ? '0.8rem' : 'calc(35vh + 175px)'};
  left: ${props => props.scrolled ? 'calc( 95vw - 375px)' : ' calc(310px + 5vw )'};
  margin-top: ${props => props.scrolled ? '0rem' : '1.2rem'};
  z-index: 10;
  margin-left: ${props => props.scrolled ? '-2rem' : '-2rem'};

  color: ${backgroundColor};
  
  @media(max-width: 813px) {
    margin-left: -2.5rem;
    top: auto;
    bottom: 0.85rem;
    left: 10.5rem;
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
    bottom: 0.3rem;
  }
`;
const Icon = styled.a `
  text-decoration: none;
  display: block;
  cursor: pointer;
  padding: 10px 10px;
  margin: 0.6rem 0;
  border-radius: 50%;
  line-height: 4px;
  color: #f5f5f5;
  transition-duration: 0.6s;
  -webkit-transition-duration: 0.6s;
  z-index: 2;
  font-size: 3rem;
  background: rgb(34, 38, 41, 0.9);
  &:hover {
    color: rgb(34, 38, 41, 0.9);
    background: ${notWhite};
  }
  @media(max-width: 813px) {
    font-size: 2rem;
    display: inline-block;
    margin: 0 0.2rem;
  }
`;

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -2rem, 0);
  }

  70% {
    transform: translate3d(0, -1rem, 0);
  }

  90% {
    transform: translate3d(0,-0.4rem,0);
  }
`;
const DownArrow = styled.div `
  position: fixed;
  bottom: 0.5rem;
  left: 50%;
  width: 4rem;
  margin-left: -2rem;
  animation: ${bounce} 1.5s ease infinite;
  color: white;
  font-size: 3rem;
  @media(max-width: 813px) {
    bottom: 7rem;
    right: -0.2rem;
    left: auto;
  }
`;
export default Title;