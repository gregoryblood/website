import React from 'react';
import styled from '@emotion/styled';
import whattowear from '../Images/whattowear.png';
import ships from '../Images/ships.png';
import mb3 from '../Images/mb3.png';
import kg1 from '../Images/kg1.PNG';
import ph1 from '../Images/ph1.png';
import mm1 from '../Images/spotify.png';
import osu from '../Images/beavers.png';
import { NavLink } from 'react-router-dom';
import { flavorColor } from './Colors';

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
    console.log(scrolled);
    if (scrolled > 0.1) {
      if (!this.state.scroll) {
        this.setState({
          scroll: true
        })
      }
    } else {
      if (this.state.scroll) {
        this.setState({
          scroll: false
        })
      }
    }

  }
  render() {   
    const scroll = this.state.scroll;
    return (
      <React.Fragment>
        <Games>Check out what I've built!</Games> 
        <CardArea id="work"  >
          
          <Card to={`/capstone`} 
            src={ osu } 
            show={scroll} 
            size = {'450px 300px'}>
              <CardWords>
                <CardTitle>Capstone</CardTitle>
                <CardFlavor>
                The 'I' in 'Team'
                </CardFlavor>  
              </CardWords>
          </Card>
          <Card to={`/purehoney`}
            pureHoney={true}
            src={ph1}
            show={scroll}
            size = {'400px 400px'}>
            <CardWords>
              <CardTitle>Pure Honey</CardTitle>
              <CardFlavor>
              A Website to Buy Honey
              </CardFlavor>
            </CardWords>
          </Card>
          <Card to={`/musicmajik`}
            src={mm1}
            show={scroll}
            isBlack={true}
            size = {'450px 300px'}>
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
          <Card to={`/kings-gambit`}
            src={ kg1 }
            show={scroll}
            isBlack={true}
            size = {'586px 300px'}
            >
            <CardWords>
              <CardTitle>King's Gambit</CardTitle>
              <CardFlavor>
              Chess-like + Rogue-like
              </CardFlavor>
            </CardWords>
          </Card>
          <Card to={`/master-blaster`}
          src={ mb3 }
          show={scroll}
          hasTitle={true}
          size = {'400px 300px'}>
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

const CardArea = styled.div`
  display: flex;
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
  -webkit-transition: all 500ms;
  transition: all 500ms;
  border-radius: 16px;
  position: relative;
  opacity: ${props => props.show ? 1 : 0};
  
  ${props => props.isBlack ? 'background: #000000;' : 'background: #ffffff;'}

  background-image: url(${props => props.src});
  background-position: center; 
  background-repeat: no-repeat;
  background-size: ${props => props.size};
  color: transparent;
  @media(max-width: 880px) {
    width: 95vw;
  }
  &:hover {
    background-image: url(${props => props.src});
    transform: scale(1.1);
    ${props => props.isBlack || props.hasTitle ? 'color: white;' : 'color: black;'}
  }
`;

const Img = styled.img `
  display: none;
  position: relative;
  z-index: 2;
  height: 100%;
  width: 100%;
  border-radius: 16px;
  margin-top: 0px;
  float: center;

  object-fit: cover;

`;
const CardWords = styled.div `
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 16px;
  top: 0;
  z-index: 5;
  pointer-events:none;

`;
const CardTitle = styled.div `
  position: absolute;
  bottom: 0.3rem;
  left: 0.5rem;
  font-size: 1.5rem;
  font-weight: 800;
`;

const CardFlavor = styled.div `
  display: none;
  font-size: 24px;
  text-align: right;
  font-style: italic;
`;
const Games = styled.div `
  font-size: 1.5rem;
  text-align: center;
  margin: 100px 0 0 0;
  z-index: 1;

`;

export default Projects;
