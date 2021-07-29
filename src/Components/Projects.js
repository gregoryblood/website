import React from 'react';
import styled from '@emotion/styled';
import whattowear from '../Images/whattowear.png';
import ships from '../Images/ships.png';
import mb3 from '../Images/mb3.png';
import kg1 from '../Images/kg1.PNG';
import ph1 from '../Images/ph1.jpg';
import mm1 from '../Images/mm1.png';
import osu from '../Images/osu.PNG';
import { NavLink } from 'react-router-dom';
import { flavorColor } from './Colors';

var scroll = 0;
export class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: false
    };
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll);
  }
  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
  
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
  
    const scrolled = winScroll / height;
    if (scrolled > 0.1) {
      if (!this.state.scroll) {
        this.setState({
          scoll: true
        })
      }
    } else {
      if (this.state.scroll) {
        this.setState({
          scoll: false
        })
      }
    }

  }
  render() {   
    const scroll = this.state.scoll;
    return (
      <React.Fragment>
        <Games>Check out what I've built!</Games> 
        <CardArea id="work"  >
          
          <Card to={`/capstone`}  show={scroll} >
              <Img src={ osu }/>
              <CardWords>
                <CardTitle>Capstone</CardTitle>
                <CardFlavor>
                The 'I' in 'Team'
                </CardFlavor>  
              </CardWords>
          </Card>
          <Card to={`/purehoney`} show={scroll}>
            <Img src={ph1}/>
            <CardWords>
              <CardTitle>Pure Honey</CardTitle>
              <CardFlavor>
              A Website to Buy Honey
              </CardFlavor>
            </CardWords>
          </Card>
          <Card to={`/musicmajik`} show={scroll} >
            <Img src={mm1}/>
            <CardWords>
              <CardTitle>Music Majik</CardTitle>
              <CardFlavor>
              Organize your Music... Fast
              </CardFlavor>
            </CardWords>
          </Card>
        </CardArea>
        <Games>Try some of the games I made while you're here!</Games> 
        <CardArea>
          <Card to={`/kings-gambit`} show={scroll} >
            <Img src={ kg1 }/>
            <CardWords>
              <CardTitle>King's Gambit</CardTitle>
              <CardFlavor>
              Chess-like + Rogue-like
              </CardFlavor>
            </CardWords>
          </Card>
          <Card to={`/master-blaster`} show={scroll}>
            <Img src={ mb3 }/>
            <CardWords>
              <CardTitle>Master Blaster</CardTitle>
              <CardFlavor>
              A Retro Game with a Twist
              </CardFlavor>
            </CardWords>
            
          </Card>
          {/*
            <Card to={`/ships`} show={scroll} >
              <Img src={ships}/>
              <CardWords>
                <CardTitle>Ships!</CardTitle>
                <CardFlavor>
                A Party Game for Pirates
                </CardFlavor>
              </CardWords>
            </Card>
          */}
        </CardArea>
      </React.Fragment>
    );
  }
}

export default Projects;

const CardArea = styled.div`
  background: ${flavorColor}
  display: flexbox;
  display:-webkit-flex;
  flex-wrap: wrap;
  text-align: center;

  max-width: 900px;
  margin: 0 auto;
  align-items: center;
  flex-direction: row;
  padding: 0 20px 20px 20px;
  @media(max-width: 880px) {
    justify-content: center;
    width: 100vw;
    padding: 0;
  }
  
`;
const Card = styled(NavLink)`
  text-decoration: none;
  display: block;
  width: 90vw;
  height: 60vw;
  max-width: 400px;
  max-height: 300px;
  margin: 1rem;
  transition-duration: 1s;
  -webkit-transition-duration: 1s;
  border-radius: 16px;
  position: relative;
  opacity: ${props => props.show ? 1 : 0}
  @media(max-width: 880px) {
    width: 95vw;
  }
`;

const Img = styled.img `
  position: relative;
  z-index: 2;
  height: 100%;
  width: 100%;
  border-radius: 16px;
  margin-top: 0px;
  float: center;
  transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  transition: transform 300ms ease-in-out;
  object-fit: cover;
  &:hover {
    transform: scale(1.1);

  }
`;
const CardWords = styled.div `
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 5;
  pointer-events:none;
  background: linear-gradient(0deg, #00000088 30%, #ffffff44 100%);
  &:hover {
    color: black;
  }
`;
const CardTitle = styled.div `
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 36px;
  font-weight: 800;
  color: white;
`;

const CardFlavor = styled.div `
  display: none;
  font-size: 24px;
  text-align: right;
  color: gray;
  font-style: italic;
`;
const Games = styled.div `
  font-size: 1.5rem;
  text-align: center;
  margin: 100px 0 0 0;
  z-index: 1;

`;