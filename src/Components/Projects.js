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

export class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theposition: 0 
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
  
    const scrolled = winScroll / height
  
    if (scrolled > 0.1) {
      this.setState({
        scoll: scrolled,
      })
    }

  }
  render() {   
    const scroll = this.state.scoll;
    return (
      <React.Fragment>
        <br/>
        
        <CardArea id="work"  >
          <Card to={`/capstone`}  show={scroll > 0.12} left>
              <CardContent left/>
              <Img src={ osu }/>
              <CardWords>
                <CardTitle>Capstone</CardTitle>
                <CardDescription>
                The 'I' in 'Team'
                </CardDescription>  
              </CardWords>
          </Card>
          <Card to={`/purehoney`} show={scroll > 0.25}>
            <CardContent/>
            <Img src={ph1}/>
            <CardWords>
              <CardDescription>
              A Website to Buy Honey
              </CardDescription>
            </CardWords>
          </Card>
          <Card to={`/musicmajik`} show={scroll > 0.38} left>
            <CardContent left/>
            <Img src={mm1}/>
            <CardWords>
              <CardDescription>
              Organize your Music... Fast
              </CardDescription>
            </CardWords>
          </Card>
        </CardArea>
        <Games>Games</Games> 
        <CardArea>
          <Card to={`/kings-gambit`} show={scroll > 0.62} left>
            <CardContent left/>
            <Img src={ kg1 }/>
            <CardWords>
              <CardDescription>
              Chess-like + Rogue-like
              </CardDescription>
            </CardWords>
          </Card>
          <Card to={`/master-blaster`} show={scroll > 0.75}>
            <CardContent/>
            <Img src={ mb3 }/>
            <CardWords>
              <CardDescription>
              A Retro Game with a Twist
              </CardDescription>
            </CardWords>
            
          </Card>
          <Card to={`/ships`} show={scroll > 0.88} left>
            <CardContent left/>
            <Img src={ships}/>
            <CardWords>
              <CardDescription>
              A Party Game for Pirates
              </CardDescription>
            </CardWords>
          </Card>
        </CardArea>
      </React.Fragment>
    );
  }
}

export default Projects;

const CardArea = styled.div`
  display: flexbox;
  display:-webkit-flex;
  flex-wrap: wrap;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  align-items: center;
  
  @media(max-width: 768px) {
    justify-content: center;
  }
`;
const Card = styled(NavLink)`
  text-decoration: none;
  display: block;
  width: 50vw;
  background: black;
  margin-bottom: 100px;
  height: 600px;
  transition-duration: 0.4s;
  border-radius: 16px;
  position: relative;
  width: 100%;  
  ${props => props.left ? 
    'left: ' + (props.show ? '0' : '-100vw')+';'
    :
    'right: ' + (props.show ? '0' : '-100vw')+';'
  }
  

`;
const CardContent = styled.div `
  position: absolute;
  background: black;
  height: 100%;
  width: 100vw;

  z-index: -1;
  border-radius: 16px;
  left: ${props => props.left ? '-75vw' : '0'};
`;
const Img = styled.img `
  position: relative;
  z-index: 2;
  height: 75%;
  width: 75%;
  border-radius: 16px;
  margin-top: 40px;

  float: center;
  transition-duration: 0.6s;
  -webkit-transition-duration: 0.6s;
  object-fit: cover;
  &:hover {
    opacity: 0.35;
    filter: blur(8px);
    -webkit-filter: blur(8px);
  }
  
`;
const CardWords = styled.div `
  position: absolute;
  top: 30px;
  z-index: 2;
  right: 30px;
  height: 100px;
  background: rgba( 255, 255, 255, 0.5 );
  box-shadow: 0 8px 32px 0 rgba( 0, 0, 0, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
`;
const CardTitle = styled.div `
  padding: 20px;
  padding-bottom: 0px;
  text-align: right;
  font-size: 36px;
  font-weight: 800;
  color: black;
  z-index: 1;
`;

const CardDescription = styled.div `
  font-size: 24px;
  text-align: right;
  padding: 0 20px;
  color: white;
  z-index: 1;
`;
const Games = styled.div `
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  margin: 100px 0;
  z-index: 1;

`;